# Complete Deployment Guide

This guide covers deploying the Feedback System to Render (backend) and Vercel (frontend).

## 📋 Quick Checklist

### Backend (Render)
- [ ] Push backend code to Git repository
- [ ] Create Render account
- [ ] Create new Web Service on Render
- [ ] Set environment variables (MONGODB_URI, FRONTEND_URL)
- [ ] Deploy and get backend URL

### Frontend (Vercel)
- [ ] Push frontend code to Git repository
- [ ] Create Vercel account
- [ ] Import project to Vercel
- [ ] Set environment variable (VITE_API_URL)
- [ ] Deploy and get frontend URL
- [ ] Update backend FRONTEND_URL with Vercel URL

## 🚀 Deployment Steps

### Step 1: Deploy Backend to Render

1. **Prepare your code:**
   ```bash
   cd backend
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

2. **Create Render Service:**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your Git repository
   - Select the repository

3. **Configure Service:**
   - **Name**: `feedback-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend` (if backend is in subdirectory)

4. **Set Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string
   FRONTEND_URL=https://your-app.vercel.app (update after frontend deploy)
   ```

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (2-5 minutes)
   - Note your backend URL: `https://your-service.onrender.com`

6. **Test Backend:**
   ```bash
   curl https://your-service.onrender.com/api/health
   ```

### Step 2: Deploy Frontend to Vercel

1. **Prepare your code:**
   ```bash
   cd frontend
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

2. **Import to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your Git repository

3. **Configure Project:**
   - Framework: `Vite` (auto-detected)
   - Root Directory: `frontend` (if frontend is in subdirectory)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `dist` (auto-filled)

4. **Set Environment Variable:**
   ```
   VITE_API_URL=https://your-service.onrender.com/api
   ```
   Replace `your-service.onrender.com` with your actual Render backend URL.

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (1-3 minutes)
   - Note your frontend URL: `https://your-project.vercel.app`

6. **Update Backend CORS:**
   - Go back to Render dashboard
   - Update `FRONTEND_URL` environment variable with your Vercel URL
   - Restart the service

### Step 3: Test Everything

1. Visit your Vercel frontend URL
2. Submit a feedback through the form
3. Check the Dashboard to see if data loads
4. Verify analytics cards show correct data

## 🔧 Environment Variables Reference

### Backend (Render)

| Variable | Value | Required |
|----------|-------|----------|
| `NODE_ENV` | `production` | Yes |
| `MONGODB_URI` | MongoDB Atlas connection string | Yes |
| `FRONTEND_URL` | Your Vercel frontend URL | Yes (after frontend deploy) |
| `PORT` | Auto-set by Render | No |

### Frontend (Vercel)

| Variable | Value | Required |
|----------|-------|----------|
| `VITE_API_URL` | `https://your-backend.onrender.com/api` | Yes |

## 📝 Important Notes

1. **MongoDB Atlas Setup:**
   - Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free cluster
   - Get connection string
   - Whitelist IP `0.0.0.0/0` for all IPs (or specific IPs)

2. **CORS Configuration:**
   - Backend automatically allows requests from `FRONTEND_URL`
   - Make sure URLs match exactly (including `https://`)

3. **Environment Variables:**
   - Vite requires `VITE_` prefix for frontend env vars
   - Rebuild/redeploy after adding environment variables

4. **Render Free Tier:**
   - Services may spin down after 15 min inactivity
   - First request after spin-down may take 30-60 seconds
   - Consider upgrading for always-on service

## 🐛 Troubleshooting

### Backend Issues

**Build Fails:**
- Check `package.json` has correct scripts
- Verify all dependencies are listed

**MongoDB Connection Error:**
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas network access settings

**CORS Errors:**
- Verify `FRONTEND_URL` matches your Vercel URL exactly
- Check backend logs for CORS errors

### Frontend Issues

**API Calls Fail:**
- Verify `VITE_API_URL` is set correctly
- Check it includes `/api` at the end
- Ensure backend is running and accessible

**Build Fails:**
- Check Node.js version (Vercel uses 18+)
- Verify all dependencies in `package.json`

**404 on Page Refresh:**
- `vercel.json` handles this automatically
- Verify `vercel.json` is in frontend root

## 🔗 Quick Links

- [Render Dashboard](https://dashboard.render.com)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 📚 Detailed Guides

For more detailed instructions, see:
- `backend/DEPLOY.md` - Detailed Render deployment guide
- `frontend/DEPLOY.md` - Detailed Vercel deployment guide

## ✅ Post-Deployment Checklist

- [ ] Backend health check returns 200
- [ ] Frontend loads without errors
- [ ] Can submit feedback successfully
- [ ] Dashboard displays feedbacks
- [ ] Analytics cards show correct data
- [ ] No CORS errors in browser console
- [ ] MongoDB connection working

---

**Need Help?** Check the detailed deployment guides in `backend/DEPLOY.md` and `frontend/DEPLOY.md`


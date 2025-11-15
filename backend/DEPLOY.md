# Deploy Backend to Render

This guide will help you deploy the Express backend to Render.

## Prerequisites

1. A [Render](https://render.com) account (free tier available)
2. MongoDB Atlas account with connection string
3. Your backend code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Step-by-Step Deployment

### 1. Push Code to Git Repository

Make sure your backend code is in a Git repository:

```bash
cd backend
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Create New Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your Git repository
4. Select the repository containing your backend code

### 3. Configure the Service

Fill in the following settings:

- **Name**: `feedback-backend` (or your preferred name)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `backend` (if backend is in a subdirectory, otherwise leave empty)
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### 4. Set Environment Variables

In the Render dashboard, go to **Environment** tab and add:

| Key | Value | Description |
|-----|-------|-------------|
| `NODE_ENV` | `production` | Environment mode |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection string |
| `FRONTEND_URL` | `https://your-app.vercel.app` | Your Vercel frontend URL (add after deploying frontend) |
| `PORT` | (auto-set by Render) | Port number (Render sets this automatically) |

**Important**: 
- Get your MongoDB Atlas connection string from your MongoDB Atlas dashboard
- Update `FRONTEND_URL` after you deploy the frontend to Vercel

### 5. Deploy

1. Click **"Create Web Service"**
2. Render will automatically build and deploy your application
3. Wait for the deployment to complete (usually 2-5 minutes)
4. Your backend will be available at: `https://your-service-name.onrender.com`

### 6. Test the Deployment

Test your backend health endpoint:
```bash
curl https://your-service-name.onrender.com/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

### 7. Update Frontend Environment Variable

After deployment, update your frontend's `VITE_API_URL` environment variable in Vercel to point to your Render backend URL.

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that `package.json` has correct `start` script
   - Verify all dependencies are listed in `package.json`

2. **MongoDB Connection Error**
   - Verify `MONGODB_URI` is correct in environment variables
   - Check MongoDB Atlas network access allows Render's IPs (or use `0.0.0.0/0` for all IPs)

3. **CORS Errors**
   - Make sure `FRONTEND_URL` is set correctly in Render environment variables
   - Verify the frontend URL matches exactly (including `https://`)

### Render Free Tier Limitations

- Services spin down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- Consider upgrading to paid tier for always-on service

## Next Steps

After deploying the backend:
1. Note your Render backend URL (e.g., `https://feedback-backend.onrender.com`)
2. Deploy frontend to Vercel (see `frontend/DEPLOY.md`)
3. Update `FRONTEND_URL` in Render with your Vercel URL
4. Update `VITE_API_URL` in Vercel with your Render backend URL


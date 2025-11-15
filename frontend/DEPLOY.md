# Deploy Frontend to Vercel

This guide will help you deploy the React frontend to Vercel.

## Prerequisites

1. A [Vercel](https://vercel.com) account (free tier available)
2. Your frontend code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Backend deployed to Render (to get the backend URL)

## Step-by-Step Deployment

### 1. Push Code to Git Repository

Make sure your frontend code is in a Git repository:

```bash
cd frontend
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Import Project to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Import your Git repository
4. Select the repository containing your frontend code

### 3. Configure the Project

Vercel will auto-detect Vite. Configure as follows:

- **Framework Preset**: `Vite` (auto-detected)
- **Root Directory**: `frontend` (if frontend is in a subdirectory, otherwise leave as `.`)
- **Build Command**: `npm run build` (auto-filled)
- **Output Directory**: `dist` (auto-filled)
- **Install Command**: `npm install` (auto-filled)

### 4. Set Environment Variables

In the **Environment Variables** section, add:

| Key | Value | Description |
|-----|-------|-------------|
| `VITE_API_URL` | `https://your-backend.onrender.com/api` | Your Render backend URL with `/api` path |

**Important**: 
- Replace `your-backend.onrender.com` with your actual Render backend URL
- Include `/api` at the end (e.g., `https://feedback-backend.onrender.com/api`)
- **DO NOT include quotes** around the URL value in Vercel
- Example: `https://feedback-backend.onrender.com/api` (correct)
- ❌ Wrong: `"https://feedback-backend.onrender.com/api"` (with quotes)
- This will be used in production instead of the proxy

### 5. Deploy

1. Click **"Deploy"**
2. Vercel will automatically build and deploy your application
3. Wait for the deployment to complete (usually 1-3 minutes)
4. Your frontend will be available at: `https://your-project-name.vercel.app`

### 6. Test the Deployment

1. Visit your Vercel deployment URL
2. Try submitting feedback through the form
3. Check the Dashboard to see if data loads correctly

### 7. Update Backend CORS

After deployment, update your Render backend's `FRONTEND_URL` environment variable with your Vercel URL:

```
FRONTEND_URL=https://your-project-name.vercel.app
```

Then restart the Render service for changes to take effect.

## Using Vercel CLI (Alternative Method)

You can also deploy using Vercel CLI:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to frontend directory
cd frontend

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add VITE_API_URL
# Enter: https://your-backend.onrender.com/api

# Deploy to production
vercel --prod
```

## Environment Variables

### Development vs Production

- **Development**: Uses proxy in `vite.config.js` (points to `http://localhost:5000`)
- **Production**: Uses `VITE_API_URL` environment variable (points to Render backend)

The API service automatically switches between these based on the environment.

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check that all dependencies are in `package.json`
   - Verify Node.js version (Vercel uses Node 18+ by default)

2. **API Calls Fail (CORS Errors)**
   - Verify `VITE_API_URL` is set correctly in Vercel
   - Check that backend CORS allows your Vercel domain
   - Ensure backend `FRONTEND_URL` matches your Vercel URL exactly

3. **404 Errors on Page Refresh**
   - This is handled by `vercel.json` rewrite rules
   - Make sure `vercel.json` is in your frontend root directory

4. **Environment Variables Not Working**
   - Vite requires `VITE_` prefix for environment variables
   - Rebuild after adding environment variables
   - Check variable names match exactly (case-sensitive)

### Checking Environment Variables

To verify environment variables are set:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Ensure `VITE_API_URL` is listed
3. Redeploy if you just added it

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `FRONTEND_URL` in Render backend with your custom domain

## Next Steps

After deploying:
1. Test all functionality (form submission, dashboard, analytics)
2. Share your Vercel URL with users
3. Monitor both Vercel and Render dashboards for any errors

## Free Tier Limitations

- **Vercel**: 
  - Unlimited deployments
  - 100GB bandwidth/month
  - Perfect for this project

- **Render**: 
  - Services may spin down after inactivity
  - First request after spin-down may be slow


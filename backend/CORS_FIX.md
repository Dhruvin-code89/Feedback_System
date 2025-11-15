# CORS Fix for Production Deployment

## Issue
CORS errors when frontend (Vercel) tries to access backend (Render).

## Solution Applied

1. **Updated CORS Configuration** in `server.js`:
   - Added explicit Vercel domain: `https://feedbacksystem-liard.vercel.app`
   - Allow all `*.vercel.app` domains
   - Added explicit methods: `['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']`
   - Added allowed headers: `['Content-Type', 'Authorization']`

2. **Added Global OPTIONS Handler**:
   - Handles preflight requests before routes
   - Ensures CORS headers are sent for OPTIONS requests

## Environment Variables in Render

Make sure you have these set in your Render dashboard:

```
FRONTEND_URL=https://feedbacksystem-liard.vercel.app
NODE_ENV=production
```

## After Deploying

1. **Redeploy the backend** on Render with the updated code
2. **Verify CORS** by checking the response headers:
   ```bash
   curl -H "Origin: https://feedbacksystem-liard.vercel.app" \
        -H "Access-Control-Request-Method: POST" \
        -X OPTIONS \
        https://feedback-system-w93v.onrender.com/api/feedback \
        -v
   ```

   You should see:
   ```
   Access-Control-Allow-Origin: https://feedbacksystem-liard.vercel.app
   Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
   ```

3. **Test the actual request**:
   ```bash
   curl -H "Origin: https://feedbacksystem-liard.vercel.app" \
        -H "Content-Type: application/json" \
        -X POST \
        -d '{"name":"Test","message":"Test","rating":5}' \
        https://feedback-system-w93v.onrender.com/api/feedback
   ```

## If Still Not Working

1. Check Render logs for CORS errors
2. Verify `FRONTEND_URL` environment variable is set correctly
3. Make sure the backend was redeployed after code changes
4. Clear browser cache and try again


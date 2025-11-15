# Fix: Vercel Environment Variable with Quotes

## Problem
The error shows `api%22/feedback` which means there's a quote (`"`) in your `VITE_API_URL` environment variable. The `%22` is the URL-encoded version of a double quote.

## Solution

### Step 1: Fix the Environment Variable in Vercel

1. Go to your Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Find `VITE_API_URL`
5. **Edit** the value and make sure it has NO quotes:

   ✅ **Correct:**
   ```
   https://feedback-system-w93v.onrender.com/api
   ```

   ❌ **Wrong (causes the error):**
   ```
   "https://feedback-system-w93v.onrender.com/api"
   ```

6. **Save** the changes
7. **Redeploy** your application (Vercel will auto-redeploy after saving env vars, or trigger a manual redeploy)

### Step 2: Verify the Fix

After redeploying, check the browser console. The URL should be:
```
https://feedback-system-w93v.onrender.com/api/feedback
```

NOT:
```
https://feedback-system-w93v.onrender.com/api%22/feedback
```

## Code Fix Applied

I've also updated the code to automatically strip quotes from the environment variable, so even if you accidentally add quotes, it will work. But it's still best practice to not include quotes.

## Quick Check

To verify your environment variable is set correctly in Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Check that `VITE_API_URL` value is exactly:
   ```
   https://feedback-system-w93v.onrender.com/api
   ```
3. No quotes, no extra spaces, no trailing slashes (the code handles trailing slashes)


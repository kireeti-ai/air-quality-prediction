# Frontend Deployment Guide for Render

This guide explains how to deploy the Air Quality Prediction frontend to Render.

## Prerequisites

1. A Render account (https://render.com)
2. Your backend already deployed on Render with a URL (e.g., `https://your-backend.onrender.com`)

## Deployment Steps

### 1. Prepare Environment Variables

Before deploying, you need to set up the environment variable for the backend URL:

1. In your Render dashboard, create a new **Static Site**
2. Connect your GitHub repository
3. Set the following configuration:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Root Directory**: `Frontend`

### 2. Configure Environment Variables

In the Render dashboard for your static site, add the following environment variable:

- **Key**: `VITE_API_URL`
- **Value**: `https://your-backend.onrender.com/api` (replace with your actual backend URL)

**Important**: 
- Make sure to include `/api` at the end of your backend URL
- Do NOT include a trailing slash after `/api`
- The URL should look like: `https://your-backend-name.onrender.com/api`

### 3. Deploy

Click "Create Static Site" or "Manual Deploy" to start the deployment process.

## Local Development

For local development with environment variables:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and set your backend URL:
   ```
   VITE_API_URL=/api
   ```
   
   For local Docker development, use `/api` (the nginx proxy will handle routing).
   For development against a deployed backend, use the full URL like `https://your-backend.onrender.com/api`.

3. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration Details

The frontend uses Vite's environment variable system:

- Environment variables must be prefixed with `VITE_` to be exposed to the client
- The API configuration is centralized in `src/config.js`
- The default value is `/api` for local Docker development

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Make sure your backend has CORS enabled (it should already be configured in `app.py`)
2. Verify the backend URL in the environment variable is correct
3. Check that the backend is actually running and accessible

### 404 Errors

If API calls return 404:

1. Verify the `VITE_API_URL` environment variable is set correctly in Render
2. Make sure the backend URL includes `/api` at the end
3. Test the backend directly by visiting `https://your-backend.onrender.com/api/predict` in your browser

### Environment Variable Not Working

If the environment variable doesn't seem to be applied:

1. Environment variables are baked into the build at build time
2. After changing `VITE_API_URL` in Render, you must trigger a new deploy
3. Clear your browser cache after deploying

## Notes

- Environment variables in Vite are embedded at build time, not runtime
- Any change to `VITE_API_URL` requires a rebuild and redeploy
- The `.env` file is ignored by git for security (see `.gitignore`)

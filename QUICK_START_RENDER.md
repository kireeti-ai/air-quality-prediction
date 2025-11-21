# Quick Reference: Deploying to Render

This is a quick reference guide for deploying the Air Quality Prediction app to Render.

## Backend Deployment (5 steps)

1. **Create Web Service** in Render dashboard
2. **Connect Repository**: `kireeti-ai/air-quality-prediction`
3. **Configure Service**:
   - Name: `air-quality-backend` (or your choice)
   - Root Directory: `Backend`
   - Runtime: Python 3
   - Build Command: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn -w 4 -b 0.0.0.0:5000 app:app`
4. **Add Environment Variables** (if needed):
   - `OPENWEATHER_API_KEY`: (optional - already hardcoded in app.py)
5. **Deploy** and copy the URL (e.g., `https://air-quality-backend-xyz.onrender.com`)

## Frontend Deployment (6 steps)

1. **Create Static Site** in Render dashboard
2. **Connect Repository**: `kireeti-ai/air-quality-prediction`
3. **Configure Service**:
   - Name: `air-quality-frontend` (or your choice)
   - Root Directory: `Frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
4. **Add Environment Variable**:
   - Key: `VITE_API_URL`
   - Value: `https://air-quality-backend-xyz.onrender.com/api`
   - ⚠️ **IMPORTANT**: Replace `xyz` with your actual backend URL
   - ⚠️ **IMPORTANT**: Include `/api` at the end, NO trailing slash
5. **Deploy** the static site
6. **Test** by visiting the frontend URL and entering a city name

## Verification

After deployment, test both services:

### Test Backend
```bash
curl https://air-quality-backend-xyz.onrender.com/api/predict \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"city":"London"}'
```

Expected: JSON response with AQI prediction

### Test Frontend
1. Open the frontend URL in your browser
2. Enter a city name (e.g., "London")
3. Click "Check"
4. Should see AQI results with gauge and details

## Common Issues

### ❌ "gunicorn: command not found"
- **Solution**: Already fixed! Make sure you're deploying the latest code with gunicorn in requirements.txt

### ❌ CORS errors in browser console
- **Solution**: Verify the backend URL in `VITE_API_URL` is correct
- Check that backend has CORS enabled (already configured in app.py)

### ❌ API calls return 404
- **Solution**: Ensure `VITE_API_URL` ends with `/api` (no trailing slash)
- Example: `https://backend.onrender.com/api` ✅
- Wrong: `https://backend.onrender.com/api/` ❌

### ❌ Old API URL still being used
- **Solution**: Rebuild the frontend after changing `VITE_API_URL`
- Environment variables are baked into the build at build time

## Need More Help?

- **Detailed Guide**: See `Frontend/DEPLOYMENT.md`
- **Testing Scenarios**: See `TESTING.md`
- **Changes Summary**: See `CHANGES_SUMMARY.md`

## URLs to Remember

- Render Dashboard: https://dashboard.render.com
- OpenWeather API: https://openweathermap.org/api
- Repository: https://github.com/kireeti-ai/air-quality-prediction

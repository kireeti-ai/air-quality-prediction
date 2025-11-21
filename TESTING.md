# Testing the Backend URL Configuration

This document explains how to test the backend URL configuration changes.

## What Changed

### Backend Changes
- **File**: `Backend/requirements.txt`
- **Change**: Added `gunicorn` to the dependencies
- **Purpose**: Required for production deployment on Render

### Frontend Changes
1. **New File**: `Frontend/src/config.js`
   - Centralizes API configuration
   - Uses `VITE_API_URL` environment variable with fallback to `/api`

2. **Modified File**: `Frontend/src/pages/HomePage.jsx`
   - Imports `API_ENDPOINTS` from `config.js`
   - Replaced hardcoded `/api/predict` URLs with `API_ENDPOINTS.PREDICT`

3. **New File**: `Frontend/.env.example`
   - Template for environment variables
   - Documents how to set `VITE_API_URL`

4. **Updated File**: `Frontend/.gitignore`
   - Added `.env`, `.env.local`, `.env.production` to ignored files

## Testing Scenarios

### Scenario 1: Local Development with Docker (Default)

**Setup**:
- No `.env` file or `VITE_API_URL` not set
- Running with `docker-compose up`

**Expected Behavior**:
- Frontend uses `/api` as the base URL
- Nginx proxy forwards `/api/*` requests to backend container
- API calls go to `/api/predict`

**Test**:
```bash
# Build and run with docker-compose
cd /home/runner/work/air-quality-prediction/air-quality-prediction
docker-compose up --build

# In another terminal, test the API
curl http://localhost:8080/api/predict -X POST -H "Content-Type: application/json" -d '{"city":"London"}'
```

### Scenario 2: Local Development with Separate Servers

**Setup**:
- Backend running on `http://localhost:5000`
- Frontend running on `http://localhost:5173`
- Create `.env` file with: `VITE_API_URL=http://localhost:5000/api`

**Expected Behavior**:
- Frontend uses `http://localhost:5000/api` as the base URL
- API calls go directly to backend at `http://localhost:5000/api/predict`

**Test**:
```bash
# Terminal 1: Start backend
cd Backend
python3 app.py

# Terminal 2: Start frontend
cd Frontend
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev

# Open browser to http://localhost:5173 and test the app
```

### Scenario 3: Render Deployment

**Setup**:
- Backend deployed to: `https://your-backend.onrender.com`
- Frontend static site with env var: `VITE_API_URL=https://your-backend.onrender.com/api`

**Expected Behavior**:
- Frontend build embeds `https://your-backend.onrender.com/api` as base URL
- API calls go to `https://your-backend.onrender.com/api/predict`

**Test**:
1. Deploy backend to Render with start command: `gunicorn -w 4 -b 0.0.0.0:5000 app:app`
2. Test backend: `curl https://your-backend.onrender.com/api/predict -X POST -H "Content-Type: application/json" -d '{"city":"London"}'`
3. Deploy frontend with `VITE_API_URL=https://your-backend.onrender.com/api`
4. Visit frontend URL and test the application

## Verification Checklist

- [ ] Backend installs successfully with `pip install -r requirements.txt`
- [ ] Gunicorn is available: `gunicorn --version`
- [ ] Frontend builds successfully: `npm run build`
- [ ] No new lint errors introduced (pre-existing errors are okay)
- [ ] config.js exports API_ENDPOINTS correctly
- [ ] HomePage.jsx imports and uses API_ENDPOINTS
- [ ] .env.example documents the required variable
- [ ] .gitignore excludes .env files
- [ ] DEPLOYMENT.md provides clear instructions

## Expected API Endpoint Behavior

Regardless of the deployment scenario, all API calls should:
1. Use POST method
2. Send JSON body with `{"city": "CityName"}`
3. Receive JSON response with AQI prediction data
4. Include proper CORS headers (already configured in backend)

## Rollback Plan

If issues occur:
1. Remove the `.env` file (frontend will use default `/api`)
2. Revert to previous commit: `git revert <commit-hash>`
3. For Render: Remove `VITE_API_URL` environment variable and redeploy

## Additional Notes

- Environment variables in Vite are **build-time** variables
- Changes to `VITE_API_URL` require rebuilding the frontend
- The backend URL must be accessible from the frontend's domain
- CORS is already configured in the backend (`flask-cors`)

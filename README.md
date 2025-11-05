# 🌫️ Air Quality Prediction

This is a full-stack web application that predicts the **Air Quality Index (AQI)** in real-time.

It consists of a **Python/Flask backend** that serves a machine learning model, and a **React/Vite/Tailwind frontend** that provides a user interface to get live predictions.

---

##  Tech Stack

- **Backend:** Python, Flask, scikit-learn, joblib, pandas  
- **Frontend:** React.js, Vite, Tailwind CSS, react-router-dom  
- **Data Source:** [OpenWeather API](https://openweathermap.org/)

---

## Model Details

The backend uses a pre-trained **Random Forest Regressor (`aqi_model_8_features.pkl`)** to predict the AQI.

- **Model:** `RandomForestRegressor` with 500 estimators  
- **Features:** The model was trained on 8 key pollutant features:  
  `PM2.5`, `PM10`, `NO`, `NO2`, `NH3`, `CO`, `SO2`, and `O3`

---

##  Prerequisites

Before you begin, make sure you have:

1. **Python 3.x**  
2. **Node.js (v18 or higher)**  
3. A free **API Key** from [OpenWeather](https://openweathermap.org/)  
4. The trained model file `aqi_model_8_features.pkl` (generated from the `AirQuality.ipynb` notebook)

---

##  Installation & Setup

This project requires running **two servers** (backend and frontend) in separate terminals.

### 1️ Clone the Repository

```bash
git clone https://github.com/kireeti-ai/AirQualityPrediction.git
cd AirQualityPrediction
```

---

### 2️ Backend Setup (Terminal 1)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Place your trained model file (`aqi_model_8_features.pkl`) inside this folder.
3. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
5. **Configure API Key:**
   Open `app.py` and replace:
   ```python
   API_KEY = "YOUR_API_KEY_HERE"
   ```
   with your actual **OpenWeather API key**.
6. Run the backend server:
   ```bash
   python3 app.py
   ```
   The backend will start at **http://127.0.0.1:5000**

---

### 3️ Frontend Setup (Terminal 2)

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Your app will open at **http://localhost:5173** (or a similar port).

---

##  Usage

1. Enter a **city name** or **pollutant values** in the frontend UI.  
2. The backend fetches live weather/pollution data via the OpenWeather API.  
3. The trained ML model predicts the **AQI** in real time.  
4. The result is displayed on the frontend dashboard.

---

##  Project Structure

```
AirQualityPrediction/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── aqi_model_8_features.pkl
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

---

##  Future Enhancements

- Add AQI trend visualization graphs  
- Support for multiple cities  
- Historical AQI data storage using PostgreSQL or MongoDB  
- Docker-based deployment  

---

##  Author

**Kireeti V**  
📍 Amrita Vishwa Vidyapeetham  
💼 [GitHub: @kireeti-ai](https://github.com/kireeti-ai)

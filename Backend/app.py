import joblib
import pandas as pd
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, "aqi_model_8_features.pkl")

model = joblib.load(model_path)

def get_AirQuality(x):
    if x <= 50:
        return "Good"
    elif x > 50 and x <= 100:
        return "Satisfactory"
    elif x > 100 and x <= 200:
        return "Moderate"
    elif x > 200 and x <= 300:
        return "Poor"
    elif x > 300 and x <= 400:
        return "Very Poor"
    elif x > 400:
        return "Severe"
    else:
        return 'Unknown' 



@app.route('/')
def home():
    return 'AQI Prediction API is running!'

@app.route('/api/predict', methods=['POST'])
def predict_aqi():
    try:

        data = request.get_json()
        city_name = data.get('city')
        
        if not city_name:
            return jsonify({'error': 'No city provided'}), 400
        YOUR_API_KEY = "f88ac2b223a2626bfbde0ed99b457841" 
        geo_url = f"http://api.openweathermap.org/geo/1.0/direct?q={city_name}&limit=1&appid={YOUR_API_KEY}"
        geo_response = requests.get(geo_url)
        geo_data = geo_response.json()
        
        if not geo_data:
            return jsonify({'error': 'City not found'}), 404

        lat = geo_data[0]['lat']
        lon = geo_data[0]['lon']
        air_pollution_url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={YOUR_API_KEY}"
        air_response = requests.get(air_pollution_url)
        air_data = air_response.json()

        components = air_data['list'][0]['components']

        input_data = pd.DataFrame([[
            components.get('pm2_5', 0),
            components.get('pm10', 0),
            components.get('no', 0),
            components.get('no2', 0),
            components.get('nh3', 0),
            components.get('co', 0),
            components.get('so2', 0),
            components.get('o3', 0)
        ]], columns=['PM2.5', 'PM10', 'NO', 'NO2', 'NH3', 'CO', 'SO2', 'O3'])


        aqi_prediction_array = model.predict(input_data)
        aqi_prediction = round(aqi_prediction_array[0], 2)
        
        aqi_quality = get_AirQuality(aqi_prediction)


        return jsonify({
            'city': city_name,
            'predicted_aqi': aqi_prediction,
            'aqi_quality': aqi_quality,
            'live_pollutants': components
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':

    app.run(host='0.0.0.0', port=5000, debug=True)

import React from 'react';
import { BookOpenIcon, ScaleIcon } from '@heroicons/react/24/outline';


const pollutants = [
    { name: 'PM2.5', desc: 'Fine dust particles (2.5 micrometers). From smoke and exhaust. Can get deep into lungs.' },
    { name: 'PM10', desc: 'Coarse dust particles (10 micrometers). From dust, pollen, and mold.' },
    { name: 'O3 (Ozone)', desc: 'Ground-level ozone. Created by sunlight reacting with other pollutants.' },
    { name: 'CO (Carbon Monoxide)', desc: 'A dangerous gas from burning fuel, especially car exhaust.' },
    { name: 'NO2 (Nitrogen Dioxide)', desc: 'A reddish-brown gas from power plants and vehicle exhaust.' },
    { name: 'SO2 (Sulfur Dioxide)', desc: 'From burning fossil fuels like coal and oil at power plants.' },
    { name: 'NO (Nitric Oxide)', desc: 'A toxic gas produced by vehicle engines and power plants.' },
    { name: 'NH3 (Ammonia)', desc: 'Comes from agricultural waste, fertilizers, and industrial processes.' }
];


const aqiScale = [
    { range: '0 - 50', quality: 'Good', color: 'bg-green-500' },
    { range: '51 - 100', quality: 'Satisfactory', color: 'bg-yellow-400' },
    { range: '101 - 200', quality: 'Moderate', color: 'bg-orange-500' },
    { range: '201 - 300', quality: 'Poor', color: 'bg-red-500' },
    { range: '301 - 400', quality: 'Very Poor', color: 'bg-purple-600' },
    { range: '401+', quality: 'Severe', color: 'bg-gray-800' },
];

export default function LearnPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ScaleIcon className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">What is the AQI?</h2>
        </div>
        <p className="mt-2 text-gray-600">
          The Air Quality Index (AQI) is a number used by governments to communicate how polluted the air is. It's a simple scale that runs from 0 to 500. The higher the number, the greater the health risk.
        </p>
        <div className="mt-4 space-y-2">
          {aqiScale.map((item) => (
            <div key={item.quality} className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
              <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
              <span className="font-bold w-20">{item.range}</span>
              <span className="font-medium">{item.quality}</span>
            </div>
          ))}
        </div>
      </div>
      

      <div>
        <div className="flex items-center gap-3">
          <BookOpenIcon className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">What Are We Measuring?</h2>
        </div>
        <p className="mt-2 text-gray-600">
          Our model (trained on the 8 features from the OpenWeather API) looks at 8 key pollutants to make its prediction:
        </p>
        <div className="mt-4 space-y-3">
          {pollutants.map((pollutant) => (
            <div key={pollutant.name} className="p-4 border rounded-md bg-white shadow-sm">
              <h3 className="font-bold text-lg text-gray-800">{pollutant.name}</h3>
              <p className="text-gray-600">{pollutant.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
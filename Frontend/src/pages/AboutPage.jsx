import React from 'react';
import { CodeBracketIcon, CloudIcon, TableCellsIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full">
      <h2 className="text-2xl font-bold text-gray-800 text-center">About This Project</h2>

      <p className="text-lg text-gray-600 mt-4 text-center">
        This app was built to make air quality data easy to understand and accessible to everyone.
      </p>
      
      <div className="mt-8 space-y-6">
        
   
        <div className="flex items-start gap-4">
          <CodeBracketIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold">How It Works</h3>
            <p className="text-gray-600 mt-1">
              This is a full-stack application. The frontend (what you're seeing) is built with <strong>React and Tailwind CSS</strong>. The backend is a <strong>Flask API</strong> running on a separate server.
            </p>
          </div>
        </div>


        <div className="flex items-start gap-4">
          <CloudIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold">The Live Data</h3>
            <p className="text-gray-600 mt-1">
              When you type in a city, our backend contacts the <strong>OpenWeather Air Pollution API</strong> to get *live* data for 8 different pollutants.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <TableCellsIcon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold">Our Prediction Model</h3>
            <p className="text-gray-600 mt-1">
              The real magic is our custom-trained <strong>Random Forest model</strong>. We trained it on a large dataset of historical air quality from India to find the complex patterns between these 8 pollutants and the final AQI score.
            </p>
            <p className="text-gray-600 mt-2">
              Instead of just showing the API's default AQI, we feed the live pollutant data into our *own* model to generate the prediction you see on the home page.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
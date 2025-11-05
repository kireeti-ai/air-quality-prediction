import React from 'react';

const getQualityColors = (quality) => {
  switch (quality) {
    case 'Good': return { stroke: '#5cb85c', text: 'text-green-600' };
    case 'Satisfactory': return { stroke: '#87b243', text: 'text-yellow-600' };
    case 'Moderate': return { stroke: '#f0ad4e', text: 'text-orange-500' };
    case 'Poor': return { stroke: '#d9534f', text: 'text-red-500' };
    case 'Very Poor': return { stroke: '#c9302c', text: 'text-purple-600' };
    case 'Severe': return { stroke: '#a94442', text: 'text-gray-800' };
    default: return { stroke: '#95a5a6', text: 'text-gray-500' };
  }
};

export default function AqiGauge({ aqi, quality }) {
  const { stroke, text } = getQualityColors(quality);
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - (Math.min(aqi, 500) / 500) * 0.5);

  return (
    <div className="relative w-52 h-26 mx-auto mt-4">
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={stroke}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
        />
      </svg>
      <div className={`absolute bottom-0 w-full text-center ${text}`}>
        <div className="text-5xl font-bold">{aqi}</div>
        <div className="text-xl font-semibold">{quality}</div>
      </div>
    </div>
  );
}
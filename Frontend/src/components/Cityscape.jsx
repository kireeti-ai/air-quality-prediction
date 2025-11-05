import React from 'react';


export default function Cityscape({ aqiQuality = '' }) {
  
  const skyColors = {
    'Good': 'fill-sky-good',
    'Satisfactory': 'fill-sky-satisfactory',
    'Moderate': 'fill-sky-moderate',
    'Poor': 'fill-sky-poor',
    'Very Poor': 'fill-sky-very-poor',
    'Severe': 'fill-sky-severe',
    '': 'fill-transparent'
  };

  const hazeOpacity = {
    'Good': 'opacity-0',
    'Satisfactory': 'opacity-10',
    'Moderate': 'opacity-30',
    'Poor': 'opacity-50',
    'Very Poor': 'opacity-60',
    'Severe': 'opacity-70',
    '': 'opacity-0'
  };

  return (
    <div className="fixed bottom-0 left-0 w-full h-1/3 z-0 overflow-hidden">
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${skyColors[aqiQuality]}`} 
      />
      <div 
        className={`absolute inset-0 bg-gray-400 mix-blend-multiply transition-opacity duration-1000 animate-haze-flicker ${hazeOpacity[aqiQuality]}`} 
      />
      <svg
        className="absolute bottom-0 w-full h-auto text-gray-800"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax meet"
        fill="currentColor"
      >
        <path d="M0,200 L0,180 C50,170 100,160 150,165 C200,170 250,180 300,175 C350,170 400,150 450,155 C500,160 550,170 600,165 C650,160 700,140 750,145 C800,150 850,160 900,155 C950,150 1000,130 1050,135 C1100,140 1150,150 1200,145 C1250,140 1300,120 1350,125 C1400,130 1440,140 1440,140 L1440,200 Z" opacity="0.1"></path>
        <path d="M0,200 L0,160 C60,150 120,140 180,145 C240,150 300,160 360,155 C420,150 480,130 540,135 C600,140 660,150 720,145 C780,140 840,120 900,125 C960,130 1020,140 1080,135 C1140,130 1200,110 1260,115 C1320,120 1380,130 1440,120 L1440,200 Z" opacity="0.1"></path>
        <path d="M0,200 L0,142 L100,142 L100,80 L110,80 L110,142 L180,142 L180,60 L190,60 L190,142 L250,142 L250,50 L260,50 L260,142 L320,142 L320,80 L330,80 L330,142 L400,142 L400,100 L410,100 L410,142 L450,142 L450,120 L460,120 L460,142 L520,142 L520,90 L530,90 L530,142 L580,142 L580,40 L590,40 L590,142 L650,142 L650,70 L660,70 L660,142 L710,142 L710,110 L720,110 L720,142 L780,142 L780,90 L790,90 L790,142 L850,142 L850,60 L860,60 L860,142 L920,142 L920,80 L930,80 L930,142 L1000,142 L1000,50 L1010,50 L1010,142 L1060,142 L1060,100 L1070,100 L1070,142 L1120,142 L1120,120 L1130,120 L1130,142 L1190,142 L1190,80 L1200,80 L1200,142 L1250,142 L1250,60 L1260,60 L1260,142 L1330,142 L1330,100 L1340,100 L1340,142 L1440,142 L1440,200 Z"></path>
      </svg>
    </div>
  );
}
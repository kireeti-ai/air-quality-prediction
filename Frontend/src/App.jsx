import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />


      <div className="container mx-auto max-w-4xl p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
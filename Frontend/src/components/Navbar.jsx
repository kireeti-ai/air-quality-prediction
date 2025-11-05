import React from 'react';
import { NavLink } from 'react-router-dom';
import { CloudIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold'
      : 'text-gray-600 hover:text-blue-500 font-medium';

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto max-w-4xl px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <CloudIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">AQI Predict</span>
        </NavLink>
        <div className="flex gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/learn" className={navLinkClass}>Learn</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
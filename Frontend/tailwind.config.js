/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom colors for the sky
      colors: {
        'sky-good': '#87CEEB', // Clear blue sky
        'sky-satisfactory': '#B0E0E6', // Light, slightly hazy blue
        'sky-moderate': '#BDB76B', // Yellowish, hazy
        'sky-poor': '#E5986D', // Smoggy orange
        'sky-very-poor': '#B22222', // Ominous red
        'sky-severe': '#708090', // Dark slate gray
      },
      // 2. Custom keyframes for the haze/smog
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        }
      },
      // 3. Custom animation utilities
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'haze-flicker': 'flicker 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    "./index.html",              
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: { 'spin-slow': 'spin 6s linear infinite' },
      backgroundImage: {
       
        'stars': "url('/assets/space-bg.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

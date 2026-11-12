/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './index.tsx', './App.tsx', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#eef4ff',
          card: '#ffffff',
          text: '#0b1224',
          muted: '#4b5c76',
          blue: '#3b82f6',
          accent: '#1d4ed8',
          cta: '#2563eb',
          'cta-hover': '#1d4ed8',
          border: '#cddbef',
          surface: '#ddeafb',
        },
      },
      boxShadow: {
        soft: '0 16px 40px rgba(11,18,36,0.06)',
      },
    },
  },
  plugins: [],
};

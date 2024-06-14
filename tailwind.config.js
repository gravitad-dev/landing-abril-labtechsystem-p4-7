/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-white': '#FFF',
        'custom-yellow': '#FACC15',
        'custom-orange': '#EA580C',
        'custom-blue-800': '#2563EB',
        'custom-blue/gray-900': '#0F172A',
      },
    },
  },
  plugins: [require('daisyui')],
};

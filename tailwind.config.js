/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#002f93',
          secondary: '#4880ff',
          light: '#e8efff',
          lighter: '#f0f5ff',
          muted: '#c7d7fe',
          dark: '#001f62',
          hover: '#3a6fe8',
        }
      }
    },
  },
  plugins: [],
};

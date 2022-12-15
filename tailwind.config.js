/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    maxWidth: {
      xxs: '100px',
      ms: '25%',
    },
    extend: {
      keyframes: {
        transi: {
          '0%':{transform:''}
        }
      }
    },

  },
  plugins: [],
};

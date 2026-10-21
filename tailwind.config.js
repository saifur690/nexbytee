/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nexbyte: {
          purple: '#7950f2',
          lavender: '#b19eef',
          surface: '#fbfbfd',
          ink: '#17171d',
        },
      },
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        'menu-color': '#5d3ebc',
        'gradient-color': '#4c3398',
        'secondary-menu-color': '#7849f7',
      }),

      colors: (theme) => ({
        'menu-color': '#5d3ebc',
        'gradient-color': '#4c3398',
        'secondary-menu-color': '#7849f7',
        'button-color': '#ffd300',
      }),

      backgroundImage: (theme) => ({
        mobile:
          'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)',
      }),
    },
  },
  plugins: [],
};

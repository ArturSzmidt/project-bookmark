module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prLightBlue: '#5368df',
        prLightRed: '#fa5757',
        prGray: '#9194a1',
        prDarkBlue: '#252b46',
        prWhite: '#f7f7f7',
      },
    },
    fontFamily: {
      Rubik: ['Rubik, sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1440px',
        '2xl': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

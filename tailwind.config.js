/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'proxima-nova': ['"Proxima Nova"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#511E87',
        secondary: '#868686',
        dark: '#474747',
      },
    },
  },
  plugins: [],
}


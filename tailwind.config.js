module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkblack': '#17171E',
        'lightblack': '#24212A',
        'darkpurple': '#4D3A4D',
        'lightpurple': "#AE83A5",
        'lightgrey': "#E7E7E7",
      },
      textTransform: {

      },
      fontFamily: {
        'titel': ['Anton', 'sans-serif'],
        'text': ['Raleway', 'sans-serif']
      },
      screens: {
        '3xl': '1696px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

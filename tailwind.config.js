module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkblack': '#17171E',
        'lightblack': '#2d2730',
        'darkpurple': '#4D3A4D',
        'lightpurple': "#AE83A5",
        'lightgrey': "#E7E7E7",
      },
      fontFamily: {
        'titel': ['Anton', 'sans-serif'],
        'text': ['Nunito', 'sans-serif']
      },
      screens: {
        '3xl': '2100px',
      },
      maxWidth: {
        '7-5xl' : '1600px',
        '8xl': '1900px',
      },
      padding: {
        '30': '7.9rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

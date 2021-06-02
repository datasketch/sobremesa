module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'extra-tight': '0.75',
      },
      colors: {
        'chocolate': '#1f1b18',
        'darmouth-green': '#007540',
        'fire-opal': '#ea5745',
        'gold-metallic': '#d8b400',
        'linen': '#fff4e7',
        'blue': '#0036f6'
      },
      fontFamily: {
        'beth-ellen': ['"Beth Ellen"', 'cursive'],
        martin: ['MARTIN', 'sans-serif'],
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
        'source-serif-pro': ['"Source Serif Pro"', 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  corePlugins: {
    container: false
  }
}

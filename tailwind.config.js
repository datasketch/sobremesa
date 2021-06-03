module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html']
  },
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
      },
      backgroundImage: {
        'tools-sm': "url('/images/tools-sm.svg')",
        'tools-lg': "url('/images/tools-lg.svg')",
        'spaces-sm': "url('/images/spaces-sm.svg')",
        'spaces-lg': "url('/images/spaces-lg.svg')",
        'acompaniment-sm': "url('/images/acompaniment-sm.svg')",
        'acompaniment-lg': "url('/images/acompaniment-lg.svg')",
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

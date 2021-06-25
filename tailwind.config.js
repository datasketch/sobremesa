module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: ['./layouts/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '165': '165px',
      '380': '380px',
    },
    extend: {
      inset: {
        '18': '4.5rem',
        '-18': '-4.5rem',
      },
      lineHeight: {
        'extra-tight': '0.75',
      },
      colors: {
        'chocolate': '#1f1b18',
        'darmouth-green': '#007540',
        'fire-opal': '#ea5745',
        'gold-metallic': '#d8b400',
        'linen': '#fff4e7',
        'blue': '#0036f6',
        'maximum-green': "#618D3F",
        'pine-green': '#007266',
      },
      fontFamily: {
        'beth-ellen': ['"Beth Ellen"', 'cursive'],
        martin: ['MARTIN', 'sans-serif'],
        'source-sans-pro': ['"Source Sans Pro"', 'sans-serif'],
        'source-serif-pro': ['"Source Serif Pro"', 'serif']
      },
      backgroundImage: {
        'tools-sm-es': "url('/images/tools-sm-es.svg')",
        'tools-lg-es': "url('/images/tools-lg-es.svg')",
        'spaces-sm-es': "url('/images/spaces-sm-es.svg')",
        'spaces-lg-es': "url('/images/spaces-lg-es.svg')",
        'accompaniment-sm-es': "url('/images/accompaniment-sm-es.svg')",
        'accompaniment-lg-es': "url('/images/accompaniment-lg-es.svg')",
        'tools-sm-en': "url('/images/tools-sm-en.svg')",
        'tools-lg-en': "url('/images/tools-lg-en.svg')",
        'spaces-sm-en': "url('/images/spaces-sm-en.svg')",
        'spaces-lg-en': "url('/images/spaces-lg-en.svg')",
        'accompaniment-sm-en': "url('/images/accompaniment-sm-en.svg')",
        'accompaniment-lg-en': "url('/images/accompaniment-lg-en.svg')",
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

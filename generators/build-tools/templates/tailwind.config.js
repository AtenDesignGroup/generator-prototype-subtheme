//
// Tailwind config
// See https://tailwindcss.com/docs/configuration
//
// Adding values here will grow the resulting CSS
// file exponentially. For this reason, care should be taken when adding new
// values. We are taking an opt-in whitelisting approach for Core Plugins to
// keep file size down.
//
// See https://tailwindcss.com/docs/configuration#core-plugins for more information.

module.exports = {
  prefix: 'u-',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      '2xl': '1356px',
      '3xl': '1660px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#222222',
        200: '#333333',
        300: '#444444',
        400: '#555555',
        500: '#797979',
        600: '#c4c4c4',
        700: '#a3a3a3',
        800: '#dcdcdc',
        900: '#e8e8e8',
        950: '#f1f1f1',
      },
      blue: {
        200: '#4da1ad',
        500: '#00788a',
        800: '#00586a',
      },
      orange: {
        200: '#FFD296',
        500: '#ff6941',
        800: '#ad3d1f',
      },
      green: {
        200: '#e8f2af',
        500: '#d1e560',
        800: '#c2da38',
      },
      purple: '#371247',
      teal: {
        100: '#002e31',
        100: '#e6f7f7',
        300: '#cef5f4',
        400: '#08cdca',
        500: '#07b8b5',
        600: '#04b3b0',
        700: '#4b9da9',
        800: '#006B83',
        900: '#011919',
      },
    },
    spacing: {
      px: '1px',
      6: '0.375rem',
      9: '0.5625rem',
      12: '0.75rem',
      15: '0.9375rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      30: '1.875rem',
      36: '2.25rem',
      40: '2.5rem',
      42: '2.625rem',
      48: '3rem',
      60: '3.75rem',
      90: '5.625rem',
      120: '7.5rem',
      180: '11.25rem',
      204: '12.75rem',
    },
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      book: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  // See https://tailwindcss.com/docs/configuration#core-plugins
  // for a list of plugins you would like to include.
  corePlugins: [
    // 'backgroundColor',
    'display',
    'float',
    'fontWeight',
    'margin',
    'padding',
    'textTransform',
  ],
};

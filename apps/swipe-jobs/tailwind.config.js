const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        12.4: '3.1rem',
      },
      height: {
        container: 'calc(100vh - 6.5rem)',
        content: 'calc(100vh - 9.9rem)',
        'content-md': 'calc(100vh - 7.6rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

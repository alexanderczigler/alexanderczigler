module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      accent: '#3aafa9',
      background: '#17252a',
      'background-fade': '#2e3a3f',
      highlight: '#2b7a78',
      'text-fade': '#def2f1',
      text: '#feffff',
    },
    extend: {
      fontFamily: {
        'fira-code': ['Fira Code', 'monotype'],
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

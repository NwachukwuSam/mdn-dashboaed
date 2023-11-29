// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
      'copperplate': ['Copperplate', 'serif'],
      'papyrus': ['Papyrus', 'sans-serif'],
      'fantasy': ['Fantasy', 'cursive'],
      'Signika': ['Signika', 'sans-serif'],
      'novasquare': ['Nova Square', 'sans-serif'],
      'Oleo Script': ['Oleo Script','cursive'],
      'alegreyasanssc': ['Alegreya Sans SC', 'sans-serif'],
      'sans': ['Gill Sans Light', 'sans-serif'],
      'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
    },},
  },
  plugins: [],
}

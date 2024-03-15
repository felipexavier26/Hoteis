/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'build/*html'
  ],
  theme: {
    extend: {
      fontSize:{
        'titulo': '32px',
        'sub-titulo': '24px',
        'normal': '14px' 
      }
    },
  },
  plugins: [],
}


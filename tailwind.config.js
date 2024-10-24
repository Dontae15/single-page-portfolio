/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'galactic-blue': 'hsl(252, 66%, 62%)',
        'summer-yellow': 'hsl(28, 89%, 67%)',
        'pale-pink': 'hsla(0, 79%, 79%, 1)',
        'light-red': 'hsla(7, 77%, 66%, 1)',
        'cyan': 'hsla(172, 46%, 57%, 1)',
        'rich-purple': 'hsla(313, 46%, 23%, 1)',
        'black': 'hsla(0, 0%, 0%, 1)',
        'medium-brown': 'hsla(30, 5%, 45%, 1)',
        'light-cream': 'hsla(30, 100%, 97%, 1)',
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      }, 
      fontSize: {
        'fs-3.5': '3.5rem',
        'fs-2.5,': '2.5rem',
        'fs-2.0': '2rem',
        'fs-1.125': '1.125rem',
      }, 
      fontWeight: {
        'fw-700': 700,
        'fw-500': 500,
      },
      
    },
  },
  plugins: [],
}


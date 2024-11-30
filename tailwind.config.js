/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-right': '4px 4px 10px rgba(0, 0, 0, 0.25)'
      },
    },

    colors: {
      bgColor: '#111111',
      black: '#111111',
      textColor: '#333333',
      white: '#ffffff',
      gray: '#9ca3af',
      bordeActive: '#800020',
      bordeHover: '#800020DD',
      borde: '#80002050',
      borderColor: '#ccbfbf',
      green: '#28A745',
      red: '#DC3545'
    }
  },
  plugins: [],
}


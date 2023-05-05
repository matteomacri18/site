/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '925px',
      // => @media (min-width: 640px) { ... }

      'md': '925px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1820px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      color: {
        'dark': '#1c1c1c',
        'gray': '#374151'
      }
    },
    fontFamily: {
      syne: ["Syne", "bold"],
    },
  },
  plugins: [],
}


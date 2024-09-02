/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      screens: {
        'xsm': '1px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... } (for mobile)
  
        'md': '768px',
        // => @media (min-width: 768px) { ... } (for tablet)
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... } (for laptop)
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... } (for large desktop/laptop)
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
    },
    extend: {
      
    },
  },
  plugins: [],
}
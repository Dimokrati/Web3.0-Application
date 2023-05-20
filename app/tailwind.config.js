/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
     screens: {
      'xxxs': '360px',
      'xxs': '412px',
      'xs': '552px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px', // new breakpoint
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

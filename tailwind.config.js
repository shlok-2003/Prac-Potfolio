/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '320px',
      'md': '481px',
      'lg': '769px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
}

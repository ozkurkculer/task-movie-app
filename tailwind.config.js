/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#0296E5',
      'secondary': '#67686D',
      'third': '#3A3F47',
      'background': '#242A32',
      'white': '#fff',
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mapfre: {
          red: '#E31D1A',
          darkred: '#B31816',
          gray: '#4A4A4A',
          light: '#F5F5F5'
        }
      }
    },
  },
  plugins: [],
}
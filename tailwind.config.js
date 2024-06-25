/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'lounge': "url('/lounge_1.jpg')"
      }
    },
  },
  plugins: [],
}


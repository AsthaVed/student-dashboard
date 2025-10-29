/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #43C6AC, #F8FFAE)',
      },
    },
  },
  plugins: [],
}
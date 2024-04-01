/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        'slogin': '0px 0px 20px 10px rgba(0, 0, 0, 0.6)',
      },
      blur: {
        xs: '2px',
      },
      backgroundImage: {
        'farm': "url('/backgroundFarm.png')",
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

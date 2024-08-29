//** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-", // This will prefix all Tailwind classes with 'tw-'
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Exclude specific components manually
    //"!./src/Components/Farmer/Navbar/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

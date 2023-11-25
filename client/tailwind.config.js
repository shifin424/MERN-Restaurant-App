/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_dark : "#050a19",
        secondary_dark : "#032046",
        primary_light : "#FFFFFF",
        secondary_light : "#fabf84",
      },
    },
  },
  plugins:[require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'laptop' : '768px',
      'desktop' : '1900px',
    },
    extend: {
      backgroundImage: {
        'myWork' : "url('../public/mywork-background2.png')"
      }
    },
  },
  
  
  plugins: [require("daisyui")],
  // daisyui: {
  //   styled: true,
  //   themes: ["emerald"],
    
  //   darkTheme: "dark",
  // },
}

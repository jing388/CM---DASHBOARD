/** @type {import('tailwindcss').Config} */
module.exports = {
     mode: "jit",
    content: ["./src/App.css", "./src/App.tsx", "./src/components/Sidebar.css", "./src/components/Sidebar.jsx"],
    theme: {
      extend: {
        colors: {
            "dark-purple": "#081A51",
            "light-white": "rgba(255,255,255,0.17)",
          },
        },
      },
    plugins: [],
  }
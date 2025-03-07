/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'pokemon': "url('https://cdn.sortiraparis.com/images/80/88384/1150146-pokemon-champions.jpg')",
        },
      },
    },
    plugins: [],
  };
  
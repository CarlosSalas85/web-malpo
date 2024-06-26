/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        rojoMalpo: 'rgba(151, 19, 42, 1)', // Reemplaza '#FFA500' con el valor hexadecimal de tu color personalizado
        grisMalpo: 'rgba(40, 41, 37, 1)', // Reemplaza '#FFA500' con el valor hexadecimal de tu color personalizado
        verdeMalpo: 'rgba(5, 150, 115, 1)', // Reemplaza '#FFA500' con el valor hexadecimal de tu color personalizado
      },
    },
  },
  plugins: [],
};

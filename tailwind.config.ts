/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          10: "#14a8c6",
          50: "#0070c0",
          90: "#003459",
        },
        yellow: {
          50: "#FEC601",
        },
      },
      backgroundImage: {
        "pattern-gray": "url('/pattern-gray.jpg')",
        "pattern-blue": "url('/pattern-blue.jpg')",
        "pattern-2": "url('/hero-bg.svg')",
        services: "url('/services.jpg')", // Hero bg for service page
        about: "url('/about.jpg')", // Hero bg for about page
        contact: "url('/contact.jpg')", // Hero bg for contact page
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      listStyleImage: {
        checkmark: "url('/checkmark.svg')",
      },
    },
  },
  plugins: [],
};

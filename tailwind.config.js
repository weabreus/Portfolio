/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "projectDesc": "0 10px 30px -15px rgba(2,12,27,0.7)"
      },
      fontFamily: {
        'sans': ["Calibre","Inter","San Francisco","SF Pro Text","-apple-system","system-ui", "sans-serif"]
      },
      colors: {
        'lightest-slate': '#ccd6f6',
        'light-slate': '#a8b2d1',
        'slate': '#8892b0',
        'light-navy': '#112240'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
  ],
}

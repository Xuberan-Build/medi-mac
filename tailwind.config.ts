/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005EB8',
        secondary: '#D9EBF9',
        success: '#2ECC71',
        error: '#E74C3C',
        gray: {
          light: '#F5F5F5',
          DEFAULT: '#6B7280',
          dark: '#3A3A3A'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        h1: '32px',
        h2: '24px',
        h3: '20px',
        body: '16px',
        small: '14px',
        callout: '18px'
      }
    },
  },
  plugins: [],
}

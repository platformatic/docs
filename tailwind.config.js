/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'custom-black': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'cta-custom-black': '1px 4px 8px rgba(0, 0, 0, 0.15)',
        'custom-white': '1px 4px 8px rgba(255, 255, 255, 0.15)'
      }
    }
  },
  plugins: []
}

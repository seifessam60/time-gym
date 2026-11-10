/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        'red-gym': '#cc0000',
        'red-bright': '#ff1a1a',
        'red-dark': '#990000',
        'bg-900': '#0e0e0e',
        'bg-800': '#141414',
        'bg-700': '#1a1a1a',
        'bg-600': '#222222',
      },
      boxShadow: {
        'red': '0 0 40px rgba(204,0,0,0.3)',
        'red-lg': '0 0 60px rgba(204,0,0,0.4)',
        'glow': '0 4px 24px rgba(204,0,0,0.4)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'red-radial': 'radial-gradient(ellipse at center, rgba(204,0,0,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

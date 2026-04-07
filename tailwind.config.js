/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'rubik-mono': ['"Rubik Mono One"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1.5s steps(2, start) infinite',
        'glitch1': 'glitch-anim-1 5s infinite linear alternate-reverse',
        'glitch2': 'glitch-anim-2 5s infinite linear alternate-reverse',
      },
      keyframes: {
        blink: {
          'to': { visibility: 'hidden' }
        },
        'glitch-anim-1': {
          '0%': { clip: 'rect(42px, 9999px, 44px, 0)' },
          '5%': { clip: 'rect(12px, 9999px, 59px, 0)' },
          '10%': { clip: 'rect(48px, 9999px, 29px, 0)' },
          '100%': { clip: 'rect(4px, 9999px, 91px, 0)' }
        },
        'glitch-anim-2': {
          '0%': { clip: 'rect(65px, 9999px, 100px, 0)' },
          '5%': { clip: 'rect(52px, 9999px, 74px, 0)' },
          '100%': { clip: 'rect(38px, 9999px, 49px, 0)' }
        }
      }
    },
  },
  plugins: [],
}
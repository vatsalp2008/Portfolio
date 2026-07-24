/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F4EF',
        terra: '#C4763A',
        warm: '#E5E0D8',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        archivo: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'drift-slow':  'drift 26s ease-in-out infinite',
        'drift-slow2': 'drift 34s ease-in-out infinite',
        'float-hill':  'floatHill 12s ease-in-out infinite',
        'float-hill2': 'floatHill 16s ease-in-out infinite',
        'sun-pulse':   'sunPulse 9s ease-in-out infinite',
        'mote':        'mote 14s linear infinite',
        'cue-bounce':  'cueBounce 2.2s ease-in-out infinite',
        'rise-in':     'riseIn 1s cubic-bezier(0.22,1,0.36,1) both',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%':     { transform: 'translate(40px, -30px) scale(1.08)' },
        },
        floatHill: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        sunPulse: {
          '0%,100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.06)' },
        },
        mote: {
          '0%':   { transform: 'translateY(0) translateX(0)',      opacity: '0' },
          '10%':  { opacity: '0.8' },
          '90%':  { opacity: '0.8' },
          '100%': { transform: 'translateY(-120px) translateX(20px)', opacity: '0' },
        },
        cueBounce: {
          '0%,100%': { transform: 'translateY(0)',   opacity: '0.5' },
          '50%':     { transform: 'translateY(6px)', opacity: '1' },
        },
        riseIn: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

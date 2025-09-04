/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        beauty: {
          blush: '#F8BBD9',
          cream: '#FFF8F3',
          'rose-gold': '#E8B4B8',
          charcoal: '#2D2D2D',
          white: '#FFFFFF',
          'soft-pink': '#FDF2F8',
          'deep-rose': '#BE185D',
          'warm-gray': '#78716C',
          'light-gray': '#F7F3F0',
        },
        primary: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F8BBD9',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        secondary: {
          50: '#FFF8F3',
          100: '#FEF3E2',
          200: '#FDE6C4',
          300: '#FCD499',
          400: '#FABC6C',
          500: '#F8A347',
          600: '#E8B4B8',
          700: '#D97B3F',
          800: '#B45E2B',
          900: '#924A1E',
        }
      },
      fontFamily: {
        'inter': ['var(--font-inter)'],
        'playfair': ['var(--font-playfair)'],
        'montserrat': ['var(--font-montserrat)'],
        'outfit': ['var(--font-outfit)'],
        'crimson': ['var(--font-crimson)'],
        'gupter': ['var(--font-gupter)'],
        'libre': ['var(--font-libre)'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'beauty-soft': '0 4px 20px -2px rgba(248, 187, 217, 0.3)',
        'beauty-medium': '0 8px 30px -4px rgba(248, 187, 217, 0.4)',
        'beauty-strong': '0 20px 40px -8px rgba(248, 187, 217, 0.5)',
        'glow': '0 0 20px rgba(248, 187, 217, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
      colors: {
        'dark-100': 'var(--color-dark-100)',
        'dark-200': 'var(--color-dark-200)',
        'light-100': 'var(--color-light-100)',
        'primary': 'var(--color-primary)',
      },
      fontFamily: {
        'regular': ['var(--font-regular)'],
        'medium': ['var(--font-medium)'],
        'semibold': ['var(--font-semibold)'],
        'bold': ['var(--font-bold)'],
      },
    },
  },
  plugins: [],
}
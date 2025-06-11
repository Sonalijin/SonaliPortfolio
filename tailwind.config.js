/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        secondary: '#6366f1',
        tertiary: '#1e293b',
        accent: '#f472b6',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
        background: '#0f172a',
        card: '#1e293b',
        error: '#ef4444',
        success: '#22c55e',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        full: '9999px',
      },
      transitionProperty: {
        'default': 'all 0.3s ease',
      },
    },
  },
  plugins: [],
} 
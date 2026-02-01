/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0F172A',
          secondary: '#1E293B',
          card: '#F8FAFC',
        },
        accent: {
          blue: '#3B82F6',
          blueHover: '#2563EB',
          purple: '#8B5CF6',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
          tertiary: '#334155',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from blackbridgelogistics.com
        'bb-black': '#000000',
        'bb-white': '#ffffff',
        'bb-dark-gray': '#313131',
        'bb-light-gray': '#eeeeee',
        'bb-border': '#abb8c3',
        'bb-cyan': '#0693e3',
        'bb-purple': '#9b51e0',
        'bb-green': '#00d084',
        'bb-button': '#32373c',
        // Semantic colors
        'success': '#00d084',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#0693e3',
      },
      fontFamily: {
        'sans': ['Inter Variable', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['42px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'sm': ['13px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

// tailwind.config.js
// Location: rb-automotive-fresh-start/tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        // heading: ['Quincy', 'ui-serif', 'Georgia'], // Add if Quincy is loaded via CSS
      },
      backgroundImage: {
        'btn-primary-idle': 'linear-gradient(to right, #6b7280, #374151)',
        'btn-primary-hover': 'linear-gradient(to right, #4b5563, #1f2937)',
        'btn-secondary-idle': 'linear-gradient(to right, #dc2626, #b91c1c)',
        'btn-secondary-hover': 'linear-gradient(to right, #b91c1c, #991b1b)',
        'review-card-bg': 'linear-gradient(135deg, #d1d5db 0%, #f9fafb 50%, #d1d5db 100%)',
        'feature-card-idle': 'linear-gradient(to bottom, #e5e7eb, #f9fafb)',
        'feature-card-hover': 'linear-gradient(to bottom, #f3f4f6, #ffffff)',
        'section-bg': 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)', // Base for .section
        'reviews-section-bg': 'linear-gradient(to bottom, #e5e7eb, #f3f4f6)', // Specific for #reviews
        'service-tab-idle': 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)',
        'service-tab-active': 'linear-gradient(to right, #4b5563, #374151)',
        'logo-gradient': 'linear-gradient(to right, #ef4444, #dc2626)',
      },
      boxShadow: {
        'card': '0 6px 10px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 12px 20px rgba(0, 0, 0, 0.25)',
        'review-card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'review-card-hover': '0 8px 15px rgba(0, 0, 0, 0.2)',
        'feature-card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'feature-card-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
        'section-shadow': '0 6px 12px rgba(0, 0, 0, 0.1)',
        'btn': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'btn-hover': '0 6px 8px rgba(0, 0, 0, 0.2)',
      },
      colors: {
         'brand-red': { DEFAULT: '#dc2626', dark: '#b91c1c', darker: '#991b1b', light: '#ef4444' },
         'brand-gray': { light: '#f3f4f6', DEFAULT: '#6b7280', medium: '#4b5563', dark: '#374151', darker: '#1f2937', darkest: '#111827' }
      }
    },
  },
  plugins: [
      // Using 'any' type for addUtilities parameter to avoid potential TS errors
      function ({ addUtilities }: { addUtilities: any }) {
          addUtilities({
              '.text-shadow-md': { textShadow: '0 2px 4px rgba(0,0,0,0.15)' },
              '.text-shadow-sm': { textShadow: '0 1px 2px rgba(0,0,0,0.1)' },
          })
      }
  ],
};
module.exports = config;

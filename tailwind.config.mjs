/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base night sky
        base: {
          900: '#05070d',
          800: '#090e19',
          700: '#0d1424',
        },
        // Hire-me accents (very low alpha in glows)
        brand: {
          sky: '#9bbcff',
          violet: '#b388ff',
          mint: '#6ee7ff',
          aqua: '#22d3ee',
        },
        card: 'rgb(15 23 42 / 0.72)',       // glass card
        cardSolid: '#0b1322',               // solid card
        border: 'rgb(255 255 255 / 0.08)',  // hairline
        ring: 'rgb(34 211 238 / 0.45)',     // focus ring
      },

      backgroundImage: {
        'gradient-brand':
          'linear-gradient(135deg, #22d3ee 0%, #6ee7ff 25%, #9bbcff 60%, #b388ff 100%)',
        'radial-faint':
          'radial-gradient(800px 500px at 70% 120%, rgba(179,136,255,.08), transparent 60%)',
      },

      boxShadow: {
        card:
          '0 1px 0 0 rgba(255,255,255,.06) inset, 0 6px 22px rgba(2,6,23,.55)',
        elevated:
          '0 12px 30px rgba(2,6,23,.65), 0 0 0 1px rgba(255,255,255,.05) inset',
        glow:
          '0 0 0 1px rgba(255,255,255,.07), 0 0 40px -10px rgba(124,58,237,.45)',
      },
      dropShadow: {
        'glow-sm': '0 0 8px rgba(147,197,253,.35)',
        glow: '0 0 14px rgba(179,136,255,.45)',
        'glow-lg': '0 0 24px rgba(34,211,238,.55)',
      },

      borderRadius: {
        '2xl': '1.25rem',
      },

      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: 0.9 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sheen: 'sheen 1.2s ease-in-out',
        'pulse-soft': 'pulse-soft 2.6s ease-in-out infinite',
      },
      transitionTimingFunction: {
        snappy: 'cubic-bezier(.2,.8,.2,1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          // gradient text helper
          '.text-gradient': {
            background:
              'linear-gradient(135deg,#9bbcff,#b388ff,#6ee7ff)',
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
            color: 'transparent',
          },
          // glossy glass bg (uses card color + blur)
          '.bg-glass': {
            'background-color': 'rgb(15 23 42 / 0.60)',
            '-webkit-backdrop-filter': 'saturate(130%) blur(12px)',
            'backdrop-filter': 'saturate(130%) blur(12px)',
          },
          // focus ring utility
          '.focus-ring': {
            outline: 'none',
            'box-shadow':
              '0 0 0 3px rgb(34 211 238 / 45%), 0 0 0 6px rgb(34 211 238 / 15%)',
          },
          // gradient border (for cards/buttons)
          '.gradient-border': {
            position: 'relative',
          },
          '.gradient-border:before': {
            content: '""',
            position: 'absolute',
            inset: '-1px',
            'z-index': '-1',
            'border-radius': 'inherit',
            background:
              'linear-gradient(135deg, rgba(34,211,238,.6), rgba(110,231,255,.45), rgba(155,188,255,.4), rgba(179,136,255,.6))',
          },
        },
        ['responsive', 'hover', 'focus']
      );
    },
  ],
  safelist: [
    'bg-gradient-brand',
    'bg-radial-faint',
    { pattern: /(from|via|to)-(brand|sky|violet|mint|aqua)/ },
  ],
};

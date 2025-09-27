export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './data/**/*.{js,jsx}'],
  theme: { 
    extend: {
      colors: {
        brand: {
          gradient: {
            from: '#1e3a8a',
            via: '#1d4ed8',
            to: '#3730a3'
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554'
          }
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3730a3 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        'card-gradient-dark': 'linear-gradient(135deg, rgba(30,41,59,0.9) 0%, rgba(51,65,85,0.7) 100%)'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.4)',
        'brand': '0 4px 14px 0 rgba(59, 130, 246, 0.15)',
        'brand-lg': '0 8px 25px 0 rgba(59, 130, 246, 0.25)'
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle': 'particle 20s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }
        },
        particle: {
          '0%': { transform: 'translateX(-100vw) translateY(0)' },
          '100%': { transform: 'translateX(100vw) translateY(-100vh)' }
        }
      }
    }
  },
  plugins: [],
}

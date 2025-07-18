import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // BICTDA logo greens
        bictda: {
          light: '#A3D39C', // light green from logo
          medium: '#4BAA50', // medium green from logo
          dark: '#1B5E20', // dark green from logo
          accent: '#388E3C', // accent green
        },
        // For gradients
        primary: {
          DEFAULT: '#4BAA50',
          light: '#A3D39C',
          dark: '#1B5E20',
        },
        secondary: {
          DEFAULT: '#388E3C',
        },
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'bictda-light': '#A3D39C',
        'bictda-medium': '#4BAA50',
        'bictda-dark': '#1B5E20',
        'bictda-accent': '#388E3C',
      }),
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'calc(var(--radius) + 2px)',
        md: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in': {
          from: { transform: 'translateY(10px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px #4BAA50, 0 0 10px #4BAA50, 0 0 15px #4BAA50, 0 0 20px #4BAA50' 
          },
          '50%': { 
            boxShadow: '0 0 10px #A3D39C, 0 0 20px #A3D39C, 0 0 30px #A3D39C, 0 0 40px #A3D39C' 
          }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'gradient-shift': {
          '0%, 100%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          }
        },
        'text-glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px #4BAA50, 0 0 10px #4BAA50, 0 0 15px #4BAA50' 
          },
          '50%': { 
            textShadow: '0 0 10px #A3D39C, 0 0 20px #A3D39C, 0 0 30px #A3D39C' 
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'text-glow': 'text-glow 2s ease-in-out infinite alternate'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [
    animate,
    typography,
  ],
} satisfies Config;

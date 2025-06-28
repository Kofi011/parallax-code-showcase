
import type { Config } from "tailwindcss";

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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom portfolio colors
				'electric-blue': '#0066FF',
				'tech-gray': '#2D3748',
				'syntax-green': '#10B981',
				'code-orange': '#FF6B35'
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'50%': { transform: 'translateY(-15px) rotate(0deg)' },
					'75%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'float-code': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)', opacity: '0.7' },
					'25%': { transform: 'translateY(-20px) translateX(10px) rotate(2deg)', opacity: '0.8' },
					'50%': { transform: 'translateY(-25px) translateX(0px) rotate(0deg)', opacity: '0.9' },
					'75%': { transform: 'translateY(-10px) translateX(-10px) rotate(-2deg)', opacity: '0.8' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: '#0066FF' }
				},
				'parallax-float': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(0deg)' },
					'33%': { transform: 'translate3d(30px, -30px, 0) rotate(120deg)' },
					'66%': { transform: 'translate3d(-20px, 20px, 0) rotate(240deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'float-code': 'float-code 8s ease-in-out infinite',
				'typing': 'typing 3s steps(30) 1s forwards',
				'blink': 'blink 1s infinite',
				'parallax-float': 'parallax-float 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

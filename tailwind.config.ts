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
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'rajdhani': ['Rajdhani', 'sans-serif'],
			},
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
				}
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'text-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						'text-shadow': '0 0 4px #fff, 0 0 11px #fff, 0 0 19px hsl(var(--primary)), 0 0 40px hsl(var(--primary))',
						opacity: '1'
					},
					'20%, 24%, 55%': {
						'text-shadow': 'none',
						opacity: '0.8'
					}
				},
				'rotate-languages': {
					'0%, 20%': {
						opacity: '0',
						transform: 'translateY(10px)',
						content: '"Hello"'
					},
					'3%, 17%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'23%, 40%': {
						opacity: '0',
						transform: 'translateY(10px)',
						content: '"Hola"'
					},
					'26%, 37%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'43%, 60%': {
						opacity: '0',
						transform: 'translateY(10px)',
						content: '"Bonjour"'
					},
					'46%, 57%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'63%, 80%': {
						opacity: '0',
						transform: 'translateY(10px)',
						content: '"Konnichiwa"'
					},
					'66%, 77%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'83%, 100%': {
						opacity: '0',
						transform: 'translateY(10px)',
						content: '"Annyeong"'
					},
					'86%, 97%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						'box-shadow': '0 0 7px hsl(var(--primary)), 0 0 10px hsl(var(--primary)), 0 0 21px hsl(var(--primary))'
					},
					'50%': {
						'box-shadow': '0 0 14px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 42px hsl(var(--primary))'
					}
				},
				'background-pan': {
					'0%': {
						'background-position': '0% center'
					},
					'100%': {
						'background-position': '200% center'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'scale-out': 'scale-out 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'text-flicker': 'text-flicker 2s linear infinite',
				'rotate-languages': 'rotate-languages 15s linear infinite',
				'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite',
				'background-pan': 'background-pan 3s linear infinite',
				'enter': 'fade-in 0.3s ease-out, scale-in 0.2s ease-out',
				'exit': 'fade-out 0.3s ease-out, scale-out 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

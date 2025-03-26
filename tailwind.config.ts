
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
                // Custom colors for AfriNova Pulse
                afrinova: {
                    neon: '#00FF66',
                    gold: '#D4AF37',
                    black: '#111111',
                    red: '#FF3333',
                    "gold-light": '#F5E1A4',
                    "neon-dark": '#00CC52'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'pulse': {
                    '0%, 100%': { 
                        transform: 'scale(1)',
                        opacity: '1' 
                    },
                    '50%': { 
                        transform: 'scale(1.05)',
                        opacity: '0.9' 
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
                    }
                },
                'glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 5px rgba(0, 255, 102, 0.5), 0 0 20px rgba(0, 255, 102, 0.2)'
                    },
                    '50%': {
                        boxShadow: '0 0 20px rgba(0, 255, 102, 0.8), 0 0 30px rgba(0, 255, 102, 0.5)'
                    }
                },
                'wave': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                'scribble': {
                    '0%': { strokeDashoffset: '1000' },
                    '100%': { strokeDashoffset: '0' }
                },
                'cash-pop': {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '60%': { transform: 'scale(1.2)', opacity: '1' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite',
                'wave': 'wave 15s linear infinite',
                'scribble': 'scribble 2s ease-in-out forwards',
                'cash-pop': 'cash-pop 0.5s ease-out forwards',
                'slide-up': 'slide-up 0.5s ease-out forwards'
			},
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                caveat: ['Caveat', 'cursive'],
                jetbrains: ['JetBrains Mono', 'monospace'],
                inter: ['Inter', 'sans-serif']
            },
            backgroundImage: {
                'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYmEoMCwgMCwgMCwgMC44KSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9InJnYmEoMCwgMCwgMCwgMC42KSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2cpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiAvPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjIwIiBzdHJva2U9IiMwMEZGNjYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjxyZWN0IGZpbGw9InVybCgjcGF0dGVybikiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')",
                'benefit-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjRDRBRjM3IiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')",
                'footer-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwMEZGNjYiIHN0b3Atb3BhY2l0eT0iMC4yIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Q0QUYzNyIgc3RvcC1vcGFjaXR5PSIwLjIiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgLz48cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48bGluZSB4MT0iMCIgeT0iMCIgeDI9IjAiIHkyPSIyMCIgc3Ryb2tlPSIjRDRBRjM3IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCBmaWxsPSJ1cmwoI3BhdHRlcm4pIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')"
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

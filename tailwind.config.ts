import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/components/**/*.{ts,tsx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                background: 'var(--background)',

                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                },
                inProgressColor: {
                    DEFAULT: 'hsl(var(--inProgressColor))',
                },
                completedColor: {
                    DEFAULT: 'hsl(var(--completedColor))',
                },
                notStartedColor: {
                    DEFAULT: 'hsl(var(--notStartedColor))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;

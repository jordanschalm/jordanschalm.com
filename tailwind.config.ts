import type { Config } from 'tailwindcss'

// @ts--ignore
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inconsolata)'],
        josefin: ['var(--font-josefin-slab)'],
        alfa: ['var(--font-alfa-one-slab)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '100%' },
          '20%': { opacity: '0%' },
          '40%': { opacity: '0%' },
          '60%': { opacity: '100%' },
        },
      },
    },
  },
}
export default config

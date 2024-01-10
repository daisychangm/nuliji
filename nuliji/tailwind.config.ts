import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        viga: ['var(--font-viga)']
      },
      colors: {
        'stone-grey': '#e6e3dc',
        'med-blue': '#7c9aa0',
        'link-blue': '#78aed3',
      },
    },
  },
  plugins: [],
}
export default config

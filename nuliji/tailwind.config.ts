import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-button-inactive': "url('./public/images/login-inactive.png')",
        'login-button-active': "url('./public/images/login-active.png')",
      },
      fontFamily: {
        viga: ['var(--font-viga)']
      },
      colors: {
        'stone-grey': '#e6e3dc',
      },
    },
  },
  plugins: [],
}
export default config

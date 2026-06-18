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
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        teal: '#023344',
        t2: '#034558',
        t3: '#04596e',
        sand: '#CAC1B2',
        s2: '#B0A696',
        s3: '#EDE8E1',
        ink: '#0A0A0A',
        ink2: '#1A1A1A',
        warm: '#FAFAF8',
        warm2: '#F2F0EC',
        muted: '#8A8278',
      },
    },
  },
  plugins: [],
}

export default config

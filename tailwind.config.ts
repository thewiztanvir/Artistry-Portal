import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo:     '#1C2766',
        ink:        '#141C4F',
        slate:      '#4B5272',
        kraft:      '#C99A5B',
        threadRed:  '#D6332A',
        mist:       '#EEF0F6',
        line:       '#DADDE8',
        white:      '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)', 'system-ui', 'sans-serif'],
        bengali: ['var(--font-noto-sans-bengali)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1':      ['40px', { lineHeight: '1.15', fontWeight: '600' }],
        'h1-mob':  ['30px', { lineHeight: '1.2',  fontWeight: '600' }],
        'h2':      ['28px', { lineHeight: '1.2',  fontWeight: '600' }],
        'h2-mob':  ['24px', { lineHeight: '1.25', fontWeight: '600' }],
        'h3':      ['20px', { lineHeight: '1.3',  fontWeight: '600' }],
        'body':    ['16px', { lineHeight: '1.5',  fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4',  fontWeight: '500' }],
        'btn':     ['14px', { lineHeight: '1',    fontWeight: '600' }],
      },
      borderRadius: {
        'btn': '6px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};

export default config;

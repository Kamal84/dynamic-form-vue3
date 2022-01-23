module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.1s linear infinite',
      },
      height: {
        '8.8screen': '88vh',
        86: '360px',
        100: '400px',
        150: '784px',
      },
      width: {
        66: '264px',
      },
    },
    colors: {
      primary: {
        100: '#E0F5F2',
        200: '#B9E5E5',
        300: '#A0E2D9', // Input field on focus
        400: '#54CBBA', // Primary brand colour
        500: '#41B1A1',
        600: '#146682',
        700: '#008290',
        800: '#004952',
        900: '#002429',
      },
      secondary: {
        100: '#EBF6FE',
        200: '#CBD7E0',
        300: '#3B5A7B', // Number pad/panel pressed
        400: '#53789D', // Number pad selected/highlight
        500: '#0E2943', // Account stats
        600: '#033D67', // Secondary brand colour
        700: '#123455', // Number pad/panels
        800: '#0D2741', // Bottom Navbar
        900: '#001829', // Navbar
      },
      tertiary: {
        100: '#FBE9DA',
        200: '#F5C6A3',
        300: '#EE9958',
        400: '#FD9E02',
        500: '#FC8500',
      },
      positive: {
        100: '#CCEDE4',
        200: '#148667',
        300: '#052F1B',
      },
      notice: {
        100: '#FFE9CE',
        200: '#FA9823',
        300: '#884C03',
      },
      negative: {
        100: '#FCD8D7',
        200: '#CE2D30',
        300: '#4B0001',
      },
      gray: {
        100: '#FDFDFD', // Bg white/text
        200: '#FAFAFA', // Text field bg
        300: '#F5F5F5',
        400: '#F4F6F8',
        500: '#E9E9E9', // Text field border
        600: '#D2DCE2',
        700: '#D5D5D5', // Disabled bg
        800: '#555555', // Disabled text/label text
        900: '#111111', // Body text
      },
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    fontFamily: {
      'nunito-sans': ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.875rem', '1.25'], // Small print
      base: ['1rem', '1.25rem'], // Body text
      sm: ['1.125rem', '1.5rem'], // H6
      lg: ['1.25rem', '1.75rem'], // H5
      xl: ['1.5rem', '2rem'], // H4
      '2xl': ['1.75rem', '2.25rem'], // H3
      '3xl': ['2rem', '2.5rem'], // H2
      '4xl': ['2.5rem', '3rem'], // H1
      '5xl': ['3rem', '3.75rem'],
      '6xl': ['3.5rem', '4rem'], // Display
      '7xl': ['4rem', '4.5rem'], // Display
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

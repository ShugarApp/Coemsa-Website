// Design System Configuration
export const colors = {
  primary: {
    main: '#D81B60',
    dark: '#d65f1f',
    light: '#f58c4a',
    contrast: '#ffffff'
  },
  secondary: {
    main: '#d81b60',
    dark: '#ad1457',
    light: '#e91e63',
    contrast: '#ffffff'
  },
  accent: {
    main: '#2d7d32',
    dark: '#1b5e20',
    light: '#4caf50',
    contrast: '#ffffff'
  },
  neutral: {
    900: '#293232',
    800: '#424242',
    700: '#616161',
    600: '#757575',
    500: '#9e9e9e',
    400: '#bdbdbd',
    300: '#e0e0e0',
    200: '#eeeeee',
    100: '#f5f5f5',
    50: '#fafafa',
    white: '#ffffff'
  },
  success: {
    main: '#4caf50',
    dark: '#388e3c',
    light: '#81c784'
  },
  warning: {
    main: '#ff9800',
    dark: '#f57c00',
    light: '#ffb74d'
  },
  error: {
    main: '#f44336',
    dark: '#d32f2f',
    light: '#ef5350'
  },
  whatsapp: '#25D366'
} as const;

export const typography = {
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
  },
  lineHeight: {
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  }
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem'     // 256px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px'
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '750ms'
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
} as const;

// Utility functions
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getColorValue = (colorPath: string): string => {
  const parts = colorPath.split('.');
  let value: any = colors;

  for (const part of parts) {
    value = value[part];
    if (!value) return colorPath; // fallback to original string if path not found
  }

  return value;
};

// Responsive breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Common component styles
export const componentStyles = {
  button: {
    base: 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    sizes: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    },
    variants: {
      primary: `bg-[${colors.primary.main}] text-white hover:bg-[${colors.primary.dark}] focus:ring-[${colors.primary.main}]`,
      secondary: `bg-[${colors.secondary.main}] text-white hover:bg-[${colors.secondary.dark}] focus:ring-[${colors.secondary.main}]`,
      outline: `border-2 border-[${colors.primary.main}] text-[${colors.primary.main}] hover:bg-[${colors.primary.main}] hover:text-white`,
      ghost: `text-[${colors.primary.main}] hover:bg-[${colors.primary.main}]/10`
    }
  },
  card: {
    base: `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-${animation.duration.base}`,
    interactive: 'transform hover:scale-[1.02] cursor-pointer'
  },
  input: {
    base: `w-full px-4 py-3 border border-[${colors.neutral[300]}] rounded-lg focus:ring-2 focus:ring-[${colors.primary.main}] focus:border-transparent transition-colors duration-${animation.duration.base}`,
    error: `border-[${colors.error.main}] focus:ring-[${colors.error.main}]`
  }
} as const;

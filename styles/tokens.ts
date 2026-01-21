export const tokens = {
  colors: {
    primary: {
      DEFAULT: "#D4AF37",
      light: "#E5C76B",
      dark: "#B8962E",
    },
    secondary: {
      DEFAULT: "#1A1A2E",
      light: "#2D2D44",
      dark: "#0F0F1A",
    },
    accent: {
      DEFAULT: "#C9A227",
      light: "#DDB84A",
      dark: "#A6851F",
    },
    neutral: {
      white: "#FFFFFF",
      gray: {
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      black: "#000000",
    },
    status: {
      success: "#22C55E",
      error: "#EF4444",
      warning: "#F59E0B",
      info: "#3B82F6",
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  spacing: {
    section: {
      sm: "3rem",
      md: "5rem",
      lg: "7rem",
    },
    container: {
      sm: "1rem",
      md: "2rem",
      lg: "4rem",
    },
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    gold: "0 4px 14px 0 rgb(212 175 55 / 0.3)",
  },
  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const

export type Tokens = typeof tokens

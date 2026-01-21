export const buttonStyles = {
  base: "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",

  variants: {
    primary: "bg-white text-secondary hover:bg-gray-100 focus:ring-white",
    secondary: "bg-secondary-light text-white hover:bg-secondary border border-gray-700 focus:ring-secondary",
    accent: "bg-accent text-white hover:bg-accent-light focus:ring-accent",
    outline: "border border-gray-600 text-white hover:bg-white/10 focus:ring-white",
    ghost: "text-white hover:bg-white/10 focus:ring-white",
  },

  sizes: {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  },
} as const

export type ButtonVariant = keyof typeof buttonStyles.variants
export type ButtonSize = keyof typeof buttonStyles.sizes

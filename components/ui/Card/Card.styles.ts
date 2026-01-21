export const cardStyles = {
  base: "bg-secondary-light border border-gray-800 overflow-hidden transition-all duration-300",

  variants: {
    default: "hover:border-gray-700",
    elevated: "hover:border-primary/30 hover:shadow-gold",
    outline: "bg-transparent border-primary/20 hover:border-primary/50",
  },

  sizes: {
    sm: "rounded-lg p-4",
    md: "rounded-xl p-6",
    lg: "rounded-2xl p-8",
  },

  header: "mb-4",
  title: "text-xl font-semibold text-white",
  description: "text-gray-400 mt-1",
  content: "",
  footer: "mt-4 pt-4 border-t border-gray-800",
} as const

export type CardVariant = keyof typeof cardStyles.variants
export type CardSize = keyof typeof cardStyles.sizes

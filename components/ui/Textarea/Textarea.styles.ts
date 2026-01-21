export const textareaStyles = {
  base: "w-full bg-secondary-light border border-gray-700 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed resize-none",

  sizes: {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-4 py-3 text-base rounded-lg",
    lg: "px-5 py-4 text-lg rounded-xl",
  },

  states: {
    error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  },

  label: "block text-sm font-medium text-gray-300 mb-2",
  error: "text-sm text-red-500 mt-1",
} as const

export type TextareaSize = keyof typeof textareaStyles.sizes

export const selectStyles = {
  base: "w-full bg-secondary-light border border-gray-700 text-white transition-all duration-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed appearance-none cursor-pointer",

  sizes: {
    sm: "px-3 py-2 text-sm rounded-md pr-8",
    md: "px-4 py-3 text-base rounded-lg pr-10",
    lg: "px-5 py-4 text-lg rounded-xl pr-12",
  },

  states: {
    error: "border-red-500 focus:border-red-500 focus:ring-red-500",
  },

  label: "block text-sm font-medium text-gray-300 mb-2",
  error: "text-sm text-red-500 mt-1",

  wrapper: "relative",
  icon: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400",
} as const

export type SelectSize = keyof typeof selectStyles.sizes

"use client"

import { forwardRef, type SelectHTMLAttributes } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/cn"
import { selectStyles, type SelectSize } from "./Select.styles"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string
  error?: string
  size?: SelectSize
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, size = "md", options, placeholder, id, ...props }, ref) => {
    const selectId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className={selectStyles.label}>
            {label}
          </label>
        )}
        <div className={selectStyles.wrapper}>
          <select
            ref={ref}
            id={selectId}
            className={cn(
              selectStyles.base,
              selectStyles.sizes[size],
              error && selectStyles.states.error,
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className={selectStyles.icon} size={20} />
        </div>
        {error && <p className={selectStyles.error}>{error}</p>}
      </div>
    )
  }
)

Select.displayName = "Select"

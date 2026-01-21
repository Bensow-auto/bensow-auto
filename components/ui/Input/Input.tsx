"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "@/lib/cn"
import { inputStyles, type InputSize } from "./Input.styles"

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  error?: string
  size?: InputSize
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, size = "md", id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className={inputStyles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            inputStyles.base,
            inputStyles.sizes[size],
            error && inputStyles.states.error,
            className
          )}
          {...props}
        />
        {error && <p className={inputStyles.error}>{error}</p>}
      </div>
    )
  }
)

Input.displayName = "Input"

"use client"

import { forwardRef, type TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/cn"
import { textareaStyles, type TextareaSize } from "./Textarea.styles"

interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string
  error?: string
  size?: TextareaSize
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, size = "md", rows = 4, id, ...props }, ref) => {
    const textareaId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className={textareaStyles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            textareaStyles.base,
            textareaStyles.sizes[size],
            error && textareaStyles.states.error,
            className
          )}
          {...props}
        />
        {error && <p className={textareaStyles.error}>{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

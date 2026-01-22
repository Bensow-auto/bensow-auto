"use client"

import { forwardRef, type HTMLAttributes } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/cn"
import { cardStyles, type CardVariant, type CardSize } from "./Card.styles"
import { fadeInUp } from "@/styles/animations"

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: CardVariant
  size?: CardSize
  animated?: boolean
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

type CardContentProps = HTMLAttributes<HTMLDivElement>

type CardFooterProps = HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", size = "md", animated = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          cardStyles.base,
          cardStyles.variants[variant],
          cardStyles.sizes[size],
          className
        )}
        variants={animated ? fadeInUp : undefined}
        initial={animated ? "hidden" : undefined}
        whileInView={animated ? "visible" : undefined}
        viewport={{ once: true }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles.header, className)} {...props}>
        {title && <h3 className={cardStyles.title}>{title}</h3>}
        {description && <p className={cardStyles.description}>{description}</p>}
        {children}
      </div>
    )
  }
)

CardHeader.displayName = "CardHeader"

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles.content, className)} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = "CardContent"

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardStyles.footer, className)} {...props}>
        {children}
      </div>
    )
  }
)

CardFooter.displayName = "CardFooter"

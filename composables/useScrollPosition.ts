"use client"

import { useState, useEffect } from "react"

interface ScrollPosition {
  x: number
  y: number
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    // Set initial position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

// Hook to check if page has scrolled past a threshold
export function useHasScrolled(threshold: number = 50): boolean {
  const { y } = useScrollPosition()
  return y > threshold
}

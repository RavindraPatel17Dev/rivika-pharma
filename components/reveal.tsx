'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** delay in ms before the element animates in */
  delay?: number
  as?: React.ElementType
}

/**
 * Wraps content and fades/slides it into view once it enters the viewport.
 * Uses IntersectionObserver — no scroll listeners, so it stays performant.
 * Starts hidden only after we confirm (client-side) that the element is
 * below the fold; anything already on screen animates in immediately.
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const onScreen = rect.top < window.innerHeight * 0.92

    if (onScreen || typeof IntersectionObserver === 'undefined') {
      // Already visible on load — no need to hide it.
      return
    }

    // Below the fold: hide it, then reveal when scrolled into view.
    setHidden(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHidden(false)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'translateY(28px)' : 'translateY(0)',
        willChange: 'opacity, transform',
      }}
      className={cn(className)}
    >
      {children}
    </Tag>
  )
}

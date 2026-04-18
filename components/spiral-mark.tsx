interface SpiralMarkProps {
  size?: number
  className?: string
}

/**
 * The EdwinOS spiral logo mark — a 2.5-turn inward spiral in accent orange.
 * Approximated with cubic bezier curves; the path traces clockwise from the
 * outer loop down to the center.
 */
export function SpiralMark({ size = 48, className }: SpiralMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 5
           C 37 5 46 14 46 27
           C 46 39.5 35.5 48 23 47
           C 11 46 3 36.5 4 25
           C 5 14 13.5 7 24 8
           C 33.5 9 41 16.5 41 26
           C 41 34.5 34 41 25 41
           C 17 41 11 35 11 27
           C 11 20 16.5 15 23 15
           C 29 15 34 19.5 34 25.5
           C 34 31 29.5 35 24 35"
        stroke="rgb(var(--color-accent))"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

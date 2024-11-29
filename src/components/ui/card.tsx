import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg shadow-lg ${className}`}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }

import * as React from "react"

interface ProgressProps {
  value: number
  max?: number
  className?: string
  showPercentage?: boolean
  variant?: 'default' | 'thin'
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, className = '', showPercentage = false, variant = 'default' }, ref) => {
    const percentage = (value / max) * 100
    const height = variant === 'thin' ? 'h-2' : 'h-4'

    return (
      <div ref={ref} className={`w-full ${className}`}>
        <div className={`${height} bg-gray-200 rounded-full overflow-hidden`}>
          <div
            className={`${height} bg-[#005EB8] rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
          />
        </div>
        {showPercentage && (
          <span className="text-sm text-gray-600 mt-1">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }

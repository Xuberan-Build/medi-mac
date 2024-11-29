import * as React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          className={`
            w-full px-3 py-2 border rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#005EB8]
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export const Progress = ({ value }: { value: number }) => (
  <div className="w-full h-2 bg-gray-200 rounded-full">
    <div
      className="h-full bg-[#005EB8] rounded-full transition-all duration-300"
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
)

export const Radio = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", children, ...props }, ref) => (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="radio"
        className="w-4 h-4 text-[#005EB8] border-gray-300 focus:ring-[#005EB8]"
        ref={ref}
        {...props}
      />
      <span className="text-gray-700">{children}</span>
    </label>
  )
)
Radio.displayName = "Radio"

export const Card = ({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`bg-white rounded-lg shadow-lg ${className}`}
    {...props}
  />
)

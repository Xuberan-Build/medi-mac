import * as React from "react"

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
  error?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = "", label, description, error, ...props }, ref) => {
    const id = React.useId()

    return (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            type="radio"
            id={id}
            ref={ref}
            className={`
              h-4 w-4 cursor-pointer rounded-full border-gray-300
              text-[#005EB8] shadow-sm
              focus:ring-2 focus:ring-[#005EB8] focus:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${className}
            `}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className="ml-3 text-sm">
            {label && (
              <label
                htmlFor={id}
                className={`font-medium ${props.disabled ? 'opacity-50' : 'text-gray-900'} cursor-pointer`}
              >
                {label}
              </label>
            )}
            {description && (
              <p className={`text-gray-500 ${props.disabled ? 'opacity-50' : ''}`}>
                {description}
              </p>
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio }

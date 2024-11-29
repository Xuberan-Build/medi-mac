import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'sm' | 'lg';
  variant?: 'default' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', size = 'default', variant = 'default', ...props }, ref) => {
    const sizeClasses = {
      default: 'h-10 py-2 px-4 text-sm',
      sm: 'h-9 px-3 text-sm',
      lg: 'h-12 px-8 text-lg'
    }

    const variantClasses = {
      default: 'bg-[#005EB8] text-white hover:bg-[#003F7A]',
      secondary: 'bg-white text-[#005EB8] border border-[#005EB8] hover:bg-[#D9EBF9]'
    }

    const classes = `
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      inline-flex items-center justify-center rounded-lg font-medium
      transition-colors focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
      ${className}
    `.trim()

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

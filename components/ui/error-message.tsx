interface ErrorMessageProps {
  children: React.ReactNode
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <p className="text-sm font-medium text-red-500 dark:text-red-900">
      {children}
    </p>
  )
}

export { ErrorMessage }

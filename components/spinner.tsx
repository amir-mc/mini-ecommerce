export function MiniSpinner({ size = 'md', color = 'primary' }: { size?: 'sm' | 'md' | 'lg'; color?: 'primary' | 'secondary' | 'white' }) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-[3px]',
    lg: 'h-8 w-8 border-4'
  };

  const colorClasses = {
    primary: 'border-t-blue-500 border-transparent',
    secondary: 'border-t-purple-500 border-transparent',
    white: 'border-t-white border-transparent'
  };

  return (
    <div 
      className={`rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      aria-label="Loading"
    />
  );
}
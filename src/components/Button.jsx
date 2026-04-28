
import { Loader2 } from 'lucide-react';

const Button = ({ children, isLoading, disabled, className = '', ...props }) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-white transition-all duration-200
        ${(isLoading || disabled) ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:scale-[0.98]'}
        ${className}
      `}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;



const Input = ({ label, id, error, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-1.5 mb-4">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2 border rounded-lg outline-none transition-all duration-200 
          ${error ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default Input;

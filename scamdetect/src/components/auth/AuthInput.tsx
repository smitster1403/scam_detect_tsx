interface AuthInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

export default function AuthInput({
  id,
  name,
  type,
  label,
  value,
  onChange,
  error,
  required = false,
  autoComplete,
  placeholder,
}: AuthInputProps) {
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          placeholder={placeholder}
          className={`appearance-none block w-full px-3 py-2 border ${
            error 
              ? "border-red-300 focus:ring-red-500 focus:border-red-500" 
              : "border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
          } rounded-md shadow-sm placeholder-gray-400 focus:outline-none dark:bg-gray-900 dark:text-white sm:text-sm transition-colors`}
          value={value}
          onChange={onChange}
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

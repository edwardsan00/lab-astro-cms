import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", wrapperClassName = "", ...props }, ref) => {
    return (
      <div className={`space-y-2 ${wrapperClassName}`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            className={`
              w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500
              focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
              disabled:cursor-not-allowed disabled:opacity-50
              ${
                error
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : ""
              }
              ${className}
            `}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

import React from "react";
import { useId } from "react";
function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-sm font-semibold cursor-pointer"
        >
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`
        px-3 py-2 sm:px-4 sm:py-3 
        rounded-lg 
        bg-white text-black 
        outline-none 
        focus:bg-gray-50 
        duration-200 
        border border-gray-200 
        w-full
        text-sm sm:text-base
        cursor-pointer
        ${className}
      `}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);

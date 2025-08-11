import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  props,
}) {
  return (
    <button
      type={type}
      className={`px-3 py-2 sm:px-4 sm:py-2 
      rounded-lg 
      ${bgColor} ${textColor} ${className} 
      w-full sm:w-auto 
      text-sm sm:text-base
      text-center`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

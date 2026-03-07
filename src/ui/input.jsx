// src/ui/input.jsx
import { forwardRef } from "react";

export const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none ${className}`}
      {...props}
    />
  );
});

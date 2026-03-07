// src/ui/button.jsx
import { forwardRef } from "react";

export const Button = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`bg-blue-500 text-white rounded-md px-6 py-3 font-semibold hover:bg-blue-600 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

// src/ui/badge.jsx
import { forwardRef } from "react";

export const Badge = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={`inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
});

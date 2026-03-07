// src/ui/card.jsx
import { forwardRef } from "react";

// Main Card container
export const Card = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

// Card content wrapper
export const CardContent = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
});

// Card header wrapper
export const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={`px-4 pt-4 pb-2 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
});

// Card title
export const CardTitle = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`text-lg font-semibold text-gray-900 ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});

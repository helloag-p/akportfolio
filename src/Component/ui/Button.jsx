// src/components/ui/button.jsx
import React from "react";
import { cn } from '../../lib/utils.js'
export function Button({ children, variant = "default", className = "", asChild, ...props }) {
  const Comp = asChild ? "div" : "button";

  const variants = {
    default: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-primary hover:bg-primary/10",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
  };

  return (
    <Comp
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

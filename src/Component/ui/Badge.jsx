// src/components/ui/badge.jsx
import React from "react";
import { cn } from '../../lib/utils.js'
export function Badge({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-primary text-white px-2 py-1 rounded-md text-xs font-medium",
    secondary: "bg-secondary text-white px-2 py-1 rounded-md text-xs font-medium",
  };

  return <span className={cn(variants[variant], className)}>{children}</span>;
}

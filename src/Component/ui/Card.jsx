// src/components/ui/card.jsx
import React from "react";
import { cn } from '../../lib/utils.js'
export function Card({ children, className = "" }) {
  return <div className={cn("rounded-lg shadow-lg bg-white p-4", className)}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={cn("p-4", className)}>{children}</div>;
}

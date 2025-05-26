// // src/components/ui/card.jsx
// import React from "react";
// import { cn } from '../../lib/utils.js'

// export function Card({ children, className = "" }) {
//   return (
//     <div
//       className={cn(
//         "rounded-lg shadow-lg p-4 bg-background dark:bg-muted/40 backdrop-blur-md",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// }

// export function CardContent({ children, className = "" }) {
//   return <div className={cn("p-4", className)}>{children}</div>;
// }
// src/components/ui/card.jsx
// src/components/ui/card.jsx
// import React from "react";
// import { cn } from '../../lib/utils.js'

// const variantStyles = {
//   blue: "bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white",
//   purple: "bg-gradient-to-br from-purple-600 via-purple-800 to-indigo-900 text-white",
//   glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white",
//   default: "bg-white text-black dark:bg-neutral-900 dark:text-white",
// };

// export function Card({ children, className = "", variant = "default" }) {
//   const selectedStyle = variantStyles[variant] || variantStyles.default;

//   return (
//     <div
//       className={cn(
//         "rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl",
//         selectedStyle,
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// }

// export function CardContent({ children, className = "" }) {
//   return <div className={cn("p-4", className)}>{children}</div>;
// }
// src/components/ui/Card.jsx
import React from "react";
import { cn } from "../../lib/utils.js";

// Card component
export function Card({ children, className = "", variant = "default" }) {
  const variants = {
    default: "bg-white",
    gradient: "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur",
    glass: "bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl",
    dark: "bg-zinc-900 text-white shadow-lg",
  };

  return (
    <div className={cn("rounded-2xl p-4", variants[variant], className)}>
      {children}
    </div>
  );
}

// CardContent component
export function CardContent({ children, className = "" }) {
  return <div className={cn("p-4", className)}>{children}</div>;
}



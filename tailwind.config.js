// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: "class",
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure all files are scanned
//     theme: {
//       extend: {
//         colors: {
//           background: "hsl(var(--background))",
//           foreground: "hsl(var(--foreground))",
//           card: "hsl(var(--card))",
//           "card-foreground": "hsl(var(--card-foreground))",
//           popover: "hsl(var(--popover))",
//           "popover-foreground": "hsl(var(--popover-foreground))",
//           primary: "hsl(var(--primary))",
//           "primary-foreground": "hsl(var(--primary-foreground))",
//           secondary: "hsl(var(--secondary))",
//           "secondary-foreground": "hsl(var(--secondary-foreground))",
//           muted: "hsl(var(--muted))",
//           "muted-foreground": "hsl(var(--muted-foreground))",
//           accent: "hsl(var(--accent))",
//           "accent-foreground": "hsl(var(--accent-foreground))",
//           destructive: "hsl(var(--destructive))",
//           "destructive-foreground": "hsl(var(--destructive-foreground))",
//           border: "hsl(var(--border))",
//           input: "hsl(var(--input))",
//           ring: "hsl(var(--ring))",
//         },
//       },
//     },
//     plugins: [],
//   };
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
import React from 'react'
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AK</span>
            </div>
            <span className="font-semibold text-lg text-foreground">ABHISHEK KUMAR</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              { href: 'https://github.com', icon: <Github />, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: <Linkedin />, label: 'LinkedIn' },
              { href: 'https://instagram.com', icon: <Instagram />, label: 'Instagram' },
              { href: 'mailto:youremail@example.com', icon: <Mail />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                {React.cloneElement(icon, { className: 'h-5 w-5' })}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Morgan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer

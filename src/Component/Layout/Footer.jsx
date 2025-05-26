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
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-lg">AK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">ABHISHEK KUMAR</span>
              <span className="text-sm text-muted-foreground">Video Editor</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
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
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
                aria-label={label}
              >
                {React.cloneElement(icon, { className: 'h-6 w-6' })}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-muted my-8"></div>

        {/* Copyright and Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed and Developed with ❤️ By</span>
            <a 
              href="https://github.com/parvagarwal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline font-bold text-amber-500"
            >
              Parv Agarwal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

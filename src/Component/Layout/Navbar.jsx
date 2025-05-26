import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from "../../lib/utils.js"
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from "../ui/Button"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
     <header className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "scrolled" : ""
                )}>
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-2">
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center"
                                >
                                    <span className="text-primary-foreground font-bold">AK</span>
                                </motion.div>
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-xl font-bold hidden sm:block"
                                >
                                    ABHISHEK KUMAR
                                </motion.span>
                            </Link>
    
                            <nav className="hidden md:flex items-center gap-8">
                                {["home", "work", "about", "contact"].map((section, index) => (
                                    <Link
                                        key={section}
                                        to={`#${section}`}
                                        className={cn(
                                            "relative font-medium transition-colors hover:text-primary",
                                            activeSection === section ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.1 * index }}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </motion.span>
                                        {activeSection === section && (
                                            <motion.div
                                                layoutId="activeSection"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Hire Me
                                    </Button>
                                </motion.div>
                            </nav>
    
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>
    
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden bg-background/95 backdrop-blur-md"
                            >
                                <div className="container mx-auto px-4 py-4">
                                    <nav className="flex flex-col gap-4">
                                        {["home", "work", "about", "contact"].map((section) => (
                                            <Link
                                                key={section}
                                                to={`#${section}`}
                                                className={cn(
                                                    "py-2 font-medium transition-colors hover:text-primary",
                                                    activeSection === section ? "text-primary" : "text-muted-foreground"
                                                )}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </Link>
                                        ))}
                                        <Button className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                                            Hire Me
                                        </Button>
                                    </nav>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </header>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-dark-950/80'
          : 'bg-transparent'
      )}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="text-xl font-bold">
            <span className="text-gradient">AU</span>
          </Link>

          {/* Navigation PC */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Lien Sociaux - PC */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="https://github.com/Laharls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthonyurbanski/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/*  Menu Bouton Mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="border-t border-dark-200 py-4 md:hidden dark:border-dark-800">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-dark-600 transition-colors hover:text-primary-600 dark:text-dark-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-dark-200 dark:border-dark-800">
                <a
                  href="https://github.com/Laharls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-600 transition-colors hover:text-primary-600"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anthonyurbanski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-600 transition-colors hover:text-primary-600"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#contact"
                  className="text-dark-600 transition-colors hover:text-primary-600"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

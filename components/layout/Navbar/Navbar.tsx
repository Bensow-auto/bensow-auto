"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { useHasScrolled } from "@/composables"
import { cn } from "@/lib/cn"
import { navbarStyles } from "./Navbar.styles"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/services", label: "Nos Services" },
  { href: "/commande", label: "Commande Personnalisée" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const hasScrolled = useHasScrolled(50)

  return (
    <header
      className={cn(
        navbarStyles.wrapper,
        hasScrolled ? navbarStyles.wrapperScrolled : navbarStyles.wrapperTop
      )}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.inner}>
          {/* Logo */}
          <Link href="/" className={navbarStyles.logo}>
            BSA
          </Link>

          {/* Desktop Navigation */}
          <nav className={navbarStyles.nav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navbarStyles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="accent" size="sm">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={navbarStyles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={navbarStyles.mobileMenu}
          >
            <nav className={navbarStyles.mobileNav}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={navbarStyles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="accent" size="sm" className="w-full">
                  Nous contacter
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

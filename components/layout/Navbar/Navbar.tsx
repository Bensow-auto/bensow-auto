"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useHasScrolled } from "@/composables"
import { cn } from "@/lib/cn"
import { navbarStyles } from "./Navbar.styles"

const navLinks = [
  { href: "/", label: "Accueil" },
  // { href: "/catalogue", label: "Catalogue" }, // TODO: À activer plus tard
  { href: "/services", label: "Nos Services" },
  { href: "/commande", label: "Commande Personnalisée" },
  { href: "/expertise", label: "Expertise" },
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
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo2.png"
              alt="BSA"
              width={160}
              height={90}
              className="h-20 w-auto"
              priority
            />
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

      {/* Mobile Menu - CSS Animation */}
      <div
        className={cn(
          navbarStyles.mobileMenu,
          "transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
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
      </div>
    </header>
  )
}

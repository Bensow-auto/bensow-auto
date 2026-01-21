import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { footerStyles } from "./Footer.styles"

const quickLinks = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/services", label: "Nos Services" },
  { href: "/expertise", label: "Expertise" },
]

const serviceLinks = [
  { href: "/services#import", label: "Import de véhicules" },
  { href: "/services#export", label: "Export de véhicules" },
  { href: "/commande", label: "Commande personnalisée" },
  { href: "/expertise", label: "Expertise automobile" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={footerStyles.wrapper}>
      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>
          {/* About Section */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Bensow Auto</h3>
            <p className={footerStyles.description}>
              Spécialiste de l&apos;import-export automobile. Nous vous accompagnons dans
              l&apos;achat et la vente de véhicules à l&apos;international.
            </p>
          </div>

          {/* Quick Links */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Liens rapides</h3>
            <div className={footerStyles.linkList}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={footerStyles.link}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Nos Services</h3>
            <div className={footerStyles.linkList}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={footerStyles.link}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={footerStyles.section}>
            <h3 className={footerStyles.sectionTitle}>Contact</h3>
            <div className={footerStyles.linkList}>
              <a href="tel:+33123456789" className={footerStyles.link}>
                <Phone size={14} className="inline mr-2" />
                +33 1 23 45 67 89
              </a>
              <a href="mailto:contact@bensow-auto.com" className={footerStyles.link}>
                <Mail size={14} className="inline mr-2" />
                contact@bensow-auto.com
              </a>
              <span className={footerStyles.link}>
                <MapPin size={14} className="inline mr-2" />
                Paris, France
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={footerStyles.bottom}>
          <p className={footerStyles.copyright}>
            © {currentYear} Bensow Auto. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/mentions-legales" className={footerStyles.link}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className={footerStyles.link}>
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Image from "next/image"
import Link from "next/link"

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/services", label: "Nos Services" },
  { href: "/commande", label: "Commande Privée" },
  { href: "/expertise", label: "Expertise" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/depot-vente", label: "Dépôt-vente" },
  { href: "/expertise", label: "Expertise Automobile" },
  { href: "/commande", label: "Commande personnalisée" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo1.png"
                alt="BSA - Bensow Auto"
                width={120}
                height={90}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous
              <br />
              vos projets automobiles. Expertise, qualité
              <br />
              et service personnalisé.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              NAVIGATION
            </h3>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              SERVICES
            </h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-gray-500 text-xs mt-6">
              Suivi complet jusqu&apos;à l&apos;immatriculation française
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">
              CONTACT
            </h3>
            <div className="flex flex-col gap-4">
              {/* Emails Card */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-light border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:contact@bensowauto.fr" className="text-gray-400 hover:text-white transition-colors text-sm">
                    contact@bensowauto.fr
                  </a>
                  <a href="mailto:contact.y@bensowauto.fr" className="text-gray-400 hover:text-white transition-colors text-sm">
                    contact.y@bensowauto.fr
                  </a>
                </div>
              </div>

              {/* Phones Card */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-light border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+33756987958" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +33 7 56 98 79 58
                  </a>
                  <a href="tel:+33756813428" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +33 7 56 81 34 28
                  </a>
                  <a href="tel:+33631751255" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +33 6 31 75 12 55
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/33756987958"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-secondary-light border border-gray-700 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/bensowauto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                @bensowauto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} BENSOW AUTO. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="text-gray-500 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="/conditions-generales" className="text-gray-500 hover:text-white transition-colors text-sm">
                CGU
              </Link>
              <span className="text-gray-500 text-sm italic hidden sm:inline">
                Votre projet automobile, maîtrisé.
              </span>
              <Image
                src="/images/logo2.png"
                alt="BSA"
                width={40}
                height={30}
                className="h-8 w-auto opacity-50"
              />
            </div>
          </div>
          <div className="text-center">
            <span className="text-gray-600 text-xs">
              Powered by <span className="text-gray-400">Alleycom</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

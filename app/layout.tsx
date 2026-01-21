import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navbar, Footer, WhatsAppButton } from "@/components/layout"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bensow Auto | Import-Export Automobile",
  description: "Spécialiste de l'import-export automobile. Commande personnalisée, expertise et accompagnement dans l'achat et la vente de véhicules à l'international.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

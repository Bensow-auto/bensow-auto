"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check, Search } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"

const depotVenteFeatures = [
  "Sélection rigoureuse de véhicules",
  "Carnet d'entretien vérifié",
  "Kilométrage certifié",
  "Accompagnement administratif",
  "Historique complet vérifié",
  "Garantie sur chaque véhicule",
  "Financement possible",
]

const expertiseFeatures = [
  "Inspection mécanique complète",
  "Contrôle des équipements",
  "Avis impartial et professionnel",
  "Vérification de la carrosserie",
  "Rapport d'expertise détaillé",
  "Conseils personnalisés",
]

const commandeFeatures = [
  "Cahier des charges détaillé avec vous",
  "Vérification avant proposition",
  "Plaque WW offerte",
  "Accès à des réseaux exclusifs",
  "Négociation incluse",
  "Accompagnement de A à Z",
]

const importFeatures = [
  "Recherche sur les marchés allemand et belge",
  "Gestion du transport",
  "Suivi complet pour l'immatriculation française",
  "Vérification complète du véhicule",
  "Plaque WW offerte",
  "Accompagnement administratif total",
  "Prix net",
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 uppercase tracking-widest text-sm mb-4"
          >
            Notre expertise à votre service
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Nos <span className="font-light italic">Services</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Une gamme complète de services automobiles pour répondre à tous vos besoins,
            avec l&apos;expertise et le professionnalisme que vous méritez.
          </motion.p>
        </motion.div>
      </section>

      {/* Dépôt & Vente Section */}
      <section id="depot-vente" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              variants={fadeInLeft}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
              <Image
                src="/images/depot-vente.jpg"
                alt="Dépôt & Vente de Véhicules"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight}>
              <div className="w-12 h-12 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-lg">◎</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Dépôt & Vente de Véhicules
              </h2>

              <p className="text-gray-400 mb-8">
                BENSOW AUTO sélectionne avec soin des véhicules d&apos;occasion de qualité.
                De la petite citadine à la grosse cylindrée. Notre expertise nous permet
                de vous proposer des automobiles fiables, inspectées et contrôlées avant chaque mise en vente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {depotVenteFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href="/depot-vente">
                <Button variant="outline" size="md">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeInLeft}>
              <div className="w-12 h-12 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-lg">◎</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Expertise Automobile
              </h2>

              <p className="text-gray-400 mb-8">
                Avant d&apos;acheter ou de vendre un véhicule, faites appel à notre service d&apos;expertise.
                Un contrôle indépendant, rigoureux et transparent pour vous assurer une transaction en toute confiance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {expertiseFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href="/expertise">
                <Button variant="outline" size="md">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeInRight}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
              <Image
                src="/images/expertise.jpg"
                alt="Expertise Automobile"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Commande Personnalisée Section */}
      <section id="commande" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              variants={fadeInLeft}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
              <Image
                src="/images/commande-privee.jpg"
                alt="Commande Personnalisée"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight}>
              <div className="w-12 h-12 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                <Search size={24} className="text-white" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Commande Personnalisée
              </h2>

              <p className="text-gray-400 mb-8">
                Vous avez un véhicule précis en tête ? Notre service de commande personnalisée
                vous permet de définir vos critères exacts et de nous confier la recherche.
                Nous trouvons le véhicule idéal pour vous.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {commandeFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link href="/commande">
                <Button variant="outline" size="md">
                  En savoir plus
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Import Allemagne & Belgique Section */}
      <section id="import" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeInLeft}>
              <div className="flex items-center gap-3 mb-6">
                {/* German Flag */}
                <div className="w-10 h-7 rounded overflow-hidden shadow-md">
                  <div className="h-1/3 bg-black" />
                  <div className="h-1/3 bg-red-600" />
                  <div className="h-1/3 bg-yellow-400" />
                </div>
                {/* Belgian Flag */}
                <div className="w-10 h-7 rounded overflow-hidden shadow-md flex">
                  <div className="w-1/3 bg-black" />
                  <div className="w-1/3 bg-yellow-400" />
                  <div className="w-1/3 bg-red-600" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Import Allemagne & Belgique
              </h2>

              <p className="text-gray-400 mb-8">
                Grâce à nos nombreux partenaires commerciaux et notre expérience terrain.
                Profitez de notre service d&apos;importation depuis l&apos;Allemagne et la Belgique.
                Nous gérons l&apos;ensemble du processus pour vous offrir les meilleures opportunités
                du marché européen.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {importFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeInRight}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
              <Image
                src="/images/import.jpg"
                alt="Import Allemagne & Belgique"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Une question sur nos services ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-8"
          >
            Notre équipe est disponible pour répondre à toutes vos interrogations.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Nous contacter
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

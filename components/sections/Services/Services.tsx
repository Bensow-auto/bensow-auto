"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"

const services = [
  {
    title: "Dépôt & Vente",
    description:
      "Nous sélectionnons uniquement des véhicules d'occasion de qualité. De la petite citadine à la grosse cylindrée. Chaque automobile est inspectée et contrôlée avant sa mise en vente.",
    features: ["Véhicules contrôlés", "Historique vérifié", "Kilométrage certifié", "Garantie incluse"],
    image: "/images/depot-vente.jpg",
    href: "/services#depot-vente",
    imagePosition: "right",
  },
  {
    title: "Expertise Automobile",
    description:
      "Un service d'expertise indépendant et rigoureux pour vous accompagner dans vos décisions d'achat ou de vente.",
    features: ["Contrôle complet", "Rapport détaillé", "Avis d'expert"],
    image: "/images/expertise.jpg",
    href: "/expertise",
    imagePosition: "left",
  },
  {
    title: "Commande Privée",
    description:
      "Vous recherchez un véhicule spécifique ? Nous nous chargeons de le trouver selon vos critères.",
    features: ["Recherche sur-mesure", "Accompagnement A à Z", "Europe et au-delà"],
    image: "/images/commande-privee.jpg",
    href: "/commande",
    imagePosition: "right",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 uppercase tracking-widest text-sm mb-4"
          >
            Ce que nous proposons
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading"
          >
            Nos <span className="font-light italic">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Une gamme complète de services automobiles pour répondre à tous vos besoins.
          </motion.p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                service.imagePosition === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={service.imagePosition === "right" ? fadeInLeft : fadeInRight}
                className={`relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden ${
                  service.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Fallback gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent rounded-2xl" />
              </motion.div>

              {/* Content */}
              <motion.div
                variants={service.imagePosition === "right" ? fadeInRight : fadeInLeft}
                className={service.imagePosition === "left" ? "lg:order-2" : "lg:order-1"}
              >
                <div className="w-12 h-12 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-white text-lg">◎</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={service.href}>
                  <Button variant="outline" size="md">
                    En savoir plus
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

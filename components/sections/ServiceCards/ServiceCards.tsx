"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Car, FileCheck, Search } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/styles/animations"

const services = [
  {
    icon: Car,
    title: "Dépôt-vente",
    description: "Véhicule sélectionné avec soin",
    href: "/depot-vente",
  },
  {
    icon: FileCheck,
    title: "Expertise",
    description: "Contrôle rigoureux & indépendant",
    href: "/expertise",
  },
  {
    icon: Search,
    title: "Commande privée",
    description: "Recherche sur-mesure",
    href: "/commande",
  },
]

export function ServiceCards() {
  return (
    <section className="py-16 bg-secondary">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link href={service.href}>
                <div className="group p-6 bg-secondary-light/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-secondary border border-gray-700 rounded-lg flex items-center justify-center group-hover:border-gray-600 transition-colors">
                    <service.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

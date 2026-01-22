"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Users, Star } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/styles/animations"

const features = [
  {
    icon: Award,
    title: "Expertise Reconnue",
    description: "Des années d'expérience dans le secteur automobile au service de votre projet.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence Totale",
    description: "Aucune surprise, nous vous accompagnons avec honnêteté à chaque étape.",
  },
  {
    icon: Users,
    title: "Service Personnalisé",
    description: "Chaque client est unique, chaque projet mérite une attention particulière.",
  },
  {
    icon: Star,
    title: "Qualité Premium",
    description: "Nous ne proposons que des véhicules répondant à nos standards élevés.",
  },
]

const stats = [
  { value: "500+", label: "Véhicules vendus" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "15+", label: "Années d'expérience" },
  { value: "24h", label: "Réponse garantie" },
]

export function Difference() {
  return (
    <section className="py-20 bg-secondary-dark">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
            Pourquoi nous choisir
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
            La Différence <span className="font-light">B.S.A</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary border border-gray-800 rounded-2xl flex items-center justify-center">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-800"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2 font-heading">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

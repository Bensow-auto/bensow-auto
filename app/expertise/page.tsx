"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Settings, Eye, FileText, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"

const expertiseFeatures = [
  {
    icon: Settings,
    title: "Contrôle Mécanique",
    description: "Vérification complète des organes de transmission, du moteur et des organes mécaniques.",
  },
  {
    icon: Eye,
    title: "Inspection Visuelle",
    description: "Examen minutieux de la carrosserie, de l'intérieur et de tous les éléments visuels du véhicule.",
  },
  {
    icon: FileText,
    title: "Rapport Détaillé",
    description: "Un compte-rendu complet vous est remis avec photos et observations détaillées.",
  },
  {
    icon: Shield,
    title: "Avis Impartial",
    description: "Notre expertise est indépendante, objective et dans votre intérêt uniquement.",
  },
]

const checkpoints = [
  "Test de conduite complet",
  "Vérification des niveaux",
  "Contrôle électronique (valise diagnostic)",
  "Inspection du châssis et soubassement",
  "Vérification de l'historique d'entretien",
  "Contrôle des pneumatiques",
  "Test des équipements électriques",
  "Évaluation de l'état général",
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeInLeft}>
              <div className="w-12 h-12 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center mb-6">
                <Shield size={24} className="text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Expertise
                <br />
                Automobile
              </h1>

              <p className="text-gray-400 mb-8 text-lg">
                Avant d&apos;acheter ou de vendre, assurez-vous de la valeur réelle du véhicule.
                Notre service d&apos;expertise indépendant vous garantit une évaluation rigoureuse et transparente.
              </p>

              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Demander une expertise
                  <ArrowRight size={18} className="ml-2" />
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
                src="/images/expertise-hero.jpg"
                alt="Expertise automobile"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-secondary">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
              Notre méthodologie
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Une expertise <span className="font-light italic">complète</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseFeatures.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="outline" className="h-full text-center">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-4 bg-secondary border border-gray-700 rounded-xl flex items-center justify-center">
                      <feature.icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Points de contrôle Section */}
      <section className="py-20">
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
                src="/images/controle.jpg"
                alt="Points de contrôle"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight}>
              <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
                Ce que est inclus
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Points de <span className="font-light italic">contrôle</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checkpoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Indépendance & Transparence Section */}
      <section className="py-20 bg-secondary">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="w-16 h-16 mx-auto mb-8 bg-secondary border border-gray-700 rounded-xl flex items-center justify-center"
          >
            <Shield size={32} className="text-white" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Indépendance & Transparence
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-8 text-lg"
          >
            Notre expertise est totalement indépendante. Nous n&apos;avons aucun intérêt dans la transaction.
            Notre seul objectif : vous fournir une évaluation honnête et complète pour vous aider à prendre la meilleure décision.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Prendre rendez-vous
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Durée Section */}
      <section className="py-12 border-t border-gray-800">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="w-10 h-10 bg-secondary-light border border-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-white">⏱</span>
            </div>
            <p>
              <span className="text-white font-semibold">Durée :</span> 1h30 selon le véhicule
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

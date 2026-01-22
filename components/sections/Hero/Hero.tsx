"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { fadeInUp, staggerContainer } from "@/styles/animations"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary to-secondary" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Logo BSA */}
        <motion.div
          variants={fadeInUp}
          className="mb-8 flex flex-col items-center"
        >
          <Image
            src="/images/logo1.png"
            alt="Bensow Auto"
            width={280}
            height={250}
            className="mb-2"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6"
        >
          Expertise • Confiance • Excellence
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading leading-tight"
        >
          Votre projet automobile,
          <br />
          <span className="text-white">maîtrisé.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10"
        >
          Achat, revente, expertise et commande privée.
          <br />
          Un accompagnement sur-mesure pour chaque client.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Nous contacter
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
          <Link href="/commande">
            <Button variant="primary" size="lg">
              Commande Privée
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8"
      >
        <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 0V12M6 12L1 7M6 12L11 7" stroke="#666" strokeWidth="1.5"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { fadeInUp, staggerContainer } from "@/styles/animations"

export function CTA() {
  return (
    <section className="py-20 bg-secondary">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Glassmorphism Card */}
        <motion.div
          variants={fadeInUp}
          className="relative p-8 sm:p-12 rounded-3xl bg-secondary-light/30 backdrop-blur-sm border border-gray-800 text-center overflow-hidden"
        >
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-light/50 via-transparent to-secondary-dark/50 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              Prêt à démarrer votre
              <br />
              projet automobile ?
            </h2>

            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins.
              Notre équipe d&apos;experts est à votre disposition.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Demander un devis
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="accent" size="lg">
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

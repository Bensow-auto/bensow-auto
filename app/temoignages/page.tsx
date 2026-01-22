"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { fadeInUp, staggerContainer } from "@/styles/animations"

const testimonials = [
  {
    name: "Thomas D.",
    location: "Lyon",
    service: "Import Allemagne",
    rating: 5,
    text: "Service impeccable du début à la fin. J'ai pu acquérir ma BMW Série 5 depuis l'Allemagne avec un accompagnement total. Toutes les démarches administratives ont été gérées, je n'ai eu qu'à récupérer les clés !",
    date: "Décembre 2024",
  },
  {
    name: "Sophie M.",
    location: "Paris",
    service: "Expertise automobile",
    rating: 5,
    text: "Grâce à l'expertise de BENSOW AUTO, j'ai évité d'acheter un véhicule avec un historique douteux. Le rapport détaillé m'a permis de prendre une décision éclairée. Je recommande vivement !",
    date: "Novembre 2024",
  },
  {
    name: "Marc L.",
    location: "Marseille",
    service: "Commande personnalisée",
    rating: 5,
    text: "Je cherchais une Audi RS3 avec des critères très précis. L'équipe a trouvé exactement ce que je voulais en moins de 3 semaines. Professionnalisme et réactivité au rendez-vous.",
    date: "Novembre 2024",
  },
  {
    name: "Julie R.",
    location: "Bordeaux",
    service: "Dépôt-vente",
    rating: 5,
    text: "J'ai vendu ma voiture via leur service de dépôt-vente. Tout s'est passé rapidement et en toute transparence. Le prix obtenu était même supérieur à mes attentes !",
    date: "Octobre 2024",
  },
  {
    name: "Pierre G.",
    location: "Toulouse",
    service: "Import Belgique",
    rating: 5,
    text: "Deuxième achat avec BENSOW AUTO. Cette fois-ci une Mercedes importée de Belgique. Comme la première fois, tout était parfait. Une équipe de confiance.",
    date: "Octobre 2024",
  },
  {
    name: "Caroline B.",
    location: "Nantes",
    service: "Expertise automobile",
    rating: 5,
    text: "L'expertise a révélé des défauts cachés sur le véhicule que je comptais acheter. Sans ce contrôle, j'aurais fait une très mauvaise affaire. Merci pour votre honnêteté !",
    date: "Septembre 2024",
  },
]

const stats = [
  { value: "150+", label: "Clients satisfaits" },
  { value: "4.9/5", label: "Note moyenne" },
  { value: "98%", label: "Recommandent nos services" },
]

export default function TemoignagesPage() {
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
            Ce que disent nos clients
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Leurs <span className="font-light italic">témoignages</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez les retours d&apos;expérience de nos clients.
            Leur satisfaction est notre meilleure carte de visite.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-gray-800">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="outline" className="h-full">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote size={32} className="text-gray-700 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-accent fill-accent"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Author */}
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-accent text-xs">{testimonial.service}</span>
                        <span className="text-gray-600 text-xs">{testimonial.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
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
            Rejoignez nos clients satisfaits
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-8"
          >
            Confiez-nous votre projet automobile et bénéficiez d&apos;un accompagnement personnalisé.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Nous contacter
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Découvrir nos services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

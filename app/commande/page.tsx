"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search, Check, FileText, Car, Handshake } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { Card, CardHeader, CardContent } from "@/components/ui/Card"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"
import { supabase } from "@/lib/supabase"
import { carBrands } from "@/data/car-brands"

const steps = [
  {
    icon: FileText,
    title: "1. Définition du cahier des charges",
    description: "Nous établissons ensemble vos critères précis : marque, modèle, motorisation, options, budget.",
  },
  {
    icon: Search,
    title: "2. Recherche ciblée",
    description: "Nous activons notre réseau et nos sources pour trouver les meilleures opportunités correspondant à vos attentes.",
  },
  {
    icon: Car,
    title: "3. Vérification complète",
    description: "Chaque véhicule identifié est minutieusement inspecté : historique, état mécanique, authenticité.",
  },
  {
    icon: Handshake,
    title: "4. Livraison clé en main",
    description: "Négociation, formalités administratives, transport : nous gérons tout jusqu'à la remise des clés.",
  },
]

const advantages = [
  "Accès à des réseaux exclusifs",
  "Vérification complète avant proposition",
  "Négociation incluse",
  "Plaque WW offerte",
  "Accompagnement de A à Z",
  "Aucune surprise sur le prix",
]

const budgetOptions = [
  { value: "10000-20000", label: "10 000 € - 20 000 €" },
  { value: "20000-30000", label: "20 000 € - 30 000 €" },
  { value: "30000-50000", label: "30 000 € - 50 000 €" },
  { value: "50000-75000", label: "50 000 € - 75 000 €" },
  { value: "75000+", label: "Plus de 75 000 €" },
]

const delaiOptions = [
  { value: "urgent", label: "Urgent (< 2 semaines)" },
  { value: "1mois", label: "Sous 1 mois" },
  { value: "3mois", label: "Sous 3 mois" },
  { value: "flexible", label: "Flexible" },
]

export default function CommandePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const data = {
      nom: formData.get("nom") as string,
      prenom: formData.get("prenom") as string,
      email: formData.get("email") as string,
      telephone: formData.get("telephone") as string,
      type_demande: "commande" as const,
      marque: formData.get("marque") as string,
      modele: formData.get("modele") as string,
      annee_min: parseInt(formData.get("annee_min") as string) || null,
      km_max: parseInt(formData.get("km_max") as string) || null,
      budget: formData.get("budget") as string,
      delai: formData.get("delai") as string,
      options: formData.get("options") as string,
      status: "non_lu" as const,
      source: "website_commande",
    }

    try {
      const { error: supabaseError } = await supabase
        .from("demandes")
        .insert([data])

      if (supabaseError) throw supabaseError

      setIsSuccess(true)
      e.currentTarget.reset()
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center">
            <Check size={40} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Demande envoyée avec succès !
          </h1>
          <p className="text-gray-400 mb-8">
            Nous avons bien reçu votre demande de commande personnalisée. Notre équipe vous contactera
            dans les plus brefs délais pour affiner votre recherche.
          </p>
          <Link href="/">
            <Button variant="outline">
              Retour à l&apos;accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

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
                <Search size={24} className="text-white" />
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Commande
                <br />
                <span className="font-light italic">Personnalisée</span>
              </h1>

              <p className="text-gray-400 mb-8 text-lg">
                Vous avez un véhicule précis en tête ? Confiez-nous votre recherche.
                Notre expertise et notre réseau nous permettent de dénicher les meilleures opportunités pour vous.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#formulaire">
                  <Button variant="primary" size="lg">
                    Démarrer ma recherche
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={fadeInRight}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-light to-secondary rounded-2xl" />
              <Image
                src="/images/commande-hero.jpg"
                alt="Commande personnalisée"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Comment ça marche
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Un processus <span className="font-light italic">simplifié</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="outline" className="h-full">
                  <CardHeader>
                    <div className="w-14 h-14 mb-4 bg-secondary border border-gray-700 rounded-xl flex items-center justify-center">
                      <step.icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Advantages Section */}
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
                src="/images/commande-avantages.jpg"
                alt="Nos avantages"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent rounded-2xl" />
            </motion.div>

            {/* Content */}
            <motion.div variants={fadeInRight}>
              <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
                Pourquoi nous choisir
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Les avantages de notre <span className="font-light italic">service</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    {advantage}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulaire" className="py-20 bg-secondary">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
              Votre projet
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Décrivez votre <span className="font-light italic">véhicule idéal</span>
            </h2>
            <p className="text-gray-400">
              Remplissez ce formulaire et nous vous recontacterons rapidement pour affiner votre recherche.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-secondary-light border border-gray-800 rounded-2xl p-8"
          >
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Véhicule recherché */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Véhicule recherché</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Marque"
                    name="marque"
                    options={carBrands}
                    placeholder="Sélectionnez la marque"
                    required
                  />
                  <Input
                    label="Modèle"
                    name="modele"
                    placeholder="ex: Série 3, Classe C, A4..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Année minimum"
                    name="annee_min"
                    type="number"
                    placeholder="ex: 2020"
                  />
                  <Input
                    label="Kilométrage maximum"
                    name="km_max"
                    type="number"
                    placeholder="ex: 50000"
                  />
                </div>

                <Textarea
                  label="Options / critères spécifiques"
                  name="options"
                  placeholder="Couleur, motorisation, équipements souhaités..."
                  rows={3}
                />
              </div>

              {/* Budget et délai */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-white font-semibold text-lg">Budget et délai</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select
                    label="Budget"
                    name="budget"
                    options={budgetOptions}
                    placeholder="Sélectionnez votre budget"
                    required
                  />
                  <Select
                    label="Délai souhaité"
                    name="delai"
                    options={delaiOptions}
                    placeholder="Sélectionnez un délai"
                    required
                  />
                </div>
              </div>

              {/* Coordonnées */}
              <div className="space-y-4 pt-4 border-t border-gray-700">
                <h3 className="text-white font-semibold text-lg">Vos coordonnées</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nom"
                    name="nom"
                    placeholder="Votre nom"
                    required
                  />
                  <Input
                    label="Prénom"
                    name="prenom"
                    placeholder="Votre prénom"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    required
                  />
                  <Input
                    label="Téléphone"
                    name="telephone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                Envoyer ma demande
                <ArrowRight size={18} className="ml-2" />
              </Button>

              <p className="text-gray-500 text-sm text-center">
                En soumettant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe.
              </p>
            </form>
          </motion.div>
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
            Vous préférez nous contacter directement ?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-8"
          >
            Notre équipe est disponible pour échanger sur votre projet automobile.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button variant="outline" size="lg">
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

"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { supabase } from "@/lib/supabase"

const requestTypes = [
  { value: "expertise", label: "Expertise automobile" },
  { value: "commande", label: "Commande personnalisée" },
  { value: "import", label: "Import Allemagne / Belgique" },
  { value: "contact", label: "Autre demande" },
]

export default function ContactPage() {
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
      type_demande: formData.get("type") as string,
      message: formData.get("message") as string,
      status: "non_lu" as const,
      source: "website_contact",
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
            Message envoyé avec succès !
          </h1>
          <p className="text-gray-400 mb-8">
            Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.
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
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
            Parlons de votre projet
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contactez-<span className="font-light italic">nous</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une question, un projet automobile ? Notre équipe est à votre disposition
            pour vous accompagner dans toutes vos démarches.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Réponse rapide
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Contactez-nous directement sur WhatsApp pour une réponse rapide.
                </p>
                <a
                  href="https://wa.me/33756987958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] hover:underline text-sm font-medium"
                >
                  Ouvrir WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Instagram Card */}
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-xl flex items-center justify-center mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  Suivez-nous
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Retrouvez nos dernières actualités et véhicules sur Instagram.
                </p>
                <a
                  href="https://instagram.com/bensowauto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:underline text-sm font-medium"
                >
                  @bensowauto
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Location Info */}
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-4">
                  Informations
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-500">Adresse</p>
                    <p className="text-gray-300">Sur rendez-vous uniquement</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Horaires</p>
                    <p className="text-gray-300">Lun - Sam : 9h - 19h</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="text-gray-300">contact@bensowauto.fr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-400 mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type de demande */}
                  <Select
                    label="Type de demande"
                    name="type"
                    options={requestTypes}
                    placeholder="Sélectionnez le type de demande"
                    required
                  />

                  {/* Nom & Prénom */}
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

                  {/* Email & Téléphone */}
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

                  {/* Message */}
                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    required
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    isLoading={isSubmitting}
                  >
                    Envoyer le message
                    <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Vous cherchez un véhicule précis ?
          </h2>
          <p className="text-gray-400 mb-8">
            Découvrez notre service de commande personnalisée et laissez-nous trouver le véhicule de vos rêves.
          </p>
          <Link href="/commande">
            <Button variant="outline" size="lg">
              Commande personnalisée
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

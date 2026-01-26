"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Car, Check, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"
import { supabase } from "@/lib/supabase"
import {
  carBrands,
  fuelTypes,
  gearboxTypes,
  vehicleConditions,
  controleTechniqueStatus,
  yearOptions,
} from "@/data/car-brands"

const MAX_IMAGES = 5
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB avant compression
const TARGET_SIZE = 800 // Largeur max en pixels
const QUALITY = 0.7 // Qualité JPEG (0.7 = bon compromis)

// Compresse une image côté client
const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve) => {
    const img = document.createElement("img")
    img.onload = () => {
      const canvas = document.createElement("canvas")
      let { width, height } = img

      // Redimensionner si nécessaire
      if (width > TARGET_SIZE) {
        height = (height * TARGET_SIZE) / width
        width = TARGET_SIZE
      }

      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext("2d")
      ctx?.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const compressedFile = new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            })
            resolve(compressedFile)
          } else {
            resolve(file)
          }
        },
        "image/jpeg",
        QUALITY
      )
    }
    img.src = URL.createObjectURL(file)
  })
}

const features = [
  "Estimation gratuite de votre véhicule",
  "Prise en charge complète de la vente",
  "Visibilité maximale sur nos réseaux",
  "Accompagnement administratif inclus",
  "Paiement sécurisé et rapide",
  "Aucun frais cachés",
]

type ImageFile = {
  file: File
  preview: string
}

export default function DepotVentePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [images, setImages] = useState<ImageFile[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setError(null)

    for (let i = 0; i < files.length; i++) {
      const file = files[i]

      // Check file size before compression
      if (file.size > MAX_FILE_SIZE) {
        setError(`L'image "${file.name}" est trop volumineuse`)
        continue
      }

      // Check total count
      if (images.length >= MAX_IMAGES) {
        setError(`Maximum ${MAX_IMAGES} photos autorisées`)
        break
      }

      // Compress image
      const compressedFile = await compressImage(file)

      setImages(prev => {
        if (prev.length >= MAX_IMAGES) return prev
        return [...prev, {
          file: compressedFile,
          preview: URL.createObjectURL(compressedFile),
        }]
      })
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev]
      URL.revokeObjectURL(newImages[index].preview)
      newImages.splice(index, 1)
      return newImages
    })
  }

  const uploadImages = async (): Promise<string[]> => {
    const urls: string[] = []

    for (const img of images) {
      const fileName = `depot-vente/${Date.now()}-${Math.random().toString(36).substring(7)}-${img.file.name}`

      const { error: uploadError } = await supabase.storage
        .from("Vehicules")
        .upload(fileName, img.file)

      if (uploadError) {
        console.error("Upload error:", uploadError)
        continue
      }

      const { data: urlData } = supabase.storage
        .from("Vehicules")
        .getPublicUrl(fileName)

      urls.push(urlData.publicUrl)
    }

    return urls
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setError(null)

    try {
      // Get form data before async operations
      const formData = new FormData(form)

      // Upload images
      const imageUrls = await uploadImages()

      const data = {
        // Client info
        nom: formData.get("nom") as string,
        prenom: formData.get("prenom") as string,
        email: formData.get("email") as string,
        telephone: formData.get("telephone") as string,
        // Vehicle info
        type_demande: "depot_vente" as const,
        marque: formData.get("marque") as string,
        modele: formData.get("modele") as string,
        annee_min: parseInt(formData.get("annee") as string) || null,
        km_max: parseInt(formData.get("kilometrage") as string) || null,
        options: JSON.stringify({
          energie: formData.get("energie"),
          boite_vitesse: formData.get("boite_vitesse"),
          puissance_fiscale: formData.get("puissance_fiscale"),
          etat: formData.get("etat"),
          controle_technique: formData.get("controle_technique"),
          prix_souhaite: formData.get("prix_souhaite"),
        }),
        photos: imageUrls,
        message: formData.get("message") as string,
        status: "non_lu" as const,
        source: "website_depot_vente",
      }

      const { error: supabaseError } = await supabase
        .from("demandes")
        .insert([data])

      if (supabaseError) throw supabaseError

      // Cleanup previews
      images.forEach(img => URL.revokeObjectURL(img.preview))
      setImages([])
      setIsSuccess(true)
      form.reset()
    } catch (err: unknown) {
      const error = err as { message?: string; code?: string; details?: string }
      console.error("Error submitting form:", JSON.stringify(error, null, 2))
      setError(error?.message || "Une erreur est survenue. Veuillez réessayer.")
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
            Nous avons bien reçu votre demande de dépôt-vente. Notre équipe vous contactera
            dans les plus brefs délais pour évaluer votre véhicule.
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-gray-500 uppercase tracking-widest text-sm mb-4">
              Vendez votre véhicule
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Dépôt-<span className="font-light italic">Vente</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Confiez-nous la vente de votre véhicule. Nous nous occupons de tout,
              de l&apos;estimation à la transaction finale.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features + Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Features */}
            <motion.div variants={fadeInLeft} className="lg:col-span-1">
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-8 sticky top-32">
                <div className="w-14 h-14 bg-secondary border border-gray-700 rounded-xl flex items-center justify-center mb-6">
                  <Car size={28} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Pourquoi nous confier votre véhicule ?
                </h2>
                <div className="space-y-4">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                      <Check size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeInRight} className="lg:col-span-2">
              <div className="bg-secondary-light border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Décrivez votre véhicule
                </h2>
                <p className="text-gray-400 mb-8">
                  Remplissez ce formulaire pour nous permettre d&apos;évaluer votre véhicule.
                </p>

                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Infos véhicule */}
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">
                      Informations du véhicule
                    </h3>

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
                      <Select
                        label="Année"
                        name="annee"
                        options={yearOptions}
                        placeholder="Année du véhicule"
                        required
                      />
                      <Input
                        label="Kilométrage"
                        name="kilometrage"
                        type="number"
                        placeholder="ex: 75000"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select
                        label="Énergie"
                        name="energie"
                        options={fuelTypes}
                        placeholder="Type de carburant"
                        required
                      />
                      <Select
                        label="Boîte de vitesse"
                        name="boite_vitesse"
                        options={gearboxTypes}
                        placeholder="Type de boîte"
                        required
                      />
                    </div>

                    <Input
                      label="Puissance fiscale (CV)"
                      name="puissance_fiscale"
                      type="number"
                      placeholder="ex: 7"
                    />
                  </div>

                  {/* État & Prix */}
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">
                      État et prix souhaité
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Select
                        label="État général"
                        name="etat"
                        options={vehicleConditions}
                        placeholder="État du véhicule"
                        required
                      />
                      <Select
                        label="Contrôle technique"
                        name="controle_technique"
                        options={controleTechniqueStatus}
                        placeholder="Statut CT"
                        required
                      />
                    </div>

                    <Input
                      label="Prix souhaité (€)"
                      name="prix_souhaite"
                      type="number"
                      placeholder="ex: 15000"
                      required
                    />

                    <Textarea
                      label="Informations complémentaires"
                      name="message"
                      placeholder="Équipements, historique, défauts éventuels..."
                      rows={4}
                    />
                  </div>

                  {/* Photos */}
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">
                      Photos du véhicule
                    </h3>

                    <div className="space-y-4">
                      {/* Upload Zone */}
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center cursor-pointer hover:border-gray-600 transition-colors"
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageSelect}
                          className="hidden"
                        />
                        <Upload size={32} className="mx-auto text-gray-500 mb-3" />
                        <p className="text-gray-400 text-sm">
                          Cliquez pour ajouter des photos
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          Max {MAX_IMAGES} photos (optimisées automatiquement)
                        </p>
                      </div>

                      {/* Image Previews */}
                      {images.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {images.map((img, index) => (
                            <div key={index} className="relative group aspect-square">
                              <Image
                                src={img.preview}
                                alt={`Photo ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X size={14} className="text-white" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {images.length > 0 && (
                        <p className="text-gray-500 text-sm">
                          {images.length} / {MAX_IMAGES} photos sélectionnées
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Coordonnées */}
                  <div className="space-y-4">
                    <h3 className="text-white font-semibold text-lg border-b border-gray-700 pb-2">
                      Vos coordonnées
                    </h3>

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
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

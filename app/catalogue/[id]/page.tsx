"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  Gauge,
  Fuel,
  Settings2,
  Car,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Check,
  Shield,
  Award,
} from "lucide-react"
import { supabase } from "@/lib/supabase"
import { carBrands, fuelTypes, gearboxTypes, vehicleConditions, controleTechniqueStatus } from "@/data/car-brands"
import { Button } from "@/components/ui/Button"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/styles/animations"

interface Vehicule {
  id: string
  marque: string
  modele: string
  annee: number
  kilometrage: number
  prix: number
  energie: string
  boite_vitesse: string
  puissance_fiscale: number | null
  puissance_din: number | null
  nombre_portes: number | null
  couleur: string | null
  etat: string | null
  controle_technique: string | null
  premiere_main: boolean
  titre: string
  description: string | null
  equipements: string[] | null
  photos: string[]
  photo_principale: number
}

export default function VehiculeDetailPage() {
  const params = useParams()
  const [vehicule, setVehicule] = useState<Vehicule | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const { data } = await supabase
          .from("vehicules")
          .select("*")
          .eq("id", params.id)
          .eq("status", "publie")
          .single()

        setVehicule(data as Vehicule)
        if (data?.photo_principale) {
          setCurrentPhotoIndex(data.photo_principale)
        }
        setLoading(false)
      }

      fetchData()
    }
  }, [params.id])

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const formatKm = (km: number) => {
    return km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  }

  const getBrandLabel = (value: string) => {
    const brand = carBrands.find((b) => b.value === value)
    return brand?.label || value
  }

  const getFuelLabel = (value: string) => {
    const fuel = fuelTypes.find((f) => f.value === value)
    return fuel?.label || value
  }

  const getGearboxLabel = (value: string) => {
    const gearbox = gearboxTypes.find((g) => g.value === value)
    return gearbox?.label || value
  }

  const getConditionLabel = (value: string) => {
    const condition = vehicleConditions.find((c) => c.value === value)
    return condition?.label || value
  }

  const getCTLabel = (value: string) => {
    const ct = controleTechniqueStatus.find((c) => c.value === value)
    return ct?.label || value
  }

  const nextPhoto = () => {
    if (vehicule?.photos) {
      setCurrentPhotoIndex((prev) => (prev + 1) % vehicule.photos.length)
    }
  }

  const prevPhoto = () => {
    if (vehicule?.photos) {
      setCurrentPhotoIndex((prev) => (prev - 1 + vehicule.photos.length) % vehicule.photos.length)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-secondary pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-800 rounded w-1/4" />
            <div className="h-[500px] bg-gray-800 rounded-2xl" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-10 bg-gray-800 rounded w-3/4" />
                <div className="h-6 bg-gray-800 rounded w-1/2" />
              </div>
              <div className="h-64 bg-gray-800 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!vehicule) {
    return (
      <div className="min-h-screen bg-secondary pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Car className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Véhicule non trouvé</h2>
          <p className="text-gray-400 mb-8">Ce véhicule n&apos;est plus disponible.</p>
          <Link href="/catalogue">
            <Button variant="primary">Retour au catalogue</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <Link
            href="/catalogue"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au catalogue
          </Link>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative mb-8"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-secondary-light">
            {vehicule.photos && vehicule.photos.length > 0 ? (
              <>
                <Image
                  src={vehicule.photos[currentPhotoIndex]}
                  alt={vehicule.titre}
                  fill
                  className="object-cover"
                  priority
                />
                {vehicule.photos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {vehicule.photos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhotoIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentPhotoIndex ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Car className="h-24 w-24 text-gray-600" />
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {vehicule.photos && vehicule.photos.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {vehicule.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentPhotoIndex ? "border-accent" : "border-transparent"
                  }`}
                >
                  <Image src={photo} alt={`Photo ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-8"
          >
            {/* Title & Price */}
            <motion.div variants={fadeInLeft}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {vehicule.titre}
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                {getBrandLabel(vehicule.marque)} {vehicule.modele} • {vehicule.annee}
              </p>
              <div className="text-4xl font-bold text-accent">
                {formatPrice(vehicule.prix)} €
              </div>
            </motion.div>

            {/* Quick Specs */}
            <motion.div
              variants={fadeInLeft}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-4 text-center">
                <Calendar className="h-5 w-5 text-accent mx-auto mb-2" />
                <div className="text-white font-semibold">{vehicule.annee}</div>
                <div className="text-gray-500 text-sm">Année</div>
              </div>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-4 text-center">
                <Gauge className="h-5 w-5 text-accent mx-auto mb-2" />
                <div className="text-white font-semibold">{formatKm(vehicule.kilometrage)} km</div>
                <div className="text-gray-500 text-sm">Kilométrage</div>
              </div>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-4 text-center">
                <Fuel className="h-5 w-5 text-accent mx-auto mb-2" />
                <div className="text-white font-semibold">{getFuelLabel(vehicule.energie)}</div>
                <div className="text-gray-500 text-sm">Énergie</div>
              </div>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-4 text-center">
                <Settings2 className="h-5 w-5 text-accent mx-auto mb-2" />
                <div className="text-white font-semibold">{getGearboxLabel(vehicule.boite_vitesse)}</div>
                <div className="text-gray-500 text-sm">Boîte</div>
              </div>
            </motion.div>

            {/* Characteristics */}
            <motion.div
              variants={fadeInLeft}
              className="bg-secondary-light border border-gray-800 rounded-2xl p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Caractéristiques</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Marque</span>
                  <span className="text-white">{getBrandLabel(vehicule.marque)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Modèle</span>
                  <span className="text-white">{vehicule.modele}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Année</span>
                  <span className="text-white">{vehicule.annee}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Kilométrage</span>
                  <span className="text-white">{formatKm(vehicule.kilometrage)} km</span>
                </div>
                {vehicule.puissance_fiscale && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Puissance fiscale</span>
                    <span className="text-white">{vehicule.puissance_fiscale} CV</span>
                  </div>
                )}
                {vehicule.puissance_din && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Puissance DIN</span>
                    <span className="text-white">{vehicule.puissance_din} ch</span>
                  </div>
                )}
                {vehicule.nombre_portes && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Nombre de portes</span>
                    <span className="text-white">{vehicule.nombre_portes}</span>
                  </div>
                )}
                {vehicule.couleur && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Couleur</span>
                    <span className="text-white capitalize">{vehicule.couleur}</span>
                  </div>
                )}
                {vehicule.etat && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">État</span>
                    <span className="text-white">{getConditionLabel(vehicule.etat)}</span>
                  </div>
                )}
                {vehicule.controle_technique && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Contrôle technique</span>
                    <span className="text-white">{getCTLabel(vehicule.controle_technique)}</span>
                  </div>
                )}
                {vehicule.premiere_main && (
                  <div className="flex justify-between py-2 border-b border-gray-800">
                    <span className="text-gray-400">Première main</span>
                    <span className="text-green-400">Oui</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Description */}
            {vehicule.description && (
              <motion.div
                variants={fadeInLeft}
                className="bg-secondary-light border border-gray-800 rounded-2xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
                <p className="text-gray-400 whitespace-pre-line">{vehicule.description}</p>
              </motion.div>
            )}

            {/* Equipments */}
            {vehicule.equipements && vehicule.equipements.length > 0 && (
              <motion.div
                variants={fadeInLeft}
                className="bg-secondary-light border border-gray-800 rounded-2xl p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">Équipements</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {vehicule.equipements.map((equip, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {equip}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar - Contact Card */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible">
            <div className="bg-secondary-light border border-gray-800 rounded-2xl p-6 sticky top-28">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white">Intéressé par ce véhicule ?</h3>
                <p className="text-gray-400 text-sm mt-1">Contactez-nous pour plus d&apos;informations</p>
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href="tel:+33123456789"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-xl transition-colors font-medium"
                >
                  <Phone className="h-5 w-5" />
                  Appeler
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-secondary border border-gray-700 hover:border-accent text-white rounded-xl transition-colors font-medium"
                >
                  <Mail className="h-5 w-5" />
                  Envoyer un message
                </Link>
              </div>

              {/* Trust badges */}
              <div className="border-t border-gray-800 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Shield className="h-5 w-5 text-accent" />
                  Véhicule vérifié et garanti
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <Award className="h-5 w-5 text-accent" />
                  Accompagnement personnalisé
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

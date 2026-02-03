"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, Gauge, Fuel, Settings2, Car, ChevronDown } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { carBrands, fuelTypes, gearboxTypes } from "@/data/car-brands"
import { fadeInUp, staggerContainer } from "@/styles/animations"

interface Vehicule {
  id: string
  marque: string
  modele: string
  annee: number
  kilometrage: number
  prix: number
  energie: string
  boite_vitesse: string
  titre: string
  photos: string[]
  photo_principale: number
}

export default function CataloguePage() {
  const [vehicules, setVehicules] = useState<Vehicule[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    marque: "",
    energie: "",
    boite_vitesse: "",
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      let query = supabase
        .from("vehicules")
        .select("id, marque, modele, annee, kilometrage, prix, energie, boite_vitesse, titre, photos, photo_principale")
        .eq("status", "publie")
        .order("created_at", { ascending: false })

      if (filters.marque) {
        query = query.eq("marque", filters.marque)
      }
      if (filters.energie) {
        query = query.eq("energie", filters.energie)
      }
      if (filters.boite_vitesse) {
        query = query.eq("boite_vitesse", filters.boite_vitesse)
      }

      const { data } = await query

      setVehicules((data as Vehicule[]) || [])
      setLoading(false)
    }

    fetchData()
  }, [filters])

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

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="pt-32 pb-8">
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
            Nos véhicules disponibles
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Notre <span className="font-light italic">Catalogue</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez notre sélection de véhicules d&apos;occasion, tous vérifiés et garantis par Bensow Auto.
          </motion.p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-secondary-light border border-gray-800 rounded-2xl p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search placeholder */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-3 bg-secondary border border-gray-700 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent"
                />
              </div>

              {/* Brand Filter */}
              <div className="relative">
                <select
                  value={filters.marque}
                  onChange={(e) => setFilters({ ...filters, marque: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-accent"
                >
                  <option value="">Toutes les marques</option>
                  {carBrands.map((brand) => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
              </div>

              {/* Fuel Filter */}
              <div className="relative">
                <select
                  value={filters.energie}
                  onChange={(e) => setFilters({ ...filters, energie: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-accent"
                >
                  <option value="">Toutes les énergies</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel.value} value={fuel.value}>
                      {fuel.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
              </div>

              {/* Gearbox Filter */}
              <div className="relative">
                <select
                  value={filters.boite_vitesse}
                  onChange={(e) => setFilters({ ...filters, boite_vitesse: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl text-white appearance-none cursor-pointer focus:outline-none focus:border-accent"
                >
                  <option value="">Toutes les boîtes</option>
                  {gearboxTypes.map((gearbox) => (
                    <option key={gearbox.value} value={gearbox.value}>
                      {gearbox.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results count */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">
            {vehicules.length} véhicule{vehicules.length > 1 ? "s" : ""} disponible{vehicules.length > 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-secondary-light rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-800" />
                  <div className="p-5 space-y-3">
                    <div className="h-6 bg-gray-800 rounded w-3/4" />
                    <div className="h-4 bg-gray-800 rounded w-1/2" />
                    <div className="h-8 bg-gray-800 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : vehicules.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center py-16"
            >
              <Car className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Aucun véhicule disponible
              </h3>
              <p className="text-gray-400">
                Revenez bientôt pour découvrir nos nouvelles arrivées !
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {vehicules.map((vehicule) => (
                <motion.div key={vehicule.id} variants={fadeInUp}>
                  <Link href={`/catalogue/${vehicule.id}`}>
                    <div className="group bg-secondary-light border border-gray-800 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        {vehicule.photos && vehicule.photos.length > 0 ? (
                          <Image
                            src={vehicule.photos[vehicule.photo_principale || 0]}
                            alt={vehicule.titre}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <Car className="h-12 w-12 text-gray-600" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-light/80 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-accent transition-colors">
                          {vehicule.titre}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                          {getBrandLabel(vehicule.marque)} {vehicule.modele}
                        </p>

                        {/* Specs */}
                        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {vehicule.annee}
                          </div>
                          <div className="flex items-center gap-1">
                            <Gauge className="h-3.5 w-3.5" />
                            {formatKm(vehicule.kilometrage)} km
                          </div>
                          <div className="flex items-center gap-1">
                            <Fuel className="h-3.5 w-3.5" />
                            {getFuelLabel(vehicule.energie)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Settings2 className="h-3.5 w-3.5" />
                            {getGearboxLabel(vehicule.boite_vitesse)}
                          </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-white">
                            {formatPrice(vehicule.prix)} €
                          </span>
                          <span className="text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
                            Voir détails →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/styles/animations"

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Mentions <span className="font-light italic">légales</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400"
          >
            Dernière mise à jour : Janvier 2025
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="space-y-12">
            {/* Éditeur du site */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-6 space-y-2">
                <p className="text-gray-300">
                  <span className="text-gray-500">Raison sociale :</span> BENSOW AUTO
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Forme juridique :</span> [À compléter]
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Capital social :</span> [À compléter]
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">SIRET :</span> [À compléter]
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Siège social :</span> [À compléter]
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Email :</span> contact.y@bensowauto.fr
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Téléphone :</span> +33 7 56 98 79 58
                </p>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">2. Directeur de publication</h2>
              <p className="text-gray-400">
                Le directeur de la publication du site est [Nom du dirigeant], en qualité de [Fonction].
              </p>
            </motion.div>

            {/* Hébergeur */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">3. Hébergeur</h2>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-6 space-y-2">
                <p className="text-gray-300">
                  <span className="text-gray-500">Raison sociale :</span> Vercel Inc.
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Site web :</span> vercel.com
                </p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-400 leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
                est la propriété exclusive de BENSOW AUTO ou de ses partenaires et est protégé par les lois
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Toute reproduction, représentation, modification, publication, transmission, dénaturation,
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur
                quelque support que ce soit est interdite sans l&apos;autorisation écrite préalable de BENSOW AUTO.
              </p>
            </motion.div>

            {/* Données personnelles */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">5. Protection des données personnelles</h2>
              <p className="text-gray-400 leading-relaxed">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au
                Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès,
                de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l&apos;adresse email : contact.y@bensowauto.fr
              </p>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et réaliser des
                statistiques de visites. En poursuivant votre navigation sur ce site, vous acceptez
                l&apos;utilisation de cookies conformément à notre politique de confidentialité.
              </p>
            </motion.div>

            {/* Limitation de responsabilité */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation de responsabilité</h2>
              <p className="text-gray-400 leading-relaxed">
                BENSOW AUTO s&apos;efforce d&apos;assurer au mieux l&apos;exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, BENSOW AUTO ne peut garantir l&apos;exactitude, la précision
                ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                En conséquence, BENSOW AUTO décline toute responsabilité pour toute imprécision,
                inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </motion.div>

            {/* Droit applicable */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">8. Droit applicable</h2>
              <p className="text-gray-400 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

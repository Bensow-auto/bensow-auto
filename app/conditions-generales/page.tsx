"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/styles/animations"

export default function ConditionsGeneralesPage() {
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
            Conditions <span className="font-light italic">générales</span>
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
            {/* Préambule */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Préambule</h2>
              <p className="text-gray-400 leading-relaxed">
                Les présentes conditions générales de vente (CGV) régissent les relations contractuelles
                entre BENSOW AUTO et ses clients dans le cadre de ses activités de vente de véhicules
                d&apos;occasion, d&apos;expertise automobile, de commande personnalisée et d&apos;import de véhicules.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Toute commande implique l&apos;acceptation sans réserve des présentes conditions générales de vente.
              </p>
            </motion.div>

            {/* Article 1 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 1 - Services proposés</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                BENSOW AUTO propose les services suivants :
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Vente de véhicules d&apos;occasion sélectionnés et contrôlés</li>
                <li>Service de dépôt-vente pour les particuliers</li>
                <li>Expertise automobile indépendante</li>
                <li>Commande personnalisée de véhicules</li>
                <li>Import de véhicules depuis l&apos;Allemagne et la Belgique</li>
                <li>Accompagnement administratif (immatriculation, carte grise)</li>
              </ul>
            </motion.div>

            {/* Article 2 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 2 - Prix et paiement</h2>
              <p className="text-gray-400 leading-relaxed">
                Les prix de nos véhicules et services sont indiqués en euros toutes taxes comprises (TTC).
                BENSOW AUTO se réserve le droit de modifier ses prix à tout moment, étant entendu que
                le prix figurant sur la confirmation de commande sera le seul applicable.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Le paiement peut être effectué par virement bancaire, chèque de banque ou financement.
                Un acompte peut être demandé à la commande, le solde étant dû à la livraison du véhicule.
              </p>
            </motion.div>

            {/* Article 3 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 3 - Livraison</h2>
              <p className="text-gray-400 leading-relaxed">
                La livraison du véhicule s&apos;effectue sur rendez-vous, soit dans nos locaux, soit à
                l&apos;adresse convenue avec le client. Les délais de livraison sont donnés à titre indicatif
                et peuvent varier selon la disponibilité du véhicule et les formalités administratives.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Pour les véhicules importés, le délai inclut le transport depuis le pays d&apos;origine
                et les démarches d&apos;immatriculation en France.
              </p>
            </motion.div>

            {/* Article 4 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 4 - Garantie</h2>
              <p className="text-gray-400 leading-relaxed">
                Tous nos véhicules bénéficient de la garantie légale de conformité (article L217-4 du
                Code de la consommation) et de la garantie des vices cachés (articles 1641 à 1649 du Code civil).
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Une garantie commerciale complémentaire peut être proposée selon le véhicule.
                Les conditions de cette garantie sont détaillées dans le contrat de vente.
              </p>
            </motion.div>

            {/* Article 5 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 5 - Droit de rétractation</h2>
              <p className="text-gray-400 leading-relaxed">
                Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
                ne s&apos;applique pas aux contrats de fourniture de biens confectionnés selon les
                spécifications du consommateur ou nettement personnalisés.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Pour les véhicules standards en stock, un délai de rétractation de 14 jours peut
                s&apos;appliquer sous certaines conditions. Contactez-nous pour plus d&apos;informations.
              </p>
            </motion.div>

            {/* Article 6 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 6 - Service d&apos;expertise</h2>
              <p className="text-gray-400 leading-relaxed">
                Notre service d&apos;expertise automobile fournit un avis technique indépendant sur
                l&apos;état d&apos;un véhicule. Le rapport d&apos;expertise est remis au client et reste sa propriété.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                L&apos;expertise ne constitue pas une garantie sur le véhicule et n&apos;engage pas la
                responsabilité de BENSOW AUTO quant aux éventuels défauts non détectables lors
                de l&apos;inspection ou apparaissant ultérieurement.
              </p>
            </motion.div>

            {/* Article 7 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 7 - Commande personnalisée et import</h2>
              <p className="text-gray-400 leading-relaxed">
                Pour les services de commande personnalisée et d&apos;import, un mandat de recherche
                est établi définissant les critères du véhicule recherché, le budget et les conditions
                de la prestation.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Un acompte non remboursable peut être demandé pour couvrir les frais de recherche.
                Le client reste libre d&apos;accepter ou de refuser les véhicules proposés.
              </p>
            </motion.div>

            {/* Article 8 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 8 - Responsabilité</h2>
              <p className="text-gray-400 leading-relaxed">
                BENSOW AUTO s&apos;engage à fournir ses services avec diligence et professionnalisme.
                Notre responsabilité est limitée au montant de la prestation concernée, sauf en cas
                de faute grave ou de dol.
              </p>
            </motion.div>

            {/* Article 9 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 9 - Réclamations et litiges</h2>
              <p className="text-gray-400 leading-relaxed">
                Toute réclamation doit être adressée par écrit à BENSOW AUTO dans les meilleurs délais.
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                Conformément à l&apos;article L612-1 du Code de la consommation, le client peut recourir
                gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige.
              </p>
            </motion.div>

            {/* Article 10 */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">Article 10 - Droit applicable</h2>
              <p className="text-gray-400 leading-relaxed">
                Les présentes conditions générales sont soumises au droit français.
                Tout litige relatif à leur interprétation ou à leur exécution relève de la
                compétence des tribunaux français.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp}>
              <div className="bg-secondary-light border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
                <p className="text-gray-400">
                  Pour toute question concernant ces conditions générales, vous pouvez nous contacter :
                </p>
                <p className="text-gray-300 mt-4">
                  Email : contact.y@bensowauto.fr
                  <br />
                  Téléphone : +33 7 56 98 79 58
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

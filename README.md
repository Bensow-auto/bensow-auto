# Bensow Auto

Site vitrine pour **Bensow Auto**, entreprise spécialisée dans les services automobiles : dépôt-vente, expertise, commande personnalisée et import de véhicules.

## Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil avec hero, services, avantages |
| `/services` | Présentation des services (dépôt-vente, expertise, import) |
| `/expertise` | Page dédiée à l'expertise automobile |
| `/commande` | Commande personnalisée de véhicules |
| `/contact` | Formulaire de contact et coordonnées |
| `/temoignages` | Avis et témoignages clients |
| `/mentions-legales` | Mentions légales |
| `/conditions-generales` | Conditions générales d'utilisation |

## Structure du Projet

```
bensow/
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Accueil
│   ├── services/
│   ├── expertise/
│   ├── commande/
│   ├── contact/
│   ├── temoignages/
│   ├── mentions-legales/
│   └── conditions-generales/
├── components/
│   ├── layout/            # Navbar, Footer, WhatsAppButton
│   ├── ui/                # Button, Card, Input, Select, Textarea
│   └── sections/          # HeroSection, ServicesSection, etc.
├── public/
│   └── images/            # Images et logos
├── styles/                # Animations globales
├── lib/                   # Utilitaires (cn)
└── composables/           # Hooks personnalisés
```

## Installation

```bash
# Cloner le repo
git clone https://github.com/Alley-eddine/bensow-auto.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## Développement

```bash
# Serveur de développement
npm run dev

# Lint
npm run lint

# Build
npm run build
```

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche `main`.

---

Développé par Alleycom

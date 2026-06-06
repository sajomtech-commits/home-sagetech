# SageTech Home 🏠

Portail personnel centralisant tous les projets SageTech — YoFournisseur, Reviewer, Budget Familial, Veille Techno, Automatisations, Documentation et Roadmap.

## Stack

- **Astro** 5.x — framework static-site
- **Tailwind CSS** 4.x — styles utilitaires
- **TypeScript** — typage des données
- **Déploiement** : Coolify (static site nginx)

## Prérequis

- Node.js 20+ (LTS recommandée)
- npm 9+

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Ouvre http://localhost:4321. Les pages se mettent à jour automatiquement.

## Build

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `dist/`.

## Preview du build

```bash
npm run preview
```

## Déploiement sur Coolify

1. Dans Coolify, créer un nouveau service **Static Site**
2. Configurer le dépôt GitHub
3. Paramètres :

| Champ | Valeur |
|---|---|
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Start Command** | *(laisser vide)* |
| **Node Version** | 20 (LTS) |
| **Port** | *(non requis pour statique)* |

4. Définir le domaine : `home.sagetech.vip`
5. Le tunnel Cloudflare / DNS est géré manuellement

## Structure du projet

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AutomationCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProjectCard.astro
│   │   ├── RoadmapItem.astro
│   │   └── SectionTitle.astro
│   ├── data/
│   │   └── index.ts          ← Toutes les données (projets, docs, veille, roadmap)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro                   ← Accueil
│   │   ├── automatisations.astro
│   │   ├── veille-techno.astro
│   │   ├── documentation.astro
│   │   ├── roadmap.astro
│   │   └── projets/
│   │       ├── index.astro               ← Liste tous les projets
│   │       ├── yofournisseur.astro
│   │       ├── reviewer.astro
│   │       └── budget-familial.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Ajouter un nouveau projet

1. Ajouter l'entrée dans `src/data/index.ts` (tableau `projects`)
2. Créer une page dédiée dans `src/pages/projets/` (optionnel)
3. Mettre à jour le lien dans l'objet projet

## Personnalisation

- **Couleur principale** : modifier `indigo` dans `tailwind.config.js`
- **Données** : tout est centralisé dans `src/data/index.ts`
- **Menu** : modifier le tableau `links` dans `src/components/Header.astro`

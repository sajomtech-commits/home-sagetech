# SageTech Home 🏠

Portail personnel centralisant tous les projets SageTech. Construit avec Astro et Tailwind CSS.

## Stack

- **Astro** 5.x — framework static-site
- **Tailwind CSS** 3.x — styles utilitaires
- **TypeScript** — typage des données
- **Déploiement** : Coolify (static site nginx)
- **Domaine** : home.sagetech.vip
- **Protection** : Cloudflare Tunnel + Coolify HTTP Basic Auth

## Prérequis

- Node.js 20+ (LTS recommandée)
- npm 9+

## Lancement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# Ouvrir http://localhost:4321
```

## Build

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `dist/`.

## Déploiement sur Coolify

1. Dans Coolify, créer un nouveau service **Static Site**
2. Connecter le dépôt GitHub
3. Configurer :

| Champ | Valeur |
|---|---|
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Start Command** | *(laisser vide)* |
| **Node Version** | 20 (LTS) |
| **Port** | *(non requis pour statique)* |

4. Définir le domaine : `home.sagetech.vip`
5. Le DNS et le tunnel Cloudflare sont gérés manuellement

## Protection par identifiant / mot de passe

Le portail est protégé par HTTP Basic Authentication configurée dans Coolify :

1. Dans Coolify, ouvrir votre service statique
2. Aller dans l'onglet **Security** > **Authentication**
3. Activer l'authentification
4. Définir un identifiant et un mot de passe
5. Redéployer le service

> **Important :** Aucun mot de passe ou secret n'est stocké dans ce dépôt GitHub. La protection est gérée entièrement côté Coolify.

## Règles de sécurité

- Ne jamais commiter de clés API, tokens, mots de passe ou IP dans le code
- Les clés Supabase utilisées dans le frontend doivent être des clés **anon** (publiques), jamais la clé `service_role`
- Toutes les variables sensibles sont dans `.env` ou les **variables d'environnement Coolify**
- Le fichier `.env` est dans `.gitignore` — jamais commité
- Voir la page `/securite` pour l'état détaillé de chaque projet

## Configuration Supabase

Ce portail peut être connecté à Supabase via des variables d'environnement.

Créer un fichier `.env` à la racine :

```
PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
PUBLIC_SUPABASE_ANON_KEY=cle_anon_publique
```

> Utiliser uniquement la clé **anon** (publique). La clé `service_role` ne doit jamais être utilisée côté frontend.

### Tables utiles pour le portail

Table `apps` (optionnelle pour stocker les apps en base) :
- `id` (uuid, primary key)
- `name` (text)
- `slug` (text, unique)
- `description` (text)
- `github_pages_url` (text)
- `github_repo_url` (text)
- `status` (text: actif / a-securiser / archive)
- `technology` (text)
- `uses_supabase` (boolean)
- `created_at` (timestamp)

## Ajouter une nouvelle app

1. Ouvrir `src/data/apps.ts`
2. Ajouter une nouvelle entrée dans le tableau `apps` :

```typescript
{
  id: 'mon-projet',
  name: 'Mon Projet',
  slug: 'mon-projet',
  description: 'Description du projet.',
  githubPagesUrl: 'https://sajomtech-commits.github.io/mon-projet/',
  githubRepoUrl: 'https://github.com/sajomtech-commits/mon-projet',
  status: 'actif',
  technology: 'HTML / CSS / JS vanille',
  usesSupabase: false,
  supabaseTables: [],
  sensitivityLevel: 'faible',
  nextAction: 'Aucune urgence',
  migrationStatus: 'non-migre',
}
```

3. La page `/apps/mon-projet` est générée automatiquement
4. Optionnel : créer une page dédiée dans `src/pages/apps/`

## Migration d'une ancienne GitHub Page

1. Créer l'entrée dans `src/data/apps.ts` avec le statut actuel
2. La page détail explique le plan de migration
3. Pour migrer complètement le code :
   - Copier le HTML/CSS/JS dans une nouvelle page Astro
   - Mettre à jour les liens dans le portail
   - Changer le statut à `integre`
4. Ne pas casser l'ancienne GitHub Page avant validation

## Structure du projet

```
src/
├── components/
│   ├── AppCard.astro       # Carte application avec badges
│   ├── AutomationCard.astro
│   ├── Footer.astro
│   ├── Header.astro        # Menu dynamique depuis navigation.ts
│   ├── ProjectCard.astro
│   ├── RoadmapItem.astro
│   ├── SectionTitle.astro
│   ├── SecurityNotice.astro  # Alerte sécurité
│   └── SupabaseBadge.astro
├── data/
│   ├── apps.ts              # Données des applications (7 apps)
│   ├── index.ts             # Projets, veille, roadmap
│   └── navigation.ts         # Configuration du menu
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── apps/
│   │   ├── [slug].astro       # Pages détail dynamiques (7)
│   │   └── index.astro        # Grille des applications
│   ├── projets/
│   │   ├── budget-familial.astro
│   │   ├── index.astro
│   │   ├── reviewer.astro
│   │   └── yofournisseur.astro
│   ├── automatisations.astro
│   ├── documentation.astro
│   ├── index.astro
│   ├── roadmap.astro
│   ├── securite.astro
│   └── veille-techno.astro
└── styles/
    └── global.css
```

## Commandes utiles

```bash
npm run dev      # Développement local
npm run build    # Build statique
npm run preview  # Preview du build
```

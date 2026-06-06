export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'actif' | 'en-cours' | 'a-ameliorer' | 'idee';
  category: string;
  icon: string;
  url: string;
  tags: string[];
}

export interface Automation {
  id: string;
  title: string;
  description: string;
  status: 'actif' | 'en-cours' | 'idee';
  icon: string;
  platform: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  content: string;
}

export interface VeilleArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'yofournisseur',
    title: 'YoFournisseur',
    description: 'Catalogue fournisseurs Yupoo avec scraping automatique, 127 produits, mise à jour quotidienne.',
    status: 'actif',
    category: 'Outils',
    icon: '📦',
    url: '/projets/yofournisseur',
    tags: ['scraping', 'yupoo', 'catalogue', 'github-pages'],
  },
  {
    id: 'reviewer',
    title: 'Reviewer',
    description: 'Plateforme d\'avis et comparatifs produits — en cours de conception.',
    status: 'en-cours',
    category: 'Apps',
    icon: '⭐',
    url: '/projets/reviewer',
    tags: ['avis', 'comparatifs'],
  },
  {
    id: 'budget',
    title: 'Budget Familial',
    description: 'Dashboard budget mensuel avec comptes Bourso, charges fixes et visualisation des dépenses.',
    status: 'en-cours',
    category: 'Outils',
    icon: '💰',
    url: '/projets/budget-familial',
    tags: ['budget', 'dashboard', 'finances'],
  },
  {
    id: 'veille',
    title: 'Veille Techno',
    description: 'Newsletter quotidienne IA & GitHub avec curation automatique via cron Telegram.',
    status: 'actif',
    category: 'Veille',
    icon: '📡',
    url: '/veille-techno',
    tags: ['ia', 'github', 'newsletter', 'telegram'],
  },
  {
    id: 'n8n',
    title: 'Automatisations n8n',
    description: 'Workflows d\'automatisation connectant Gmail, Dropbox, NAS et services cloud.',
    status: 'actif',
    category: 'Automatisations',
    icon: '⚡',
    url: '/automatisations',
    tags: ['n8n', 'workflows', 'automation'],
  },
  {
    id: 'coolify',
    title: 'Coolify Lab',
    description: 'Laboratoire d\'expérimentation avec Coolify : déploiements, stacks, monitoring.',
    status: 'en-cours',
    category: 'Infra',
    icon: '🚢',
    url: '/documentation#coolify',
    tags: ['coolify', 'docker', 'deploiement'],
  },
  {
    id: 'immich',
    title: 'Immich / Photos',
    description: 'Gestion et sauvegarde de photos personnelles auto-hébergées avec Immich.',
    status: 'en-cours',
    category: 'Infra',
    icon: '🖼️',
    url: '/documentation#immich',
    tags: ['photos', 'self-hosted', 'backup'],
  },
  {
    id: 'outils',
    title: 'Outils Internes',
    description: 'Ensemble d\'outils et scripts maison pour le quotidien : scraping, analyse, monitoring.',
    status: 'en-cours',
    category: 'Outils',
    icon: '🔧',
    url: '/projets',
    tags: ['scripts', 'outils', 'monitoring'],
  },
  {
    id: 'idees',
    title: 'Idées & Futurs Projets',
    description: 'Pépinière d\'idées : SaaS, dashboards, outils. Tout ce qui germe et attend son tour.',
    status: 'idee',
    category: 'Idées',
    icon: '💡',
    url: '/roadmap',
    tags: ['idees', 'roadmap', 'sas'],
  },
];

export const automatons: Automation[] = [
  {
    id: 'n8n-scraping',
    title: 'Scraping automatique YoFournisseur',
    description: 'Workflow n8n qui scrappe les fournisseurs Yupoo et met à jour le catalogue.',
    status: 'actif',
    icon: '🕸️',
    platform: 'n8n',
  },
  {
    id: 'veille-cron',
    title: 'Veille techno quotidienne',
    description: 'Deux cron jobs Telegram : IA/Recherche à 7h30, Outils/GitHub à 8h30.',
    status: 'actif',
    icon: '🤖',
    platform: 'Hermes + Telegram',
  },
  {
    id: 'gmail-automation',
    title: 'Automatisation Gmail',
    description: 'Filtrage, tri et archivage automatique des emails par règles et labels.',
    status: 'idee',
    icon: '📧',
    platform: 'n8n / Google Apps Script',
  },
  {
    id: 'backup-nas',
    title: 'Sauvegardes NAS / Dropbox',
    description: 'Synchronisation automatique des données critiques entre NAS local et Dropbox.',
    status: 'en-cours',
    icon: '💾',
    platform: 'n8n + rsync',
  },
  {
    id: 'backup-coolify',
    title: 'Sauvegarde Coolify',
    description: 'Backup automatisé des configurations et volumes Docker vers le NAS.',
    status: 'idee',
    icon: '🗄️',
    platform: 'n8n',
  },
  {
    id: 'trading-report',
    title: 'Rapport trading automatique',
    description: 'Génération quotidienne des métriques et phases de trading XAUUSD.',
    status: 'idee',
    icon: '📊',
    platform: 'Python + MT5',
  },
];

export const docSections: DocSection[] = [
  {
    id: 'coolify',
    title: 'Coolify',
    description: 'Déploiement, configuration et gestion des services.',
    icon: '🚢',
    content: `### Coolify — Notes

**Installation :**
- Docker-based, une commande suffit
- Nécessite un domaine pointé vers le serveur

**Sites statiques :**
- Build command: \`npm run build\`
- Output directory: \`dist\`
- Pas de Start command nécessaire

**Bonnes pratiques :**
- Mettre à jour régulièrement
- Surveiller les logs
- Utiliser les variables d'environnement pour les secrets`,
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Conteneurisation, images, Docker Compose.',
    icon: '🐳',
    content: `### Docker — Notes

**Commandes utiles :**
- \`docker ps\` — lister les conteneurs actifs
- \`docker compose up -d\` — lancer une stack
- \`docker logs -f <container>\` — suivre les logs

**Réseaux :**
- Traefik / Caddy comme reverse proxy
- Réseau partagé entre conteneurs`,
  },
  {
    id: 'ubuntu',
    title: 'Ubuntu',
    description: 'Configuration et maintenance du serveur Dell sous Ubuntu.',
    icon: '🐧',
    content: `### Ubuntu Serveur — Notes

**Serveur Dell :**
- OS : Ubuntu Server LTS
- Services : Docker, Coolify, n8n

**Maintenance :**
- \`sudo apt update && sudo apt upgrade\`
- Surveiller l'espace disque avec \`df -h\`
- Logs : \`journalctl -xe\``,
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare Tunnel',
    description: 'Tunnel DNS et proxy sécurisé pour les services exposés.',
    icon: '☁️',
    content: `### Cloudflare Tunnel — Notes

**Principe :**
- Tunnel sortant uniquement (pas de port ouvert)
- cloudflared installé côté serveur
- DNS géré chez Cloudflare

**Commandes :**
- \`cloudflared tunnel list\`
- \`cloudflared tunnel route dns <tunnel> <domaine>\``,
  },
  {
    id: 'immich',
    title: 'Immich',
    description: 'Gestion de photos auto-hébergée, alternative à Google Photos.',
    icon: '🖼️',
    content: `### Immich — Notes

**Déploiement :**
- Stack Docker complète (server, microservices, machine-learning, redis, postgres)
- Nginx reverse proxy pour l'accès externe

**Fonctionnalités :**
- Upload automatique depuis smartphone
- Reconnaissance faciale
- Albums partagés`,
  },
  {
    id: 'n8n-docs',
    title: 'n8n',
    description: 'Workflows et automatisations low-code.',
    icon: '⚡',
    content: `### n8n — Notes

**Usage :**
- Automatisations entre services (Gmail, Dropbox, Slack, etc.)
- Webhooks et triggers
- Intégration avec Hermes via webhooks

**Bonnes pratiques :**
- Nommer clairement les workflows
- Utiliser les sous-workflows pour la réutilisabilité`,
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Gestion de code, repos, workflow GitHub Pages.',
    icon: '🐙',
    content: `### GitHub — Notes

**Comptes :**
- Utilisateur : sajomtech-commits

**Sites GitHub Pages :**
- YoFournisseur : \`sajomtech-commits.github.io/YoFournisseur/\`
- Budget familial : \`sajomtech-commits.github.io/budget-familial/\``,
  },
  {
    id: 'opencode',
    title: 'OpenCode',
    description: 'Client OpenAI en CLI, utilisé comme provider Hermes.',
    icon: '💻',
    content: `### OpenCode — Notes

**Usage :**
- Provider LLM pour Hermes Agent
- CLI Go pour interagir avec l'API OpenAI

**Config :**
- Clé API dans \`.env\` (jamais dans le code)
- Modèles : GPT-4o, Claude via API`,
  },
];

export const veilleArticles: VeilleArticle[] = [
  {
    id: 'v1',
    title: 'Llama 4 : Meta dévoile son nouveau modèle multimodal',
    category: 'IA',
    date: '2025-06-05',
    excerpt: 'Meta a publié Llama 4, un modèle multimodal open-weight avec des performances comparables à GPT-4o...',
    tags: ['llama', 'meta', 'multimodal'],
  },
  {
    id: 'v2',
    title: 'Coolify 4.0 : Nouveautés et migration',
    category: 'Coolify',
    date: '2025-06-04',
    excerpt: 'Coolify 4.0 apporte un nouveau système de templates, une meilleure gestion des ressources...',
    tags: ['coolify', 'deploiement', 'devops'],
  },
  {
    id: 'v3',
    title: 'Docker Compose v3 : Fin du support legacy',
    category: 'Docker',
    date: '2025-06-03',
    excerpt: 'Docker annonce la fin du support pour les fichiers Compose au format v2. Migration recommandée...',
    tags: ['docker', 'compose', 'migration'],
  },
  {
    id: 'v4',
    title: 'Microsoft 365 Copilot : Les nouvelles fonctions agentic',
    category: 'Microsoft 365',
    date: '2025-06-02',
    excerpt: 'Microsoft déploie des agents autonomes dans Copilot pour automatiser des tâches complexes...',
    tags: ['microsoft', 'copilot', 'agents'],
  },
  {
    id: 'v5',
    title: 'n8n 1.80 : Connecteurs et performance améliorés',
    category: 'n8n',
    date: '2025-06-01',
    excerpt: 'La nouvelle version de n8n introduit des connecteurs pour plus de services et une optimisation...',
    tags: ['n8n', 'automation', 'workflows'],
  },
  {
    id: 'v6',
    title: 'Linux 6.17 : Nouveau scheduler et meilleur support matériel',
    category: 'Linux',
    date: '2025-05-30',
    excerpt: 'Le noyau Linux 6.17 apporte des améliorations significatives pour les performances...',
    tags: ['linux', 'noyau', 'performance'],
  },
  {
    id: 'v7',
    title: 'Cloudflare : Nouveaux tunnels et Zero Trust simplifié',
    category: 'Cybersécurité',
    date: '2025-05-28',
    excerpt: 'Cloudflare simplifie la configuration des tunnels avec une nouvelle interface et des fonctionnalités...',
    tags: ['cloudflare', 'tunnel', 'zero-trust'],
  },
  {
    id: 'v8',
    title: 'Hermes Agent : Nouvelles fonctionnalités de skills',
    category: 'IA',
    date: '2025-05-25',
    excerpt: 'Hermes Agent introduit un nouveau système de skills versionné et des améliorations...',
    tags: ['hermes', 'agent', 'skills'],
  },
];

export const roadmapItems = [
  { id: 'r1', title: 'Dashboard YoFournisseur V2', status: 'todo', description: 'Refonte complète du catalogue avec filtres et recherche avancée.' },
  { id: 'r2', title: 'Plateforme Reviewer', status: 'doing', description: 'Conception et développement de la plateforme d\'avis produits.' },
  { id: 'r3', title: 'Budget familial V2', status: 'todo', description: 'Ajout des graphiques, prévisions et catégories personnalisées.' },
  { id: 'r4', title: 'Sauvegarde NAS automatisée', status: 'doing', description: 'Mise en place des workflows n8n pour backup régulier.' },
  { id: 'r5', title: 'Portail SageTech Home', status: 'doing', description: 'Ce portail — hub central de tous les projets.' },
  { id: 'r6', title: 'SaaS Analytics', status: 'idea', description: 'Plateforme d\'analyse de données simplifiée pour usage perso.' },
  { id: 'r7', title: 'Documentation automatique', status: 'idea', description: 'Génération automatique de docs via Hermes pour chaque projet.' },
  { id: 'r8', title: 'Assistant vocal domotique', status: 'idea', description: 'Intégration maison avec commandes vocales pour la maison connectée.' },
  { id: 'r9', title: 'YoFournisseur V1', status: 'done', description: 'Mise en ligne du catalogue avec scraping et mise à jour automatique.' },
  { id: 'r10', title: 'Veille techno Telegram', status: 'done', description: 'Cron jobs Telegram pour la veille IA et GitHub en français.' },
];

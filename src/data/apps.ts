export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  githubPagesUrl: string;
  githubRepoUrl: string;
  status: 'actif' | 'a-securiser' | 'a-migrer' | 'archive';
  technology: string;
  usesSupabase: boolean;
  supabaseTables: string[];
  sensitivityLevel: 'faible' | 'moyen' | 'critique';
  nextAction: string;
  migrationStatus: 'non-migre' | 'en-cours' | 'integre' | 'archive';
}

export const apps: App[] = [
  { id: 'budget-familial', name: 'Budget Familial', slug: 'budget-familial', description: 'Dashboard budget mensuel avec comptes Bourso.', githubPagesUrl: 'https://sajomtech-commits.github.io/budget-familial/', githubRepoUrl: 'https://github.com/sajomtech-commits/budget-familial', status: 'a-securiser', technology: 'HTML/CSS/JS vanille', usesSupabase: true, supabaseTables: ['depenses', 'budgets'], sensitivityLevel: 'critique', nextAction: 'Remplacer cle service_role par anon + RLS', migrationStatus: 'non-migre' },
  { id: 'yofournisseur', name: 'YoFournisseur', slug: 'yofournisseur', description: 'Catalogue fournisseurs Yupoo avec scraping automatique.', githubPagesUrl: 'https://sajomtech-commits.github.io/YoFournisseur/', githubRepoUrl: 'https://github.com/sajomtech-commits/YoFournisseur', status: 'actif', technology: 'HTML/CSS/JS vanille', usesSupabase: false, supabaseTables: [], sensitivityLevel: 'faible', nextAction: 'Aucune urgence', migrationStatus: 'non-migre' },
  { id: 'veillesage', name: 'VeilleSage', slug: 'veillesage', description: 'Scripts Python de veille technologique automatisee.', githubPagesUrl: 'https://sajomtech-commits.github.io/VeilleSage/', githubRepoUrl: 'https://github.com/sajomtech-commits/VeilleSage', status: 'a-securiser', technology: 'Python + HTML', usesSupabase: false, supabaseTables: [], sensitivityLevel: 'critique', nextAction: 'Revoquer le PAT GitHub expose dans le code', migrationStatus: 'non-migre' },
  { id: 'vinted2', name: 'Vinted2', slug: 'vinted2', description: 'Analyse et suivi des prix Vinted.', githubPagesUrl: 'https://sajomtech-commits.github.io/vinted2/', githubRepoUrl: 'https://github.com/sajomtech-commits/vinted2', status: 'actif', technology: 'HTML/CSS/JS vanille', usesSupabase: true, supabaseTables: ['annonces', 'prix'], sensitivityLevel: 'faible', nextAction: 'Aucune urgence (anon + RLS OK)', migrationStatus: 'non-migre' },
  { id: 'product-viewer', name: 'Product Viewer', slug: 'product-viewer', description: 'Visualiseur de produits avec catalogue dynamique.', githubPagesUrl: 'https://sajomtech-commits.github.io/product-viewer/', githubRepoUrl: 'https://github.com/sajomtech-commits/product-viewer', status: 'a-securiser', technology: 'HTML/CSS/JS vanille', usesSupabase: true, supabaseTables: ['produits'], sensitivityLevel: 'critique', nextAction: 'Remplacer cle service_role par anon + RLS', migrationStatus: 'non-migre' },
  { id: 'budget', name: 'Budget (ancien)', slug: 'budget', description: 'Premiere version dashboard budget.', githubPagesUrl: 'https://sajomtech-commits.github.io/budget/', githubRepoUrl: 'https://github.com/sajomtech-commits/budget', status: 'archive', technology: 'HTML/CSS/JS vanille', usesSupabase: true, supabaseTables: ['depenses'], sensitivityLevel: 'critique', nextAction: 'Archiver apres confirmation remplacement', migrationStatus: 'archive' },
  { id: 'sajomtech-commits', name: 'Profil GitHub', slug: 'sajomtech-commits', description: 'Page de profil GitHub personnelle.', githubPagesUrl: 'https://sajomtech-commits.github.io/sajomtech-commits/', githubRepoUrl: 'https://github.com/sajomtech-commits/sajomtech-commits', status: 'a-securiser', technology: 'HTML/CSS/JS vanille', usesSupabase: false, supabaseTables: [], sensitivityLevel: 'critique', nextAction: 'Nettoyer les secrets commités dans l historique', migrationStatus: 'non-migre' },
];

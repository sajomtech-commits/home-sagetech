export interface NavLink { label: string; href: string; icon: string; }
export const navigation: NavLink[] = [
  { label: 'Accueil', href: '/', icon: '🏠' },
  { label: 'Projets', href: '/projets', icon: '📁' },
  { label: 'Apps', href: '/apps', icon: '📱' },
  { label: 'Veille', href: '/veille-techno', icon: '📡' },
  { label: 'Auto', href: '/automatisations', icon: '⚡' },
  { label: 'Doc', href: '/documentation', icon: '📚' },
  { label: 'Sécurité', href: '/securite', icon: '🔒' },
  { label: 'Roadmap', href: '/roadmap', icon: '🗺️' },
];
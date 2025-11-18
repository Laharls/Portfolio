# 🚀 Portfolio Personnel - Anthony Urbanski

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> Portfolio moderne et responsive développé avec Next.js 15, React 19, TypeScript et Tailwind CSS. Conçu pour mettre en valeur mes compétences en développement et mes projets personnels.

## ✨ Aperçu

Ce portfolio a été conçu pour présenter mes compétences et expériences de manière professionnelle et interactive. Il met en avant :

- 🎓 Mon parcours académique et professionnel
- 💼 Mes expériences en développement web
- 🛠️ Mes compétences techniques avec système de niveaux
- 🚀 Mes projets personnels avec liens GitHub et démos
- ⭐ Recommandations professionnelles LinkedIn
- 📧 Formulaire de contact fonctionnel

**🔗 Démo en ligne :** [anthonyurbanski.dev](http://localhost:3000) (à mettre à jour, car pointe sur localhost)

## 🎯 Fonctionnalités

### Pages principales

- **🏠 Accueil** : Présentation personnelle avec appel à l'action
- **💼 Projets** : Galerie de mes projets 
- **📚 Expérience** : Timeline détaillée des expériences professionnelles
- **📧 Contact** : Formulaire de contact avec intégration Formspree

### Fonctionnalités techniques

- ✅ **Design responsive** : Optimisé pour mobile, tablette et desktop
- ✅ **Architecture modulaire** : Composants réutilisables et maintenables
- ✅ **TypeScript strict** : Typage complet pour une meilleure fiabilité
- ✅ **SEO optimisé** : Métadonnées et structure sémantique
- ✅ **Animations fluides** : Transitions et effets visuels subtils

## 🛠️ Technologies utilisées

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React avec App Router
- **[React 19](https://react.dev/)** - Bibliothèque UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Typage statique
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework CSS utility-first

### Outils & Services

- **[Lucide React](https://lucide.dev/)** - Icônes modernes
- **[Formspree](https://formspree.io/)** - Gestion des formulaires de contact
- **[Vercel](https://vercel.com/)** - Plateforme de déploiement

### Développement

- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[PostCSS](https://postcss.org/)** - Transformation CSS
- **[Git](https://git-scm.com/)** - Contrôle de version

## 📦 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 20.x ou supérieure) - [Télécharger](https://nodejs.org/)
- **npm** ou **yarn** ou **pnpm**
- **Git** - [Télécharger](https://git-scm.com/)

### Cloner le repository

```bash
# Cloner le projet
git clone https://github.com/Laharls/portfolio.git

# Se déplacer dans le dossier
cd portfolio
```

### Installer les dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install

# Ou avec pnpm
pnpm install
```

## 🚀 Démarrage rapide

### Mode développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
# Créer le build optimisé
npm run build

# Lancer le serveur de production
npm start
```

### Linter

```bash
# Vérifier le code
npm run lint

# Corriger automatiquement
npm run lint --fix
```

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec l'id Formspree:

```env
# NEXT_PUBLIC_FORMSPREE_ID= Remplacez ici
```

### Métadonnées SEO

Modifiez les métadonnées dans `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'Votre Nom - Développeur Full Stack',
  description: 'Votre description',
  // ...
};
```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `lib/constants.ts` :

```typescript
export const PERSONAL_INFO = {
  name: 'Votre Nom',
  title: 'Votre Titre',
  email: 'votre@email.com',
  location: 'Votre Ville, Pays',
  // ...
};
```

### 2. Compétences

Ajoutez ou modifiez vos compétences dans `lib/constants.ts` :

```typescript
export const SKILLS: Skill[] = [
  { 
    name: 'JavaScript', 
    category: 'frontend', 
    level: 'Avancé' 
  },
  // ...
];
```

**Niveaux disponibles :** `Débutant`, `Intermédiaire`, `Avancé`, `Expert`

**Catégories disponibles :** `frontend`, `backend`, `languages`, `tools`, `database`, `environnement`

### 3. Projets

Ajoutez vos projets dans `lib/constants.ts` :

```typescript
export const PROJECTS: Project[] = [
  {
    id: 'projet-unique',
    title: 'Nom du Projet',
    description: 'Description courte',
    longDescription: 'Description détaillée',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo.com',
    featured: true, // Afficher sur la page d'accueil
    metrics: [
      { label: 'Métrique', value: 'Valeur' }
    ],
  },
];
```

### 4. Expériences

Ajoutez vos expériences dans `lib/constants.ts` :

```typescript
export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-unique',
    company: 'Nom de l\'entreprise',
    position: 'Votre Poste',
    type: 'internship', // volunteer, freelance, parttime, fulltime
    startDate: '2023-01',
    endDate: '2023-12', // ou 'present'
    description: 'Description du poste',
    achievements: [
      'Réalisation 1',
      'Réalisation 2',
    ],
    technologies: ['Tech1', 'Tech2'],
  },
];
```

### 5. Recommandations

Ajoutez vos recommandations LinkedIn dans `lib/constants.ts` :

```typescript
export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    author: 'Nom Prénom',
    position: 'Poste',
    company: 'Entreprise',
    relationship: 'Maître de stage',
    date: '2023-05',
    text: 'Texte de la recommandation',
    linkedinUrl: 'https://linkedin.com/in/votre-profil',
  },
];
```

### 6. Couleurs et thème

Modifiez les couleurs dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ...
    600: '#0284c7', // Couleur principale
    // ...
  },
}
```

## 📧 Formulaire de contact

Le formulaire de contact utilise [Formspree](https://formspree.io/) pour gérer les soumissions.

### Configuration Formspree

1. **Créer un compte** sur [formspree.io](https://formspree.io)
2. **Créer un nouveau formulaire**
3. **Copier votre Form ID** (ex: `xwpeprzz`)
4. **Configurer dans le code** :

### Test du formulaire

1. Démarrez le serveur de développement
2. Allez sur `/contact`
3. Remplissez et envoyez le formulaire
4. Vérifiez votre email

**Limite gratuite :** 50 soumissions/mois

## 📝 License

Ce projet est sous licence MIT.

---

## 💡 Améliorations futures

- [ ] Mode sombre / clair
- [ ] Blog intégré avec MDX
- [ ] Système de commentaires
- [ ] Animations avancées avec Framer Motion
- [ ] Internationalisation (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Tests unitaires
- [ ] Analytics avancées


<div align="center">

**⭐ Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile !**

Made with ❤️ by [Anthony Urbanski](https://github.com/Laharls)

</div>
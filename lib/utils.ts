import { type ClassValue, clsx } from 'clsx';

/**
 * Fonction utilitaire pour merge les classes Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formate la date en français
 */
export function formatDate(date: string | 'present'): string {
  if (date === 'present') return 'Aujourd\'hui';
  
  const [year, month] = date.split('-');
  const months = [
    'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin',
    'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'
  ];
  
  return `${months[parseInt(month) - 1]} ${year}`;
}


export function calculateDuration(startDate: string, endDate: string | 'present'): string {
  const [startYear, startMonth] = startDate.split('-').map(Number);

  let endYear: number;
  let endMonth: number;

  if (endDate === 'present') {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    [endYear, endMonth] = endDate.split('-').map(Number);
  }

  // Différence brute
  let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (totalMonths < 12) {
    totalMonths += 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) return `${months} mois`;
  if (months === 0) return `${years} an${years > 1 ? 's' : ''}`;

  return `${years} an${years > 1 ? 's' : ''} ${months} mois`;
}

/**
 * Slugify chaîne de caractère pour URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Groupe items par catégorie
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const group = String(item[key]);
    if (!result[group]) {
      result[group] = [];
    }
    result[group].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

/**
 * Tronque texte à la longueur spécifié
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section à propos */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {PERSONAL_INFO.title} passionné par le développement web et les systèmes bas niveau.
            </p>
            <p className="text-primary-600 text-sm font-medium">
              {PERSONAL_INFO.availability}
            </p>
          </div>

          {/* Lien Rapide */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lien Social */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Me suivre
            </h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.find(l => l.name === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>
              © {currentYear} {PERSONAL_INFO.name}. Tous droits réservés.
            </p>
            <p className="mt-2 md:mt-0">
              Développé avec <span className="text-red-500">❤</span> en Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

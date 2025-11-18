// components/sections/HomeSections.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Download, Code2, Database, Wrench, Terminal, ExternalLink, Laptop, Server } from 'lucide-react';
import { Button, Card, Badge, Section, SectionTitle, ProgressBar } from '@/components/ui';
import { PERSONAL_INFO, SOCIAL_LINKS, SKILLS, PROJECTS, EXPERIENCES, RECOMMENDATIONS } from '@/lib/constants';
import { groupBy, formatDate, calculateDuration } from '@/lib/utils';

// ============ Hero Section ============
export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 -z-10" />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            {PERSONAL_INFO.availability}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Salut, je suis{' '}
            <span className="gradient-text">
              {PERSONAL_INFO.name.split(' ')[0]}
            </span>
            <span className="inline-block animate-wave">👋</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            {PERSONAL_INFO.title}
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {PERSONAL_INFO.subtitle}
          </p>

          <p className="text-base text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Étudiant en <span className="font-semibold">{"Bachelor SIN à l'EPSI"}</span>, 
            avec <span className="font-semibold">{"2 ans d'expérience"}</span> en développement web full stack. 
            Du web moderne <span className="text-primary-600 font-medium">(React/Next.js)</span> aux 
            systèmes bas niveau <span className="text-primary-600 font-medium">(Rust)</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/projects">
              <Button variant="primary" size="lg" className="group">
                Voir mes projets
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Me contacter
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-gray-600">Me suivre :</span>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-600 hover:text-primary-600 bg-white hover:bg-primary-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-all"
                  aria-label={social.name}
                >
                  {social.icon === 'Github' && <Github size={20} />}
                  {social.icon === 'Linkedin' && <Linkedin size={20} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

// ============ Skills Section ============
export function SkillsSection() {
  const skillsByCategory = groupBy(SKILLS, 'category');

  const categoryIcons = {
    frontend: <Code2 size={24} />,
    backend: <Server size={24} />,
    tools: <Wrench size={24} />,
    languages: <Terminal size={24} />,
    database: <Database size={24} />,
    environnement: <Laptop size={24} />,
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Outils & Technologies',
    languages: 'Langages',
    database: 'Base de données',
    environnement: 'OS',
  };

  const levelColors = {
    'Débutant': 'bg-gray-100 text-gray-700 border-gray-300',
    'Intermédiaire': 'bg-blue-100 text-blue-700 border-blue-300',
    'Avancé': 'bg-green-100 text-green-700 border-green-300',
    'Expert': 'bg-purple-100 text-purple-700 border-purple-300',
  };

  return (
    <Section id="skills" className="bg-gray-50">
      <SectionTitle
        title="Compétences Techniques"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <Card key={category} className="p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                {categoryIcons[category as keyof typeof categoryIcons]}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
            </div>

            <div className="space-y-2.5">
              {skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-800 font-medium text-base">{skill.name}</span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${levelColors[skill.level]}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ============ Featured Projects Section ============
export function FeaturedProjectsSection() {
  const featuredProjects = PROJECTS.filter(p => p.featured);

  return (
    <Section id="projects">
      <SectionTitle
        title="Projets Phares"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <Card key={project.id} className="p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4 flex-1">
              {project.description}
            </p>

            {project.metrics && (
              <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-200">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Github size={18} />
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <ExternalLink size={18} />
                  Démo live
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            Voir tous les projets
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

// ============ Experience Timeline Section ============
export function ExperienceSection() {
  const experienceTypes = {
    volunteer: 'Bénévolat',
    freelance: 'Freelance',
    internship: 'Stage',
    fulltime: 'CDI',
    parttime: 'CDD',
  };

  return (
    <Section id="experience" className="bg-gray-50">
      <SectionTitle
        title="Expériences Professionnelles"
        centered
      />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <Card key={exp.id} className="p-6 relative">
              {index !== EXPERIENCES.length - 1 && (
                <div className="absolute left-6 top-full h-8 w-0.5 bg-gray-200" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="default">
                      {experienceTypes[exp.type]}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)} · {calculateDuration(exp.startDate, exp.endDate)}
                  </p>

                  <p className="text-gray-700 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link href="/experience">
          <Button variant="outline" size="lg">
            Voir plus de détails
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

// ============ Recommendations Section ============
export function RecommendationsSection() {
  return (
    <Section id="recommendations">
      <SectionTitle
        title="Recommandations"
        centered
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RECOMMENDATIONS.map((rec) => (
            <Card key={rec.id} className="p-6 flex flex-col">
              {/* Quote icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Texte de la recommandation */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                {rec.text}
              </blockquote>

              {/* Informations sur l'auteur */}
              <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                {/* Avatar (optionnel) */}
                {rec.avatar ? (
                  <img 
                    src={rec.avatar} 
                    alt={rec.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold text-lg">
                      {rec.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <div className="font-bold text-gray-900">{rec.author}</div>
                  <div className="text-sm text-gray-600">{rec.position}</div>
                  <div className="text-sm text-primary-600">{rec.company}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {rec.relationship} · {formatDate(rec.date)}
                  </div>
                </div>

                {/* Lien LinkedIn */}
                {rec.linkedinUrl && (
                  <a
                    href={rec.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors flex-shrink-0"
                    aria-label="Voir sur LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}


// ============ CTA Section ============
export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-primary-600 to-blue-700 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vous avez un projet en tête ?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-100">
          {"Je suis actuellement à la recherche d'une alternance de 12 mois. Discutons de la façon dont je peux contribuer à vos projets !"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              Me contacter
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn bg-primary-700 text-white hover:bg-primary-800 border-2 border-white/20 px-6 py-3 rounded-lg text-lg font-medium"
          >
            Envoyer un email
          </a>
        </div>
      </div>
    </Section>
  );
}

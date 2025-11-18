import { Metadata } from 'next';
import { Github, ExternalLink } from 'lucide-react';
import { Section, SectionTitle, Card, Badge } from '@/components/ui';
import { PROJECTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projets',
  description: 'Portfolio de mes projets de développement web et logiciel',
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-blue-50 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h1>
          <p className="text-xl text-gray-600">
            Une collection de mes projets personnels et professionnels, 
            du développement web aux systèmes bas niveau.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="p-6 flex flex-col h-full">
              {project.featured && (
                <Badge variant="primary" className="mb-3 w-fit">
                  ⭐ Featured
                </Badge>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 flex-1">
                {project.longDescription || project.description}
              </p>

              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <Github size={18} />
                    Code
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
                    Démo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

import { Metadata } from 'next';
import { Section, SectionTitle, Card, Badge } from '@/components/ui';
import { EXPERIENCES, EDUCATION } from '@/lib/constants';
import { formatDate, calculateDuration } from '@/lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expérience',
  description: 'Mon parcours professionnel et académique',
};

export default function ExperiencePage() {
  const experienceTypes = {
    volunteer: 'Bénévolat',
    freelance: 'Freelance',
    internship: 'Stage',
    fulltime: 'CDI',
    parttime: 'CDD',
  };

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-blue-50 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mon Parcours
          </h1>
          <p className="text-xl text-gray-600">
            {"2 ans d'expérience en développement web full stack, du freelance au bénévolat, en passant par des stages enrichissants."}
          </p>
        </div>
      </Section>

      {/* Experience pro */}
      <Section>
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Expérience Professionnelle
          </h2>
        </div>

        <div className="max-w-4xl">
          <div className="relative">
            {/* Ligne Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative md:pl-12">
                  {/* Timeline point */}
                  {/* <div className="absolute left-0 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white hidden md:block" /> */}

                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-primary-600 font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)} · {calculateDuration(exp.startDate, exp.endDate)}
                          {exp.location && ` · ${exp.location}`}
                        </p>
                      </div>
                      <Badge variant="primary">
                        {experienceTypes[exp.type]}
                      </Badge>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Réalisations clés :
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technologies utilisées :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Formation */}
      <Section className="bg-gray-50">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
            <GraduationCap size={28} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Formation
          </h2>
        </div>

        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-start justify-between mb-3">
                <Badge variant={edu.status === 'En cours' ? 'primary' : 'default'}>
                  {edu.status}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {edu.degree}
              </h3>

              <p className="text-lg text-primary-600 font-medium mb-2">
                {edu.school}
              </p>

              <p className="text-sm text-gray-600 mb-3">
                {edu.period}
              </p>

              {edu.specialization && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700">
                    Spécialisation : <span className="text-primary-600">{edu.specialization}</span>
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Section, Input, Textarea, Button, Card } from '@/components/ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-blue-50 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-moi
          </h1>
          <p className="text-xl text-gray-600">
            {"Une question ? Un projet ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !"}
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Info Contact */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h3>

              <div className="space-y-4">

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <Mail className="text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-lg">
                  <MapPin className="text-primary-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Localisation</p>
                    <p className="text-sm text-gray-600">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Réseaux sociaux
              </h3>

              <div className="space-y-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    {social.icon === 'Github' && (
                      <Github className="text-primary-600 group-hover:scale-110 transition-transform" size={20} />
                    )}
                    {social.icon === 'Linkedin' && (
                      <Linkedin className="text-primary-600 group-hover:scale-110 transition-transform" size={20} />
                    )}
                    <span className="font-medium text-gray-900">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💡 Disponibilité
              </h3>
              <p className="text-sm text-gray-700">{PERSONAL_INFO.availability}</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Envoyez-moi un message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    ✓ Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">
                    ✗ Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nom complet"
                    name="name"
                    type="text"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jean.dupont@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  label="Sujet"
                  name="subject"
                  type="text"
                  placeholder="Proposition d'alternance"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-6 text-sm text-gray-600">
                Vous pouvez aussi me contacter directement par email à{' '}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-primary-600 hover:underline font-medium"
                >
                  {PERSONAL_INFO.email}
                </a>
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

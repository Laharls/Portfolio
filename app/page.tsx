import {
  HeroSection,
  SkillsSection,
  FeaturedProjectsSection,
  ExperienceSection,
  RecommendationsSection,
  CTASection,
} from '@/components/sections/HomeSections';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <RecommendationsSection />
      <CTASection />
    </>
  );
}

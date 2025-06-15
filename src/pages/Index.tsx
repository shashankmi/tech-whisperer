
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { ContributionsSection } from '../components/ContributionsSection';
import { SkillsSection } from '../components/SkillsSection';
import { AchievementsSection } from '../components/AchievementsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <HeroSection />
      <ExperienceTimeline />
      <ContributionsSection />
      <SkillsSection />
      <AchievementsSection />
    </div>
  );
};

export default Index;

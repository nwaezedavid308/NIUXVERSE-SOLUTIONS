import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowSection } from './components/ShowSection';
import { AcademyTracks } from './components/AcademyTracks';
import { ImpactTalksSection } from './components/ImpactTalksSection';
import { FounderSection } from './components/FounderSection';
import { Footer } from './components/Footer';
import { FellowshipModal } from './components/FellowshipModal';
import { AcademyCourse, ImpactSession } from './types';

export default function App() {
  const [fellowshipModalOpen, setFellowshipModalOpen] = useState(false);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState<AcademyCourse | null>(null);

  const handleEnrollCourse = (course: AcademyCourse) => {
    setSelectedCourseForEnrollment(course);
    setFellowshipModalOpen(true);
  };

  const handleRsvpSession = (_session: ImpactSession) => {
    setSelectedCourseForEnrollment(null);
    setFellowshipModalOpen(true);
  };

  const handleOpenRsvpGeneral = () => {
    setSelectedCourseForEnrollment(null);
    setFellowshipModalOpen(true);
  };

  const handleExploreShow = () => {
    const el = document.getElementById('the-show');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8fd] text-slate-900 dark:bg-[#02102e] dark:text-neutral-100 selection:bg-[#01CF11] selection:text-[#02102e] relative font-sans transition-colors duration-300">
      {/* Navigation */}
      <Navbar onOpenRsvp={handleOpenRsvpGeneral} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExploreShow={handleExploreShow}
          onOpenCommunity={handleOpenRsvpGeneral}
        />

        <ShowSection />

        <AcademyTracks onEnroll={handleEnrollCourse} />

        <ImpactTalksSection onRsvpSession={handleRsvpSession} />

        <FounderSection onOpenRsvp={handleOpenRsvpGeneral} />
      </main>

      {/* Footer */}
      <Footer onOpenRsvp={handleOpenRsvpGeneral} />

      {/* Fellowship Modal */}
      <FellowshipModal
        isOpen={fellowshipModalOpen}
        onClose={() => setFellowshipModalOpen(false)}
        defaultCourse={selectedCourseForEnrollment}
      />
    </div>
  );
}

import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import HeroBanner from './HeroBanner';
import SectionCards from './SectionCards';
import Projects from './Projects';
import ExecutiveNote from './ExecutiveNote';
import Footer from './Footer';
import WelcomeToBICTDA from './WelcomeToBICTDA';
import Stats from './Stats';
import Contact from './Contact';
import PartnershipsAndCollaborationSlideshow from './PartnershipsAndCollaborationSlideshow';
import ServicePortalsSection from './ServicePortalsSection';
import LatestNewsSection from './LatestNewsSection';
import UpcomingEventsSection from './UpcomingEventsSection';
import DownloadRoadmapSection from './DownloadRoadmapSection';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <ExecutiveNote />
        <WelcomeToBICTDA />
        <Stats />
        <Projects />
        <SectionCards />
        <ServicePortalsSection />
        <LatestNewsSection />
        <UpcomingEventsSection />
        <PartnershipsAndCollaborationSlideshow />
        <DownloadRoadmapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
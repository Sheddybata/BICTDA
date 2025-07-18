import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import HeroBanner from './HeroBanner';
import SectionCards from './SectionCards';
import Projects from './Projects';
import NewsFeed from './NewsFeed';
import EventFeed from './EventFeed';
import ExecutiveNote from './ExecutiveNote';
import Footer from './Footer';
import WelcomeToBICTDA from './WelcomeToBICTDA';
import Stats from './Stats';
import Contact from './Contact';
import PartnershipsAndCollaborationSlideshow from './PartnershipsAndCollaborationSlideshow';

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
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <NewsFeed />
              <EventFeed />
            </div>
          </div>
        </div>
        <PartnershipsAndCollaborationSlideshow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
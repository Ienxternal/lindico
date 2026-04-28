import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutIntro } from './components/AboutIntro';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Automation } from './components/Automation';
import { Contact } from './components/Contact';
import { AboutPage } from './components/AboutPage';
import { DeveloperPage } from './components/DeveloperPage';
import { Footer } from './components/Footer';
import { ScrollToTopTab } from './components/ScrollToTopTab';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PortalInfoPage } from './components/PortalInfoPage';
import { findServiceBySlug } from './content/services';

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setPathname(window.location.pathname);

      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleNavigation);
    handleNavigation();

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const isAboutPage = pathname === '/about';
  const isDeveloperPage = pathname === '/developer';
  const isPortalInfoPage = pathname === '/client-portal-info';
  const serviceSlug = pathname.startsWith('/services/')
    ? pathname.replace('/services/', '').replace(/\/$/, '')
    : null;
  const activeService = serviceSlug ? findServiceBySlug(serviceSlug) : null;

  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1d1b18]">
      <>
        <Navigation pathname={pathname} />
        {isAboutPage ? (
          <AboutPage />
        ) : isDeveloperPage ? (
          <DeveloperPage />
        ) : isPortalInfoPage ? (
          <PortalInfoPage />
        ) : activeService ? (
          <ServiceDetailPage service={activeService} />
        ) : (
          <>
            <Hero />
            <AboutIntro />
            <Services />
            <Projects />
            <Process />
            <Automation />
            <Contact />
          </>
        )}
        <ScrollToTopTab />
        <Footer />
      </>
    </div>
  );
}

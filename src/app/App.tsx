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
import { Footer } from './components/Footer';

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
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#1d1b18]">
      <>
        <Navigation isAboutPage={isAboutPage} />
        {isAboutPage ? (
          <AboutPage />
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
        <Footer />
      </>
    </div>
  );
}

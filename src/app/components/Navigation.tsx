import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type NavigationProps = {
  pathname?: string;
};

export function Navigation({ pathname = '/' }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const isHomePage = pathname === '/';
  const isPortalInfoPage = pathname === '/client-portal-info';

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navItems = [
    { label: 'Services', href: isHomePage ? '#services' : '/#services' },
    { label: 'Collections', href: isHomePage ? '#collections' : '/#collections' },
    { label: 'Process', href: isHomePage ? '#process' : '/#process' },
    { label: 'Automation', href: isHomePage ? '#automation' : '/#automation' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-1200 ${
        isPortalInfoPage || isScrolled
          ? 'bg-[#201c17]/78 backdrop-blur-md'
          : 'bg-[#7e7e7e6e]'
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-[1600px] items-center justify-between border-b px-6 py-3 md:px-8 md:py-2.5 ${
          isPortalInfoPage || isScrolled
            ? "border-white/12 text-[#f4efe6]"
            : "border-white/18 text-[#f4efe6]"
        }`}
      >
        <motion.div
          className="text-lg leading-none tracking-[0.08em] text-current md:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          <a href="/" className="block font-serif uppercase">
            LindiCo
          </a>
        </motion.div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-[10px] uppercase tracking-[0.22em] text-white/80 transition-colors after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#e6dac8]/80 after:transition-all after:duration-300 hover:text-white hover:after:w-[70%]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <motion.a
            href="/client-portal-info"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex h-[38px] items-center justify-center px-4 text-[10px] uppercase tracking-[0.18em] text-white/72 transition-colors hover:text-white"
          >
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute left-0 top-0 h-px w-0 bg-white/55 transition-all duration-500 group-hover:w-full" />
              <span className="absolute left-0 top-0 h-0 w-px bg-white/55 transition-all duration-500 group-hover:h-full" />
              <span className="absolute bottom-0 right-0 h-px w-0 bg-white/55 transition-all duration-500 delay-100 group-hover:w-full" />
              <span className="absolute bottom-0 right-0 h-0 w-px bg-white/55 transition-all duration-500 delay-100 group-hover:h-full" />
            </span>
            <span className="relative">Client Portal</span>
          </motion.a>

          <motion.a
            href={isHomePage ? "#contact" : "/#contact"}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex h-[38px] items-center justify-center"
          >
            <span className="relative inline-flex h-full items-center border border-white/28 bg-white/[0.02] px-4 text-[10px] uppercase tracking-[0.18em] text-white transition-all duration-300 group-hover:border-white/55 group-hover:bg-white/10">
              Contact Us
            </span>
          </motion.a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/12 bg-[#201c17]/92 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base uppercase tracking-[0.18em] text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/client-portal-info"
              className="text-base uppercase tracking-[0.18em] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Portal
            </a>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="inline-flex w-fit border border-white/35 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

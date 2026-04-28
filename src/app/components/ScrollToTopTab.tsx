import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollToTopTab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-4 right-6 z-40 inline-flex h-10 w-10 items-center justify-center border border-[#b6a58e]/55 bg-[#f4efe6]/55 text-[#6a5c4d] shadow-[0_10px_24px_rgba(32,28,23,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8c7c69] hover:bg-[#201c17]/92 hover:text-[#f4efe6]"
      aria-label="Return to top"
    >
      <ArrowUp size={15} strokeWidth={1.8} />
    </motion.a>
  );
}

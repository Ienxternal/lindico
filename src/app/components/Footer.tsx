import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t border-[#d9cdbd] bg-[#f4efe6] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-xl uppercase tracking-[0.18em] text-[#1d1b18] font-serif">
          LindiCo
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-[0.18em] text-[#7e6f5f]">
          <motion.a
            href="#"
            whileHover={{ color: '#1d1b18' }}
            className="transition-colors"
          >
            Privacy Policy
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ color: '#1d1b18' }}
            className="transition-colors"
          >
            Terms of Service
          </motion.a>
          <motion.a
            href="/developer"
            whileHover={{ color: '#1d1b18' }}
            className="transition-colors"
          >
            Developer
          </motion.a>
        </div>
        <div className="text-sm text-[#7e6f5f]">
          © 2026 LindiCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

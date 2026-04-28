import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#2a2621]"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="h-[120vh] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(14,12,10,0.52) 0%, rgba(20,17,14,0.28) 20%, rgba(28,24,20,0.14) 40%, rgba(36,31,25,0.28) 62%, rgba(27,22,18,0.74) 100%), radial-gradient(circle at 50% 34%, rgba(238,228,211,0.18) 0%, rgba(223,208,186,0.08) 20%, rgba(20,18,16,0.08) 44%, rgba(20,18,16,0) 68%), linear-gradient(120deg, rgba(205,191,168,0.16) 0%, rgba(205,191,168,0.06) 24%, rgba(24,20,17,0) 52%), url('https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg')",
            backgroundPosition: "center center",
          }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(12,10,9,0.18)_0%,rgba(12,10,9,0.04)_20%,rgba(12,10,9,0.03)_80%,rgba(12,10,9,0.16)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(18,16,14,0.36)_0%,rgba(18,16,14,0.2)_22%,rgba(18,16,14,0.08)_38%,rgba(18,16,14,0)_60%)]" />

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 pb-10 pt-24 md:px-10 md:pb-8 md:pt-24"
      >
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center"
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[#e7dbc8]/78 md:mb-6">
              Design & Build Collective
            </p>
            <h1
              className="text-[3.2rem] leading-[0.9] tracking-[-0.05em] text-[#fffaf2] sm:text-[4.2rem] md:text-[6.2rem] lg:text-[7.4rem] font-serif"
              style={{ textShadow: '0 2px 12px rgba(12, 10, 9, 0.28)' }}
            >
              Luxury,
              <br />
              Defined by You.
            </h1>
            <p className="mx-auto font-serif mt-5 max-w-xl text-sm tracking-[0.05em] text-[#e8dcc9]/82 md:text-[20px]">
              Built for memories. Designed to transcend.
            </p>
            <div className="mt-8 flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 border border-white/30 bg-[#181512]/30 px-7 py-4 text-sm uppercase tracking-[0.2em] text-[#f5eee2] backdrop-blur-sm transition-colors hover:bg-white hover:text-[#201c17]"
              >
                Book a Consultation
                <ArrowDownRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

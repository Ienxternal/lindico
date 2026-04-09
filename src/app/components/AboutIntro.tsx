import { motion } from 'motion/react';

export function AboutIntro() {
  return (
    <section id="about" className="bg-[#f8f4ec] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 border-t border-[#d8ccbc] pt-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-1"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-5 bg-[#b6a58e]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                Your Home
              </p>
              <span className="h-px w-5 bg-[#b6a58e]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-2xl font-serif leading-[1.45] tracking-[-0.02em] text-[#2b2621] md:text-3xl">
              Synergistic by Design, Driven by Your Vision
            </p>
            <div className="mt-2 space-y-4 text-lg leading-8 text-[#5d5145]">
              <p>
                Your home is a reflection of what you value. Every line, every
                material, every detail should feel intentional and considered.
                As you move through your space, it should inspire a natural
                sense of certainty—knowing nothing was overlooked.
              </p>
              <p>
                Those entrusted to curate your space should share the same
                vision and value.
              </p>
              <p>A tenet we live by.</p>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/about"
                className="inline-flex items-center justify-center border border-[#201c17] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#201c17] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]"
              >
                Learn More About how we do it.
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}







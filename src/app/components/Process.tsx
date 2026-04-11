import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Clarify the vision",
    description:
      "Together, we define how your home should feel and function before we talk through finishes or technology.",
  },
  {
    number: "02",
    title: "Design with discipline",
    description:
      "Selections, layouts, detailing, and system planning are shaped together so the result feels cohesive rather than assembled.",
  },
  {
    number: "03",
    title: "Build with precision",
    description:
      "Execution stays aligned with the original intent through close coordination, clean communication, and a high standard for finish quality. Nothing gets changed without your guidance.",
  },
  {
    number: "04",
    title: "Close with care",
    description:
      "Completion doesn't mean we walk away. It means we make sure you feel confident with the craftsmanship and are here for any questions or adjustments even beyond the timeline.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#f8f4ec] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-5 bg-[#b6a58e]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                Process
              </p>
              <span className="h-px w-5 bg-[#b6a58e]" />
            </div>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-6xl font-serif">
              Luxury feels cleaner when every decision belongs to the same story
              and vision.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d5145]">
              Our process is designed to make that happen.
            </p>
            <div className="mt-10 border border-[#d9cdbd] bg-[#f3ece0] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8c7c69]">
                Why this matters
              </p>
              <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                This isn't just about doing a work and leaving for the day. It's a
                commitment for us and we want it to be for you too. We want you
                to feel like you made the right choice every step of the way,
                and that your home is a result of a thoughtful, intentional
                process that reflects your vision.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-px bg-[#d9cdbd]">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className="group relative bg-[#fbf8f2]"
              >
                <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <div className="grid gap-6 p-8 transition-transform duration-150 ease-out will-change-transform group-hover:translate-x-[5px] md:grid-cols-[140px_1fr]">
                  <div className="text-sm uppercase tracking-[0.22em] text-[#8c7c69]">
                    Step {step.number}
                  </div>
                  <div>
                    <h3 className="text-3xl tracking-[-0.03em] text-[#1d1b18] font-serif">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-[#5c5146]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

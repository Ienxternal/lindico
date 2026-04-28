import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

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
      "It doesn't end with us just closing out the project. It means we make sure you feel confident with the craftsmanship and are here for any questions or adjustments even beyond the timeline.",
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
            transition={{ ease: [0.22, 1, 0.36, 1] }}
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
              Our process is designed to make that happen with you being the center of everything.
            </p>
            <div className="mt-10 border border-[#d9cdbd] bg-[#f3ece0] p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#8c7c69]">
                Meet Your Client Portal
              </p>
              <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                It's a sentimental commitment for us as much as it's for you. We want you
                to feel like you made the right choice every step of the way,
                and that your home is a result of a thoughtful, intentional
                process that reflects your vision.
              </p>
              <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
From this we designed a client centric portal to give you full visibility and control, and to make sure you feel confident and informed every step of the way.
              </p>
              <a
                href="/client-portal-info"
                className="group relative mt-8 inline-flex overflow-hidden border border-[#bba98f] bg-gradient-to-b from-[#fffdf9] to-[#eee3d4] text-[11px] uppercase tracking-[0.18em] text-[#2e2822] transition-colors hover:from-[#fffefb] hover:to-[#ebdfd0]"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100" />
                <span className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 transition-transform duration-150 ease-out group-hover:translate-x-[5px]">
                  Explore The Portal
                  <ArrowUpRight size={15} />
                </span>
              </a>
            </div>
          </motion.div>

          <div className="grid gap-px bg-[#d9cdbd]">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
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

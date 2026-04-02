import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hillside Residence',
    location: 'Primary suite + whole-home remodel',
    year: '8,400 sq ft',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    description:
      'Natural oak, limestone, custom millwork, and integrated lighting brought a dated property into a calmer contemporary language.',
  },
  {
    id: 2,
    title: 'Garden Terrace Retreat',
    location: 'Deck build + outdoor kitchen',
    year: '1,900 sq ft exterior program',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    description:
      'Layered outdoor seating, architectural lighting, and a custom deck system transformed the yard into an extension of the home.',
  },
  {
    id: 3,
    title: 'Connected Family Home',
    location: 'Kitchen remodel + automation',
    year: '2025 completion',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    description:
      'A warm minimalist kitchen renovation tied together with discreet audio, scene lighting, climate automation, and security control.',
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sectionProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const sectionY = useTransform(sectionProgress, [0, 1], ['30px', '-30px']);

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-[#201c17] py-28 text-[#f4efe6]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div style={{ y: sectionY }} className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-5 bg-[#6e6255]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#b6a792]">
                Signature Work
              </p>
              <span className="h-px w-5 bg-[#6e6255]" />
            </div>
            <h2 className="mb-5 mt-5 text-4xl tracking-[-0.04em] text-[#f4efe6] md:text-6xl font-serif">
              Spaces that feel tailored, restrained, and deeply livable.
            </h2>
            <p className="text-lg leading-8 text-[#cbbfaa]">
              The strongest luxury work balances architecture, materiality, and
              experience. These featured concepts show the tone the site should
              lead with.
            </p>
          </motion.div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const projectRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "end start"],
            });

            const imageY = useTransform(
              scrollYProgress,
              [0, 1],
              [
                index % 2 === 0 ? "-10%" : "10%",
                index % 2 === 0 ? "12%" : "-12%",
              ],
            );
            const contentY = useTransform(
              scrollYProgress,
              [0, 1],
              ["24px", "-24px"],
            );

            return (
              <motion.div
                key={project.id}
                ref={projectRef}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid gap-10 border-t border-[#4b4238] pt-10 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  className="relative h-[520px] overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="pointer-events-none absolute left-5 top-5 z-10 h-5 w-5 border-l border-t border-white/35" />
                  <span className="pointer-events-none absolute bottom-5 right-5 z-10 h-5 w-5 border-b border-r border-white/35" />
                  <span className="pointer-events-none absolute left-0 top-12 z-10 h-px w-10 bg-white/25" />
                  <span className="pointer-events-none absolute right-0 bottom-12 z-10 h-px w-10 bg-white/25" />
                  <motion.div style={{ y: imageY }} className="h-full w-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201c17]/50 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  style={{ y: contentY }}
                  className="flex flex-col justify-center"
                >
                  <div className="mb-5 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.18em] text-[#ab9d89]">
                    <span>{project.location}</span>
                    <span className="h-px w-8 bg-[#6e6255]" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mb-6 text-4xl tracking-[-0.04em] text-[#f4efe6] md:text-5xl font-serif">
                    {project.title}
                  </h3>
                  <p className="mb-8 max-w-xl text-lg leading-8 text-[#d3c8b7]">
                    {project.description}
                  </p>
                  <div className="mb-8 grid gap-4 sm:grid-cols-3">
                    {[
                      "Design direction aligned to architecture",
                      "Materials selected for longevity and warmth",
                      "Construction and systems coordinated together",
                    ].map((item) => (
                      <div
                        key={item}
                        className="border border-[#4b4238] p-4 text-sm leading-6 text-[#c8bca8]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#f4efe6] transition-colors hover:text-[#cdbfa8]"
                  >
                    Start a Similar Project
                    <ArrowUpRight size={18} />
                  </motion.a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

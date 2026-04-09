import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Cpu, Hammer, Home, Trees } from 'lucide-react';
import { services, type ServiceSlug } from '../content/services';

const serviceIcons: Record<ServiceSlug, typeof Home> = {
  'bespoke-concept-design': Home,
  'luxury-remodels-builds': Hammer,
  'outdoor-living-decks': Trees,
  'smart-home-integration': Cpu,
};

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['90px', '-90px']);
  const introY = useTransform(scrollYProgress, [0, 1], ['20px', '-20px']);
  const gridY = useTransform(scrollYProgress, [0, 1], ['36px', '-24px']);

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-[#f4efe6] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div style={{ y: introY }} className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-5 bg-[#b6a58e]" />
                <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                  Services
                </p>
                <span className="h-px w-5 bg-[#b6a58e]" />
              </div>
              <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-6xl font-serif">
                A cleaner, more complete approach to exceptional design and
                build—no matter the scale.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#584d42]">
                We design with intent, build with discipline, and integrate
                systems so environments feel effortless rather than
                overdone. Whether it's a complete residential transformation, a tailored
                addition, or a carefully considered commercial space, we bring
                the same level of care and attention to every project.
              </p>
              <div className="mt-10 grid gap-4 border-l border-[#d4c7b5] pl-6 text-sm uppercase tracking-[0.18em] text-[#6a5c4d]">
                <span>Concept to construction</span>
                <span>Material-driven interiors</span>
                <span>Outdoor spaces, personalized by you</span>
                <span>Invisible technology integration</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: gridY }}
            className="grid gap-px bg-[#d4c7b5] md:grid-cols-2"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#fbf8f2] transition-colors hover:bg-[#f3ebde]"
              >
                <a
                  href={`/services/${service.slug}`}
                  className="flex h-full min-h-[21rem] flex-col p-8"
                  aria-label={`Explore ${service.title}`}
                >
                  <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                  <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-sm uppercase tracking-[0.2em] text-[#8c7c69]">
                      {service.number}
                    </span>
                    {(() => {
                      const Icon = serviceIcons[service.slug];
                      return <Icon className="h-6 w-6 text-[#3d342b]" />;
                    })()}
                  </div>
                  <h3 className="text-3xl tracking-[-0.03em] text-[#1e1b17] font-serif">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-base leading-7 text-[#5e5246]">
                    {service.shortDescription}
                  </p>
                  <div className="group/cta mt-auto flex items-center justify-between gap-4 border-t border-[#d8ccbc] pt-5 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#8c7c69]">
                      Explore This Service
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbca7] bg-transparent text-[#2f2821] transition-all duration-500 group-hover:border-[#8c7c69] group-focus-within:border-[#8c7c69] group-hover/cta:bg-[#201c17] group-hover/cta:text-[#f4efe6] group-focus-within/cta:bg-[#201c17] group-focus-within/cta:text-[#f4efe6]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ y }}
        className="pointer-events-none absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[#d9c8b1]/30 blur-3xl"
      />
    </section>
  );
}

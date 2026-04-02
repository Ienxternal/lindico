import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Home, Hammer, Trees, Cpu } from 'lucide-react';

const services = [
  {
    icon: Home,
    number: '01',
    title: 'Bespoke Concept Design',
    description:
      'Meticulously crafted CAD and 3D renderings packaged to bring your vision to life, giving you a clear picture before it becomes realized.',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Luxury Remodels + Builds',
    description:
      'Whole-home, kitchen, bath, and interior renovations crafted around livability, detail, and long-term value.',
  },
  {
    icon: Trees,
    number: '03',
    title: 'Outdoor Living + Decks',
    description:
      'Deck builds, covered patios, outdoor kitchens, and transitions that make exterior spaces feel architecturally complete.',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Smart Home Integration',
    description:
      'Lighting, climate, shading, security, and AV systems woven into the home without visual clutter or technical friction.',
  },
];

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
          <motion.div
            style={{ y: introY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-5 bg-[#b6a58e]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                Services
              </p>
              <span className="h-px w-5 bg-[#b6a58e]" />
            </div>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-6xl font-serif">
              A cleaner, more complete approach to luxury residential work no matter the scale.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#584d42]">
              We design with restraint, build with discipline, and integrate
              systems so homes feels effortless rather than
              overdone. Whether it's a whole-home remodel or a small addition, we bring the same level of care and attention to every project.
            </p>
            <div className="mt-10 grid gap-4 border-l border-[#d4c7b5] pl-6 text-sm uppercase tracking-[0.18em] text-[#6a5c4d]">
              <span>Concept to construction</span>
              <span>Material-driven interiors</span>
              <span>Outdoor spaces, personalized by you</span>
              <span>Invisible technology integration</span>
            </div>
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
                className="group relative bg-[#fbf8f2] p-8 transition-colors hover:bg-[#f3ebde]"
              >
                <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#8c7c69]">
                    {service.number}
                  </span>
                  <service.icon className="h-6 w-6 text-[#3d342b]" />
                </div>
                <h3 className="text-3xl tracking-[-0.03em] text-[#1e1b17] font-serif">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-[#5e5246]">
                  {service.description}
                </p>
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


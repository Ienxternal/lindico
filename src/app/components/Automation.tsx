import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Smartphone, Lightbulb, Shield, Thermometer, Waves } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Scene Lighting',
    description: 'Atmosphere shifts from morning to evening with one-touch settings and architectural control.',
  },
  {
    icon: Thermometer,
    title: 'Climate + Shades',
    description: 'Temperature, daylight, and comfort coordinated quietly in the background.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Entry, cameras, and alerts integrated into a system that feels simple to live with.',
  },
  {
    icon: Smartphone,
    title: 'Unified Control',
    description: 'Lighting, audio, climate, and exterior systems managed from one elegant interface.',
  },
  {
    icon: Waves,
    title: 'Outdoor Integration',
    description: 'Deck lighting, heaters, audio, and landscape scenes extend the same experience outside.',
  },
];

export function Automation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-14%', '14%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['18px', '-26px']);
  const panelY = useTransform(scrollYProgress, [0, 1], ['34px', '-18px']);

  return (
    <section
      id="automation"
      ref={ref}
      className="relative overflow-hidden bg-[#e8ddce] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            style={{ y: textY }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-5 bg-[#baa993]" />
                <p className="text-sm uppercase tracking-[0.24em] text-[#8a7967]">
                  Smart Living
                </p>
                <span className="h-px w-5 bg-[#baa993]" />
              </div>
              <h2 className="mb-6 mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-6xl font-serif">
                Technology should support the home, not dominate it.
              </h2>
              <p className="mb-12 text-lg leading-8 text-[#5a4f44]">
                The most sophisticated automation is nearly invisible. We plan
                systems around daily routines, architecture, and ease of use so
                the result feels elegant instead of over-engineered.
              </p>

              <div className="grid gap-px bg-[#cdbda8]">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 bg-[#f8f3ea] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#d4c7b5] bg-[#efe5d8]">
                      <feature.icon className="h-5 w-5 text-[#2d2822]" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg text-[#1f1b17]">
                        {feature.title}
                      </h4>
                      <p className="text-[#63574b]">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: panelY }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[620px] overflow-hidden border border-[#cdbda8]">
              <motion.img
                style={{ y: imageY }}
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
                alt="Smart home automation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1a15]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-[#201c17]/70 p-6 text-[#f4efe6] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d5c7b0]">
                  Integrated lifestyle systems
                </p>
                <p className="mt-3 text-2xl leading-8 font-serif">
                  From deck lighting to interior scenes, every layer works together.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-8rem] top-12 h-72 w-72 rounded-full bg-[#f7f0e5]/50 blur-3xl" />
    </section>
  );
}

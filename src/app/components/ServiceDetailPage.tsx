import { motion } from 'motion/react';
import type { ServiceDetail } from '../content/services';

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main className="bg-[#f4efe6] pt-24 md:pt-28">
      <section className="bg-[#201c17] px-6 py-24 text-[#f4efe6] md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#8c7b68]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
                Service {service.number}
              </p>
            </div>
            <h1 className="mt-6 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl font-serif">
              {service.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d5cab9]">
              {service.overview}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center border border-white/25 bg-white/6 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#f4efe6] transition-colors hover:bg-white hover:text-[#201c17]"
              >
                Start a Conversation
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center border border-white/18 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#f4efe6] transition-colors hover:bg-white/8"
              >
                Back to Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border border-white/10"
          >
            <img
              src={service.heroImage}
              alt={service.title}
              className="h-[520px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#b6a58e]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                What It Includes
              </p>
            </div>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
              A closer look at how this service supports the project.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5d5145]">
              {service.intro}
            </p>
          </motion.div>

          <div className="grid gap-px bg-[#d8ccbc]">
            {service.deliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 bg-[#fbf8f2] p-8 md:grid-cols-[120px_1fr]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
                  0{index + 1}
                </p>
                <p className="text-xl leading-8 text-[#2e2822] font-serif">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7db] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Pictures + Examples
            </p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {service.examples.map((example, index) => (
              <motion.article
                key={example.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border border-[#d8ccbc] bg-[#fbf8f2]"
              >
                <img
                  src={example.image}
                  alt={example.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
                    Example 0{index + 1}
                  </p>
                  <h3 className="mt-4 text-3xl tracking-[-0.03em] text-[#1d1b18] font-serif">
                    {example.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5d5145]">
                    {example.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

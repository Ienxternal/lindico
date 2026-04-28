import { motion } from 'motion/react';

const overviewItems = [
  'Selections, approvals, notes, and next steps in one workspace',
  'Clear visibility into milestones, requests, and project movement',
  'Structured communication without scattered email threads',
];

const heroStats = [
  { label: 'Workspace', value: 'Unified' },
  { label: 'Approvals', value: 'Tracked' },
  { label: 'Timeline', value: 'Visible' },
];

const features = [
  {
    title: 'Centralized project visibility',
    description:
      'Key project information lives in one place so decisions, updates, and progress are easier to follow.',
  },
  {
    title: 'A structured client experience',
    description:
      'The portal supports a more polished working relationship by keeping communication and approvals organized.',
  },
  {
    title: 'Built for high-touch work',
    description:
      'It is designed to complement a luxury residential process where clarity, confidence, and timing all matter.',
  },
];

const showcaseSections = [
  {
    label: 'Dashboard Overview',
    title: 'A dashboard built for fast project clarity.',
    description:
      'The portal opens with a structured summary of the active project, current phase, next milestone, and lead contacts so clients can orient themselves quickly.',
    imagePosition: 'top',
  },
  {
    label: 'Schedule + Milestones',
    title: 'Scheduling that feels easier to review at a glance.',
    description:
      'Calendar visibility and milestone context help clients see what is coming up, what changed, and what needs attention without chasing updates.',
    imagePosition: 'center',
  },
  {
    label: 'Client Information',
    title: 'Important project details remain easy to access.',
    description:
      'Essential client-facing information can live in one place, making documents, decisions, and support details easier to revisit over time.',
    imagePosition: 'bottom',
  },
];

const detailRows = [
  'Project status and active phase visibility',
  'Calendar-based scheduling with milestone context',
  'Document and decision access from one workspace',
  'Lead contacts and client support details in view',
];

export function PortalInfoPage() {
  return (
    <main className="bg-[#f4efe6]">
      <section className="overflow-hidden bg-[linear-gradient(180deg,#f8f4ec_0%,#f4efe6_58%,#efe7db_100%)] px-6 pb-24 pt-32 text-[#1d1b18] md:px-10 md:pb-28 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl pt-2"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d9cdbd] bg-[#fbf8f2] px-4 py-2 shadow-[0_10px_30px_rgba(32,28,23,0.06)]">
              <span className="h-2 w-2 rounded-full bg-[#b6a58e]" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#8c7c69]">
                Client Portal Info
              </p>
            </div>
            <h1 className="mt-6 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl font-serif">
              A client workspace designed to make project management feel clear, current, and easy to navigate.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d5145]">
              Built like a modern software product, the portal gives clients one
              place to review project progress, understand next steps, monitor
              the schedule, and stay connected to the details that matter.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://lindico-portal.pages.dev/signin"
                className="inline-flex items-center justify-center border border-[#c5b8a7] bg-[#201c17] px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#f4efe6] transition-colors hover:bg-[#312a23]"
              >
                Login To Portal
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center border border-[#d3c5b5] bg-[#fbf8f2] px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#2b241d] transition-colors hover:bg-[#f3ece0]"
              >
                Ask About Access
              </a>
            </div>
            <div className="mt-10 grid gap-3 text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
              {overviewItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-[#b6a58e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pt-1"
          >
            <div className="absolute -left-6 top-28 h-px w-28 bg-[#d5c7b7]" />
            <div className="absolute -right-6 top-16 h-28 w-28 border border-[#d9cdbd]/70" />
            <div className="absolute bottom-10 left-12 h-20 w-20 border-l border-t border-[#d9cdbd]/70" />
            <div className="relative border border-[#d9cdbd] bg-[#fbf8f2] p-4 shadow-[0_28px_80px_rgba(32,28,23,0.08)] md:p-5">
              <div className="flex items-center justify-between border-b border-[#ddd2c4] pb-4">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#8c7c69]">
                  Platform Preview
                </p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#8c7c69]">
                  Client Workspace
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-[#ddd2c4] bg-[#f8f4ec] p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-2xl text-[#1d1b18] font-serif">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 border border-[#d9cdbd] bg-white p-3">
                <img
                  src="/images/PORTAL.png"
                  alt="LindiCo client portal dashboard"
                  className="w-full border border-[#ece3d8]"
                />
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="border border-[#ddd2c4] bg-[#f8f4ec] p-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                    Product Snapshot
                  </p>
                  <p className="mt-4 text-xl leading-8 text-[#1d1b18] font-serif">
                    The portal is structured to feel calm and technical, giving
                    clients a reliable way to review the project without digging
                    through scattered updates.
                  </p>
                </div>

                <div className="border border-[#ddd2c4] bg-[#f8f4ec] p-5">
                  <div className="space-y-3">
                    {['Project summary at the top', 'Calendar and timeline in view', 'Client information organized below'].map((item) => (
                      <div
                        key={item}
                        className="border border-[#e2d7ca] bg-white px-4 py-3 text-sm text-[#5d5145]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#201c17] py-24 text-[#f4efe6]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#8c7b68]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
                Why It Matters
              </p>
            </div>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#f4efe6] md:text-5xl font-serif">
              A product-like experience built around confidence and ease.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#d5cab9]">
              The portal supports a more polished client experience by making
              progress, decisions, and communication easier to understand at a
              glance.
            </p>
          </motion.div>

          <div className="grid gap-px bg-white/10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-5 bg-[#241f1a] p-8 md:grid-cols-[180px_1fr]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#cdbfa8]">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-3xl leading-tight text-[#f4efe6] font-serif">
                    {feature.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[#d5cab9]">
                    {feature.description}
                  </p>
                </div>
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
              Interface Showcase
            </p>
          </div>
          <div className="mt-10 space-y-10">
            {showcaseSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-10 border border-[#d8ccbc] bg-[#fbf8f2] p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
              >
                <div
                  className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
                    {section.label}
                  </p>
                  <h3 className="mt-4 text-4xl leading-tight text-[#1d1b18] font-serif">
                    {section.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#5d5145]">
                    {section.description}
                  </p>
                </div>
                <div
                  className={`order-1 border border-[#d8ccbc] bg-[linear-gradient(180deg,#f7f1e8,#eee4d5)] p-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center justify-between border-b border-[#d9cdbd] pb-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                      Product View
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                      0{index + 1}
                    </p>
                  </div>
                  <div className="mt-5 overflow-hidden rounded-[20px] border border-[#d7c9b7] bg-[#fbf8f2]">
                    <img
                      src="/images/PORTAL.png"
                      alt={section.title}
                      className={`h-[320px] w-full object-cover ${
                        section.imagePosition === 'top'
                          ? 'object-top'
                          : section.imagePosition === 'bottom'
                            ? 'object-bottom'
                            : 'object-center'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#201c17] py-24 text-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#8c7b68]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
              What Clients Can Expect
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
            {detailRows.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#241f1a] p-8"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#cdbfa8]">
                  0{index + 1}
                </p>
                <p className="mt-4 text-2xl leading-8 text-[#f4efe6] font-serif">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

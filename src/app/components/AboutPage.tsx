import { motion } from 'motion/react';

const credentials = [
  'PMP-certified project leadership',
  'Experience guiding high-end residential scopes',
  'Design, build, and systems coordination',
  'Client communication with executive-level structure',
];

const values = [
  {
    title: 'Leadership that reduces friction',
    description:
      'High-end work demands more than taste. It requires structure, timing, and accountability so every moving part stays aligned.',
  },
  {
    title: 'Luxury with discipline',
    description:
      'Premium spaces only feel elevated when design decisions, craftsmanship, scheduling, and execution are held to the same standard.',
  },
  {
    title: 'A process clients can trust',
    description:
      'From selections and scope management to stakeholder communication, we bring order and clarity to complex residential projects.',
  },
];

export function AboutPage() {
  return (
    <main className="bg-[#f4efe6] pt-24 md:pt-28">
      <section className="bg-[#201c17] px-6 py-24 text-[#f4efe6] md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#8c7b68]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
                About LindiCo
              </p>
            </div>
            <h1 className="mt-6 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl font-serif">
              Design-led homes guided by serious project leadership.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d5cab9]">
              LindiCo was built for clients who want high-end residential work
              handled with both creative sensitivity and professional rigor. Our
              approach combines a refined design perspective with the structure
              needed to lead complex projects well.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#b6a58e]" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                Founder Perspective
              </p>
            </div>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
              High-end spaces deserve more than good taste. They deserve strong leadership.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg leading-8 text-[#5d5145]"
          >
            <p>
              At LindiCo, the goal is not simply to create beautiful spaces. It
              is to deliver high-end residential work in a way that feels
              intentional, well-managed, and deeply considered from start to
              finish.
            </p>
            <p>
              That perspective is shaped by a background in project leadership,
              coordination, and disciplined execution. As a PMP-certified
              professional, you bring a level of structure that clients feel in
              the clarity of communication, the quality of planning, and the way
              complex details are carried through.
            </p>
            <p>
              Whether the work involves a custom home, a full remodel, a deck
              build, or integrated automation, the standard stays the same:
              thoughtful design, organized delivery, and a finished result that
              feels elevated without feeling overdone.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#efe7db] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-[#b6a58e]" />
                <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                  Credentials
                </p>
              </div>
              <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
                Why this background matters for luxury residential work.
              </h2>
            </motion.div>

            <div className="grid gap-px bg-[#d5c8b8] md:grid-cols-2">
              {credentials.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-[#fbf8f2] p-8"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
                    0{index + 1}
                  </p>
                  <p className="mt-4 text-2xl leading-8 text-[#1d1b18] font-serif">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f4ec] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              What Clients Feel
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-[#d8ccbc]">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid gap-5 bg-[#fbf8f2] p-8 md:grid-cols-[220px_1fr]"
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[#8c7c69]">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-3xl leading-tight text-[#1d1b18] font-serif">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-[#5d5145]">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#201c17] px-6 py-20 text-[#f4efe6] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
              Work With LindiCo
            </p>
            <h2 className="mt-5 text-4xl leading-tight tracking-[-0.04em] md:text-5xl font-serif">
              If you want high-end work supported by clear leadership, let&apos;s talk.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center border border-white/25 bg-white/6 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#f4efe6] transition-colors hover:bg-white hover:text-[#201c17]"
            >
              Schedule Consultation
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center border border-white/18 px-7 py-4 text-sm uppercase tracking-[0.18em] text-[#f4efe6] transition-colors hover:bg-white/8"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

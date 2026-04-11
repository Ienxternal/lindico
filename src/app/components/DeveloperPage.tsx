// Remove this file for production, then delete the /developer route in App.tsx and the Developer footer link in Footer.tsx.
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, Cpu, Hammer, Home, Trees } from 'lucide-react';

const colorRows = [
  {
    token: 'Deep Espresso',
    hex: '#201c17',
    usage: 'Dark sections, navigation on scroll, high-contrast surfaces',
  },
  {
    token: 'Warm Ivory',
    hex: '#f4efe6',
    usage: 'Primary page background and light surface base',
  },
  {
    token: 'Soft Cream',
    hex: '#f8f4ec',
    usage: 'Secondary light sections and alternating content bands',
  },
  {
    token: 'Pale Sand',
    hex: '#efe7db',
    usage: 'Supportive background sections and soft visual separation',
  },
  {
    token: 'Warm Linen',
    hex: '#e8ddce',
    usage: 'Automation section backdrop and warm tonal variation',
  },
  {
    token: 'Muted Taupe',
    hex: '#cdbfa8',
    usage: 'Accent text, labels, dividers, and subtle highlights',
  },
  {
    token: 'Bronze Taupe',
    hex: '#b6a58e',
    usage: 'Section markers, line accents, and border details',
  },
  {
    token: 'Dusty Mocha',
    hex: '#8c7c69',
    usage: 'Muted headings, metadata, and understated UI accents',
  },
  {
    token: 'Body Brown',
    hex: '#5d5145',
    usage: 'Readable paragraph text on light backgrounds',
  },
  {
    token: 'Pastel Green',
    hex: '#dbead7',
    usage: 'Calendar highlight for today',
  },
];

const serviceCardTests = [
  {
    number: '01',
    title: 'Bespoke Concept Design',
    description:
      'Early-stage direction focused on architecture, materiality, and the lived feel of the project.',
    icon: Home,
  },
  {
    number: '02',
    title: 'Luxury Remodels & Builds',
    description:
      'A fuller project path balancing design precision, construction clarity, and elevated finishes.',
    icon: Hammer,
  },
  {
    number: '03',
    title: 'Outdoor Living & Decks',
    description:
      'Exterior spaces designed to feel integrated, durable, and genuinely tailored to daily use.',
    icon: Trees,
  },
  {
    number: '04',
    title: 'Smart Home Integration',
    description:
      'Technology planned to disappear into the background while improving comfort and control.',
    icon: Cpu,
  },
];

export function DeveloperPage() {
  const [activeToken, setActiveToken] = useState<(typeof colorRows)[number] | null>(
    null,
  );

  return (
    <main className="bg-[#f4efe6] pt-24 md:pt-28">
      <section className="bg-[#201c17] px-6 py-20 text-[#f4efe6] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[#cdbfa8]">
            Developer
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl font-serif">
            Internal notes for building and debugging the site.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d5cab9]">
            This page is temporary and intended for development-only references.
            It should be easy to remove before production by deleting this page
            component and the small route/footer references that point to it.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f4ec] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Color Scheme
            </p>
          </div>
          <h2 className="mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
            Current website palette
          </h2>

          <div className="mt-10 overflow-hidden border border-[#d9cdbd] bg-[#fbf8f2]">
            <div className="hidden grid-cols-[180px_160px_160px_1fr] border-b border-[#d9cdbd] bg-[#efe7db] text-xs uppercase tracking-[0.18em] text-[#6f6254] md:grid">
              <div className="px-6 py-4">Token</div>
              <div className="px-6 py-4">Hex</div>
              <div className="px-6 py-4">Swatch</div>
              <div className="px-6 py-4">Usage</div>
            </div>

            {colorRows.map((row) => {
              const isActive = activeToken?.hex === row.hex;

              return (
                <motion.div
                  key={row.hex}
                  layout
                  onHoverStart={() => setActiveToken(row)}
                  onHoverEnd={() =>
                    setActiveToken((current) =>
                      current?.hex === row.hex ? null : current,
                    )
                  }
                  onFocusCapture={() => setActiveToken(row)}
                  onBlurCapture={() =>
                    setActiveToken((current) =>
                      current?.hex === row.hex ? null : current,
                    )
                  }
                  className="relative grid border-b border-[#e5dacb] last:border-b-0 md:grid-cols-[180px_160px_160px_1fr]"
                >
                  <div className="px-6 pb-2 pt-6 text-sm uppercase tracking-[0.16em] text-[#8c7c69] md:py-5">
                    {row.token}
                  </div>
                  <div className="px-6 py-1 text-base text-[#1d1b18] md:py-5">
                    <code>{row.hex}</code>
                  </div>
                  <div className="px-6 py-2 md:py-5">
                    <div
                      className="h-10 w-20 border border-[#d9cdbd]"
                      style={{ backgroundColor: row.hex }}
                      aria-label={`${row.token} swatch`}
                    />
                  </div>
                  <div className="px-6 pb-6 pt-2 text-base leading-7 text-[#5d5145] md:py-5">
                    {row.usage}
                  </div>

                  <AnimatePresence>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, y: 18, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 14, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="pointer-events-none absolute bottom-4 right-4 z-10 hidden w-72 overflow-hidden border border-[#d9cdbd] bg-[#201c17] text-[#f4efe6] shadow-[0_24px_50px_rgba(32,28,23,0.18)] md:block"
                      >
                        <div
                          className="h-2 w-full"
                          style={{ backgroundColor: row.hex }}
                        />
                        <div className="p-5">
                          <p className="text-[10px] uppercase tracking-[0.24em] text-[#cdbfa8]">
                            Hover Note
                          </p>
                          <p className="mt-3 text-2xl tracking-[-0.03em] font-serif">
                            {row.token}
                          </p>
                          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b6a58e]">
                            {row.hex}
                          </p>
                          <p className="mt-4 text-sm leading-6 text-[#ddd1c0]">
                            {row.usage}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7db] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Service Hover Lab
            </p>
          </div>
          <h2 className="mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
            Test cards before touching production
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5d5145]">
            This section is a sandbox for dialing in the service-card lift,
            bottom bar, and text stability without changing the live services
            section.
          </p>

          <div className="mt-10 grid gap-px bg-[#d4c7b5] md:grid-cols-2">
            {serviceCardTests.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden bg-[#fbf8f2] transition-colors hover:bg-[#f3ebde]"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#e6dac8]/80 to-transparent"
                  />
                  <div className="relative z-10 flex min-h-[21rem] flex-col p-8">
                    <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                    <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#cdbca7] transition-colors group-hover:border-[#8c7c69]" />
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#8c7c69]">
                        {card.number}
                      </span>
                      <Icon className="h-6 w-6 text-[#3d342b]" />
                    </div>
                    <h3 className="text-3xl tracking-[-0.03em] text-[#1e1b17] font-serif">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-7 text-[#5e5246]">
                      {card.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#d8ccbc] pt-5 opacity-0 transition-[opacity,transform] duration-300 [transform:translate3d(0,10px,0)] group-hover:[transform:translate3d(0,0,0)] group-hover:opacity-100">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#8c7c69]">
                        Explore This Service
                      </span>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbca7] bg-transparent text-[#2f2821] transition-all duration-500 group-hover:border-[#8c7c69] group-hover:bg-[#201c17] group-hover:text-[#f4efe6]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

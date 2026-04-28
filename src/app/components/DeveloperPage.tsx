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

const portalButtonMocks = [
  {
    name: 'Editorial',
    description:
      'Text-first with a restrained right arrow and a slightly stronger border presence.',
    buttonClassName:
      'mt-8 inline-flex items-center justify-center gap-2 border border-[#bba98f] px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-[#2e2822] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]',
    content: (
      <>
        <span>Explore The Portal</span>
        <ArrowUpRight size={15} />
      </>
    ),
  },
  {
    name: 'Architectural',
    description:
      'A split-button treatment with a dedicated arrow chamber and a more structured feel.',
    buttonClassName:
      'mt-8 inline-flex items-stretch border border-[#bba98f] text-[11px] uppercase tracking-[0.18em] text-[#2e2822] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]',
    content: (
      <>
        <span className="flex items-center px-6 py-3">Explore The Portal</span>
        <span className="flex items-center justify-center border-l border-current px-4">
          <ArrowUpRight size={15} />
        </span>
      </>
    ),
  },
  {
    name: 'Private Member',
    description:
      'A softer filled action with a framed arrow capsule that feels quieter and more exclusive.',
    buttonClassName:
      'mt-8 inline-flex items-center justify-center gap-3 border border-[#c5b49b] bg-[#ede3d5] px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#2e2822] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]',
    content: (
      <>
        <span>Explore The Portal</span>
        <span className="inline-flex h-7 w-7 items-center justify-center border border-current">
          <ArrowUpRight size={13} />
        </span>
      </>
    ),
  },
];

const portalEffectMocks = [
  {
    name: 'Ivory Wash',
    description:
      'A near-white vertical wash that lifts the surface gently without changing the button silhouette.',
    panelClassName:
      'border border-[#d9cdbd] bg-[linear-gradient(180deg,rgba(249,245,238,0.98),rgba(239,231,219,0.9))] p-8',
    buttonClassName:
      'group relative mt-8 inline-flex overflow-hidden border border-[#bba98f] bg-[linear-gradient(180deg,rgba(255,253,249,0.98),rgba(244,237,228,0.92))] text-[11px] uppercase tracking-[0.18em] text-[#2e2822] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)] transition-colors hover:bg-[linear-gradient(180deg,rgba(255,254,251,1),rgba(242,234,223,0.96))] hover:text-[#2e2822]',
    innerClassName:
      'flex items-center justify-center gap-2 px-6 py-3 transition-transform duration-150 ease-out group-hover:translate-x-[5px]',
    barClassName:
      'pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#b6a58e] opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100',
  },
  {
    name: 'Arrow Halo',
    description:
      'A cleaner button with the emphasis concentrated around the arrow zone through a soft radial halo.',
    panelClassName: 'border border-[#d9cdbd] bg-[#f3ece0] p-8',
    buttonClassName:
      'mt-8 inline-flex items-center justify-center gap-3 border border-[#bba98f] bg-[#f5eee3] px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-[#2e2822] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]',
    arrowWrapClassName:
      'inline-flex h-7 w-7 items-center justify-center bg-[radial-gradient(circle,rgba(214,197,171,0.58)_0%,rgba(214,197,171,0.18)_55%,transparent_78%)]',
  },
  {
    name: 'Light Sweep',
    description:
      'A restrained hover-sheen concept using a soft directional highlight layered over the button surface.',
    panelClassName: 'border border-[#d9cdbd] bg-[#f3ece0] p-8',
    buttonClassName:
      'group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden border border-[#bba98f] bg-[linear-gradient(180deg,rgba(246,239,229,0.92),rgba(234,224,210,0.86))] px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-[#2e2822] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-colors hover:bg-[#201c17] hover:text-[#f4efe6]',
    sheenClassName:
      'pointer-events-none absolute inset-y-0 left-[-30%] w-[38%] skew-x-[-20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-70',
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
                        transition={{ ease: [0.32, 0.72, 0, 1] }}
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
                  transition={{ ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden bg-[#fbf8f2] transition-colors hover:bg-[#f3ebde]"
                >
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ ease: [0.32, 0.72, 0, 1] }}
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

      <section className="bg-[#f8f4ec] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Portal CTA Lab
            </p>
          </div>
          <h2 className="mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
            Three button directions for the client portal panel
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5d5145]">
            Each mock keeps the same parent box language from the live process
            section, but changes the CTA treatment so we can compare which one
            feels the most elevated.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portalButtonMocks.map((mock) => (
              <div
                key={mock.name}
                className="border border-[#d9cdbd] bg-[#f3ece0] p-8"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#8c7c69]">
                  Your Client Portal
                </p>
                <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                  It&apos;s a sentimental commitment for us as much as it&apos;s
                  for you. We want you to feel like you made the right choice
                  every step of the way.
                </p>
                <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                  Our client portal is designed to support that by giving you
                  full control and visibility of the project.
                </p>
                <div className={mock.buttonClassName}>{mock.content}</div>
                <div className="mt-8 border-t border-[#d8ccbc] pt-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                    {mock.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5d5145]">
                    {mock.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7db] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#b6a58e]" />
            <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
              Portal Effects Lab
            </p>
          </div>
          <h2 className="mt-5 text-4xl tracking-[-0.04em] text-[#1d1b18] md:text-5xl font-serif">
            Gradient and effect directions for the portal CTA
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5d5145]">
            These keep the button layout more restrained and test whether
            subtle tonal effects can make the portal action feel more elevated.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portalEffectMocks.map((mock) => (
              <div key={mock.name} className={mock.panelClassName}>
                <p className="text-xs uppercase tracking-[0.22em] text-[#8c7c69]">
                  Your Client Portal
                </p>
                <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                  It&apos;s a sentimental commitment for us as much as it&apos;s
                  for you. We want you to feel like you made the right choice
                  every step of the way.
                </p>
                <p className="mt-4 text-xl leading-8 text-[#2e2822] font-serif">
                  Our client portal is designed to support that by giving you
                  full control and visibility of the project.
                </p>
                <div className={mock.buttonClassName}>
                  {'barClassName' in mock && mock.barClassName ? (
                    <span className={mock.barClassName} />
                  ) : null}
                  {'sheenClassName' in mock && mock.sheenClassName ? (
                    <span className={mock.sheenClassName} />
                  ) : null}
                  <div className={`relative z-10 ${mock.innerClassName ?? 'flex items-center justify-center gap-2'}`}>
                    <span>Explore The Portal</span>
                    <span className={mock.arrowWrapClassName ?? ''}>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#d8ccbc] pt-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8c7c69]">
                    {mock.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5d5145]">
                    {mock.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

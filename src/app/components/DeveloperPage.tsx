// Remove this file for production, then delete the /developer route in App.tsx and the Developer footer link in Footer.tsx.

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

export function DeveloperPage() {
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

            {colorRows.map((row) => (
              <div
                key={row.hex}
                className="grid border-b border-[#e5dacb] last:border-b-0 md:grid-cols-[180px_160px_160px_1fr]"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

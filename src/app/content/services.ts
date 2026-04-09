export type ServiceSlug =
  | 'bespoke-concept-design'
  | 'luxury-remodels-builds'
  | 'outdoor-living-decks'
  | 'smart-home-integration';

export type ServiceDetail = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  overview: string;
  intro: string;
  deliverables: string[];
  examples: Array<{
    title: string;
    description: string;
    image: string;
  }>;
};

export const services: ServiceDetail[] = [
  {
    slug: 'bespoke-concept-design',
    number: '01',
    title: 'Bespoke Concept Design',
    shortDescription:
      'Meticulously crafted CAD and 3D renderings packaged to bring your vision to life, giving you a clear picture before it becomes realized.',
    heroImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Concept design at LindiCo is where ideas become direction. We shape room flow, material tone, architectural intent, and spatial mood before construction begins so the finished home feels cohesive instead of pieced together.',
    intro:
      'This service is ideal for clients who want clarity before committing to construction decisions. We translate preferences, lifestyle goals, and site conditions into visual direction that can guide the rest of the project with confidence.',
    deliverables: [
      'Concept sketches, spatial layouts, and mood direction',
      'CAD drawings and 3D visual studies for early decision-making',
      'Material and finish direction tied to the architecture',
      'Presentation-ready concepts you can review before build planning',
    ],
    examples: [
      {
        title: 'Whole-home design language',
        description:
          'A cohesive visual plan for millwork, stone, lighting, and transitions so each room feels connected.',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Kitchen and great room studies',
        description:
          'Renderings and layout options that help clients compare proportion, circulation, and material balance early.',
        image:
          'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'luxury-remodels-builds',
    number: '02',
    title: 'Luxury Remodels + Builds',
    shortDescription:
      'Whole-home, kitchen, bath, and interior renovations crafted around livability, detail, and long-term value.',
    heroImage:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Our remodel and build service brings design, construction, and coordination into one disciplined process. The focus is not just on visual quality, but on how each decision supports comfort, durability, and a refined lived-in feel.',
    intro:
      'Whether the scope is a single transformative renovation or a larger residential build, we help clients make thoughtful choices that preserve architectural integrity while elevating the experience of the home.',
    deliverables: [
      'Kitchen, bath, and whole-home renovation planning',
      'Interior detailing that aligns construction with design intent',
      'Builder coordination, sequencing, and scope clarity',
      'Finish and fixture decisions selected for both beauty and longevity',
    ],
    examples: [
      {
        title: 'Primary suite renovation',
        description:
          'Spa-level materials, quieter lighting, and more considered storage transformed a dated suite into a retreat.',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Whole-home remodel',
        description:
          'A layered update that aligned millwork, flooring, lighting, and circulation across the full property.',
        image:
          'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'outdoor-living-decks',
    number: '03',
    title: 'Outdoor Living + Decks',
    shortDescription:
      'Deck builds, covered patios, outdoor kitchens, and transitions that make exterior spaces feel architecturally complete.',
    heroImage:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Outdoor spaces should feel like a natural extension of the home, not an afterthought. We design exterior environments with the same attention to proportion, material warmth, and daily usability that we bring indoors.',
    intro:
      'This service helps homeowners create more usable square footage outside, whether that means a custom deck, a covered patio, or a complete outdoor entertaining environment.',
    deliverables: [
      'Custom deck and patio planning',
      'Outdoor kitchen and lounge layout guidance',
      'Material selections that relate to the existing home',
      'Lighting and comfort features designed for year-round use',
    ],
    examples: [
      {
        title: 'Covered outdoor lounge',
        description:
          'A shaded retreat with layered lighting, durable finishes, and better flow between the interior and exterior.',
        image:
          'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Deck and kitchen extension',
        description:
          'An exterior program built for hosting, with cooking, dining, and gathering zones that feel intentional.',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
  {
    slug: 'smart-home-integration',
    number: '04',
    title: 'Smart Home Integration',
    shortDescription:
      'Lighting, climate, shading, security, and AV systems woven into the home without visual clutter or technical friction.',
    heroImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    overview:
      'Integrated technology works best when it disappears into the architecture. We help clients plan lighting, shading, climate, security, and AV systems that improve daily life without overwhelming the design of the home.',
    intro:
      'This service is for homeowners who want systems to feel elegant and intuitive. Every recommendation is shaped around routine, convenience, and how the home should feel in real use.',
    deliverables: [
      'Lighting, shading, and climate control planning',
      'Audio, video, and security coordination',
      'System layouts that respect the design of the home',
      'Technology recommendations focused on ease of use',
    ],
    examples: [
      {
        title: 'Unified living scenes',
        description:
          'One-touch control for lighting, climate, and media that shifts the tone of the home throughout the day.',
        image:
          'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Outdoor technology integration',
        description:
          'Audio, heating, and lighting extended to decks and patios without making the space feel technical.',
        image:
          'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      },
    ],
  },
];

export function findServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

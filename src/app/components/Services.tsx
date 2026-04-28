import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Cpu, Hammer, Home, Trees } from "lucide-react";
import { services } from "../content/services";

const serviceIcons = {
  "bespoke-concept-design": Home,
  "luxury-remodels-builds": Hammer,
  "outdoor-living-decks": Trees,
  "smart-home-integration": Cpu,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
) {
  if (inMax === inMin) return outMin;
  const progress = (value - inMin) / (inMax - inMin);
  return outMin + (outMax - outMin) * progress;
}

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [introVisible, setIntroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight;
      const end = -rect.height;
      const current = rect.top;

      const nextProgress = clamp(mapRange(current, start, end, 0, 1), 0, 1);

      setProgress(nextProgress);
    };

    handleScroll();

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const intro = section.querySelector("[data-services-intro]");
    const cards = Array.from(section.querySelectorAll("[data-service-card]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === intro && entry.isIntersecting) {
            setIntroVisible(true);
          }

          const indexAttr = (entry.target as HTMLElement).dataset.cardIndex;
          if (typeof indexAttr === "string" && entry.isIntersecting) {
            const index = Number(indexAttr);
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 8% 0px",
      },
    );

    if (intro) observer.observe(intro);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const transforms = useMemo(() => {
    return {
      orbY: mapRange(progress, 0, 1, 90, -90),
      introY: mapRange(progress, 0, 1, 20, -20),
      gridY: mapRange(progress, 0, 1, 36, -24),
    };
  }, [progress]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4efe6] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div
            className="max-w-xl transition-transform duration-200 ease-out"
            style={{ transform: `translateY(${transforms.introY}px)` }}
          >
            <div
              data-services-intro
              className={[
                "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                introVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0",
              ].join(" ")}
            >
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-5 bg-[#b6a58e]" />
                <p className="text-sm uppercase tracking-[0.24em] text-[#8c7c69]">
                  Services
                </p>
                <span className="h-px w-5 bg-[#b6a58e]" />
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#1d1b18] md:text-6xl">
                A cleaner, more complete approach to exceptional design and
                build—no matter the scale.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#584d42]">
                We design with intent, build with discipline, and integrate
                systems so environments feel effortless rather than overdone.
                Whether it's a complete residential transformation, a tailored
                addition, or a carefully considered commercial space, we bring
                the same level of care and attention to every project.
              </p>

              <div className="mt-10 grid gap-4 border-l border-[#d4c7b5] pl-6 text-sm uppercase tracking-[0.18em] text-[#6a5c4d]">
                <span>Concept to construction</span>
                <span>Material-driven interiors</span>
                <span>Outdoor spaces, personalized by you</span>
                <span>Invisible technology integration</span>
              </div>
            </div>
          </div>

          <div
            className="grid gap-px bg-[#d4c7b5] transition-transform duration-200 ease-out md:grid-cols-2"
            style={{ transform: `translateY(${transforms.gridY}px)` }}
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug];
              const isVisible = visibleCards.includes(index);
              const usesLighterSurface =
                service.slug === "luxury-remodels-builds" ||
                service.slug === "outdoor-living-decks" ||
                service.slug === "smart-home-integration";
              const backgroundImage =
                service.slug === "bespoke-concept-design"
                  ? {
                      src: "/images/ServiceCAD.png",
                      position: "right -7.5rem bottom -3rem",
                      size: "135%",
                      opacity: "group-hover:opacity-75 group-focus-within:opacity-75",
                    }
                  : service.slug === "luxury-remodels-builds"
                    ? {
                        src: "/images/REMODELA2.3.png",
                        position: "right 0rem bottom -1.5rem",
                        size: "140%",
                        opacity: "group-hover:opacity-42 group-focus-within:opacity-42",
                      }
                    : service.slug === "outdoor-living-decks"
                      ? {
                          src: "/images/DECKB.png",
                          position: "right -2rem bottom -1.5rem",
                          size: "125%",
                          opacity: "group-hover:opacity-30 group-focus-within:opacity-30",
                        }
                      : service.slug === "smart-home-integration"
                        ? {
                            src: "/images/AUTOMATIONA.png",
                            position: "right -19rem bottom -12.5rem",
                            size: "188%",
                            opacity: "group-hover:opacity-28 group-focus-within:opacity-28",
                          }
                    : null;

              return (
                <article
                  key={service.title}
                  data-service-card
                  data-card-index={index}
                  className={[
                    "group relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    usesLighterSurface ? "bg-[#fcfbf7] hover:bg-[#f7f4ed]" : "bg-[#fbf8f2] hover:bg-[#f3ebde]",
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: isVisible ? "0ms" : `${index * 120}ms`,
                  }}
                >
                  {backgroundImage ? (
                    <div
                      aria-hidden="true"
                      className={[
                        "pointer-events-none absolute inset-0 bg-no-repeat opacity-0 transition-opacity duration-300 ease-out",
                        backgroundImage.opacity,
                      ].join(" ")}
                      style={{
                        backgroundImage: `url('${backgroundImage.src}')`,
                        backgroundPosition: backgroundImage.position,
                        backgroundSize: backgroundImage.size,
                      }}
                    />
                  ) : null}
                  <a
                    href={`/services/${service.slug}`}
                    aria-label={`Explore ${service.title}`}
                    className="relative z-10 flex h-full min-h-[21rem] flex-col p-8 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-1 group-focus-within:-translate-y-1"
                  >
                    <span className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-[#cdbca7] transition-colors duration-200 group-hover:border-[#8c7c69] group-focus-within:border-[#8c7c69]" />

                    <span className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 border-b border-r border-[#cdbca7] transition-colors duration-200 group-hover:border-[#8c7c69] group-focus-within:border-[#8c7c69]" />

                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#8c7c69]">
                        {service.number}
                      </span>
                      <Icon className="h-6 w-6 text-[#3d342b]" />
                    </div>

                    <h3 className="font-serif text-3xl tracking-[-0.03em] text-[#1e1b17] transition-transform duration-200 ease-out group-hover:-translate-y-2 group-focus-within:-translate-y-2">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[5.25rem] max-w-sm text-[15px] leading-7 text-[#6b6054] transition-transform duration-200 ease-out group-hover:-translate-y-2 group-focus-within:-translate-y-2">
                      {service.shortDescription}
                    </p>

                    <div className="group/cta relative mt-auto flex translate-y-2 items-center justify-between gap-4 pt-5 opacity-0 transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-[0.4rem] h-px bg-[#d8ccbc]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-[-2rem] -bottom-[1.15rem] top-[0.4rem] bg-[linear-gradient(180deg,rgba(255,255,252,0.9),rgba(242,234,224,0.82))] opacity-0 shadow-[0_8px_16px_rgba(32,28,23,0.12)] transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
                      />
                      <span className="relative z-10 text-[10px] uppercase tracking-[0.24em] text-[#5d5145]">
                        Explore This Experience
                      </span>

                      <span className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbca7] bg-transparent text-[#2f2821] transition-colors duration-200 group-hover:border-[#8c7c69] group-focus-within:border-[#8c7c69] group-hover/cta:bg-[#201c17] group-hover/cta:text-[#f4efe6] group-focus-within/cta:bg-[#201c17] group-focus-within/cta:text-[#f4efe6]">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-[-6rem] top-20 h-72 w-72 rounded-full bg-[#d9c8b1]/30 blur-3xl transition-transform duration-200 ease-out"
        style={{ transform: `translateY(${transforms.orbY}px)` }}
      />
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";

const cases = [
  {
    treatment: "Smile Transformation",
    before:
      "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?auto=format&fit=crop&w=700&q=80",
    after:
      "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?auto=format&fit=crop&w=700&q=80",
  },
  {
    treatment: "Smile Transformation",
    before:
      "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?auto=format&fit=crop&w=700&q=80",
    after:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=700&q=80",
  },
  {
    treatment: "Smile Transformation",
    before:
      "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?auto=format&fit=crop&w=700&q=80",
    after:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=700&q=80",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            Transformations
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Real Smiles. Real Results.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="overflow-hidden rounded-4xl border border-navy-100 bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift">
                <div className="grid grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={item.before}
                      alt="Before dental treatment"
                      fill
                      sizes="(max-width: 640px) 45vw, 20vw"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-navy/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.after}
                      alt="After dental treatment"
                      fill
                      sizes="(max-width: 640px) 45vw, 20vw"
                      className="object-cover"
                    />
                    <span className="absolute right-2 top-2 rounded-full bg-teal-dark/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-navy">{item.treatment}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-navy-400">
          Results may vary depending on individual treatment.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  {
    number: "01",
    title: "Experienced Dentists",
    description: "A team with 15+ years treating families across Chennai.",
  },
  {
    number: "02",
    title: "Advanced Technology",
    description: "Digital imaging and modern equipment for precise care.",
  },
  {
    number: "03",
    title: "Comfort-Focused Care",
    description: "Calm rooms and gentle techniques, at every appointment.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description: "Clear treatment plans and costs, explained upfront.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy to-navy-800 py-24 text-white sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-15%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-teal/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
            Why SmileCare
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Why Patients Choose SmileCare
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.number} className="border-l-2 border-teal/40 pl-5">
                <span className="font-display text-3xl font-semibold text-teal-light/80">
                  {feature.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1100&q=80"
              alt="Comfortable, modern dental chair and treatment room at SmileCare"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import {
  Stethoscope,
  Sparkles,
  Smile,
  CircleDot,
  AlignCenter,
  Baby,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Stethoscope,
    name: "General Dentistry",
    description: "Preventive and everyday dental care for lasting oral health.",
  },
  {
    icon: Sparkles,
    name: "Cosmetic Dentistry",
    description: "Create a brighter, more confident smile you'll love.",
  },
  {
    icon: Smile,
    name: "Teeth Whitening",
    description: "Professional whitening for a noticeably brighter smile.",
  },
  {
    icon: CircleDot,
    name: "Dental Implants",
    description: "Natural-looking, long-lasting tooth replacement solutions.",
  },
  {
    icon: AlignCenter,
    name: "Orthodontics",
    description: "Straighter teeth and healthier bites, at any age.",
  },
  {
    icon: Baby,
    name: "Pediatric Dentistry",
    description: "Gentle, patient dental care designed for children.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Complete Dental Care Under One Roof
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-500/90 sm:text-lg">
            From routine checkups to advanced cosmetic treatments, our team
            provides comprehensive dental care for every stage of life.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="group h-full rounded-3xl border border-navy-100 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:bg-white hover:shadow-lift">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-colors duration-300 group-hover:bg-teal-dark">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-navy">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy-400">
                  {service.description}
                </p>
                <a
                  href="#appointment"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-dark transition group-hover:gap-2.5"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <a
            href="#appointment"
            className="inline-flex items-center justify-center rounded-full border-2 border-navy px-8 py-4 text-[15px] font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-navy hover:text-white"
          >
            View All Services
          </a>
        </Reveal>
      </div>
    </section>
  );
}

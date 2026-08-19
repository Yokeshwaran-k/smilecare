import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  "Personalized Treatment Plans",
  "Advanced Dental Technology",
  "Gentle & Comfortable Care",
];

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-content items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1100&q=80"
              alt="Dentist performing a gentle dental examination at SmileCare"
              fill
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 max-w-[13rem] rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:-right-8">
            <p className="font-display text-2xl font-semibold text-navy">12,000+</p>
            <p className="mt-1 text-xs leading-snug text-navy-400">
              Successful treatments completed with care
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            About Our Clinic
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
            Dentistry That Puts You First.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-500/90 sm:text-lg">
            At SmileCare Dental Studio, every visit is built around you. We combine
            modern technology with a calm, considered environment so that
            routine checkups and advanced treatments alike feel comfortable,
            transparent, and genuinely reassuring — for every member of the family.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium text-navy-700">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#team"
            className="mt-9 inline-flex items-center gap-2 text-base font-semibold text-teal-dark transition hover:gap-3 hover:text-teal-dark/80"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

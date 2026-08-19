import Image from "next/image";
import { ScanLine, Box, MonitorSmartphone, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const techs = [
  {
    icon: ScanLine,
    name: "Digital X-Rays",
    description: "Faster imaging with significantly lower radiation exposure.",
  },
  {
    icon: Box,
    name: "3D Dental Scanning",
    description: "Precise digital impressions without messy trays.",
  },
  {
    icon: MonitorSmartphone,
    name: "Digital Smile Design",
    description: "Preview your results before treatment even begins.",
  },
  {
    icon: HeartHandshake,
    name: "Pain-Free Treatment",
    description: "Gentle techniques focused on your comfort throughout.",
  },
];

export default function Technology() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-4xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1667133295315-820bb6481730?auto=format&fit=crop&w=1100&q=80"
                alt="Dentist using advanced 3D dental scanning technology"
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
                Our Technology
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Modern Technology. Better Dental Care.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-500/90 sm:text-lg">
                We invest in equipment that makes diagnosis more accurate and
                treatment more comfortable, so you spend less time in the
                chair and leave with better results.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {techs.map((tech, i) => (
                <Reveal key={tech.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
                      <tech.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-navy">{tech.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-400">
                      {tech.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

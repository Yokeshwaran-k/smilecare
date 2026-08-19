import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import Reveal from "./Reveal";

const doctors = [
  {
    name: "Dr. Sarah Williams",
    role: "Lead Dentist",
    specialty: "Cosmetic & General Dentistry",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Michael Anderson",
    role: "Senior Dentist",
    specialty: "Implant & Restorative Dentistry",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. Emily Carter",
    role: "Pediatric Dentist",
    specialty: "Children's Dentistry",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="team" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Meet Your Dental Care Team
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, i) => (
            <Reveal key={doctor.name} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="group overflow-hidden rounded-4xl border border-navy-100 bg-ivory shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}, ${doctor.role} at SmileCare`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 flex translate-y-3 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        aria-label={`${doctor.name} on social media`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-navy transition hover:bg-teal hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-teal-dark">
                    {doctor.role}
                  </p>
                  <p className="mt-1 text-sm text-navy-400">{doctor.specialty}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

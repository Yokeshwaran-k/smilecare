import { CalendarClock, Users, Stethoscope, Star } from "lucide-react";
import Reveal from "./Reveal";

const stats = [
  { icon: CalendarClock, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "5K+", label: "Happy Patients" },
  { icon: Stethoscope, value: "20+", label: "Dental Treatments" },
  { icon: Star, value: "4.9/5", label: "Patient Rating" },
];

export default function Stats() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <div className="mx-auto max-w-content px-6 py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm text-navy-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

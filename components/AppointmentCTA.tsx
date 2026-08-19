import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=70"
          alt=""
          fill
          className="object-cover opacity-15"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy-800/90" />
      </div>

      <Reveal className="relative mx-auto max-w-content px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Love Your Smile?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
          Take the first step toward a healthier, more confident smile.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#appointment"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-4 text-[15px] font-semibold text-navy-950 shadow-lift transition-all hover:-translate-y-0.5 hover:bg-teal-light"
          >
            <CalendarCheck className="h-4 w-4" />
            Book an Appointment
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/60"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}

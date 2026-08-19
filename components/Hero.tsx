import Image from "next/image";
import { ArrowRight, Star, Award, Users } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ivory pt-14 pb-24 sm:pt-20 sm:pb-32">
      {/* ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-dental/10 to-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-navy/5 to-dental/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Left column */}
        <div className="animate-fade-up [animation-delay:0.05s] opacity-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-dark">
            Your Smile. Our Passion.
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Confident Smiles<br className="hidden sm:block" /> Start{" "}
            <span className="text-gradient-teal">Here.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-500/90">
            Modern dentistry designed around your comfort, your health, and the smile you&apos;ve always wanted.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-[15px] font-semibold text-white shadow-lift transition-all hover:-translate-y-0.5 hover:bg-navy-600"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-100 bg-white px-7 py-4 text-[15px] font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal-dark"
            >
              Explore Our Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-navy-100 pt-8 sm:gap-8">
            <div>
              <dt className="sr-only">Happy patients</dt>
              <dd className="flex items-center gap-1.5 font-display text-xl font-semibold text-navy sm:text-2xl">
                <Users className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                5000+
              </dd>
              <p className="mt-1 text-xs text-navy-400 sm:text-sm">Happy Patients</p>
            </div>
            <div>
              <dt className="sr-only">Years experience</dt>
              <dd className="flex items-center gap-1.5 font-display text-xl font-semibold text-navy sm:text-2xl">
                <Award className="h-5 w-5 text-teal-dark" aria-hidden="true" />
                15+ Yrs
              </dd>
              <p className="mt-1 text-xs text-navy-400 sm:text-sm">Experience</p>
            </div>
            <div>
              <dt className="sr-only">Patient rating</dt>
              <dd className="flex items-center gap-1.5 font-display text-xl font-semibold text-navy sm:text-2xl">
                <Star className="h-5 w-5 fill-teal-dark text-teal-dark" aria-hidden="true" />
                4.9/5
              </dd>
              <p className="mt-1 text-xs text-navy-400 sm:text-sm">Patient Rating</p>
            </div>
          </dl>
        </div>

        {/* Right column */}
        <div className="relative animate-scale-in [animation-delay:0.2s] opacity-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl shadow-lift sm:max-w-lg">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Modern SmileCare dental treatment room with contemporary equipment"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 560px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </div>

          {/* floating card: experience */}
          <div className="absolute -left-4 top-8 animate-float-slow rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur sm:-left-10 sm:top-12">
            <p className="font-display text-2xl font-semibold text-navy">15+ Years</p>
            <p className="text-xs font-medium text-navy-400">Experienced Care</p>
          </div>

          {/* floating card: rating */}
          <div className="absolute -right-2 bottom-8 animate-float-slow rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur [animation-delay:1.2s] sm:-right-8 sm:bottom-12">
            <div className="flex gap-0.5 text-teal-dark" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-teal-dark" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold text-navy">4.9 Patient Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

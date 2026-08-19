"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Olivia Martin",
    quote:
      "This clinic completely changed my experience with dental care. Everyone was professional, friendly, and incredibly gentle.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    quote:
      "I used to dread every dental visit. The team here made me feel calm from the very first appointment onward.",
    rating: 5,
  },
  {
    name: "Ananya Krishnan",
    quote:
      "My daughter actually looks forward to her checkups now. The pediatric team is patient, warm, and wonderful with kids.",
    rating: 5,
  },
  {
    name: "James Peterson",
    quote:
      "The implant procedure was smoother than I expected, with clear explanations at every step. Highly recommend SmileCare.",
    rating: 5,
  },
  {
    name: "Priya Natarajan",
    quote:
      "Transparent pricing, modern equipment, and a genuinely caring staff. It's rare to find all three in one clinic.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5500);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    pauseAutoplay();
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
    touchStartX.current = null;
  };

  return (
    <section id="testimonials" className="bg-navy py-24 text-white sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What Our Patients Say
          </h2>
        </Reveal>

        <div
          className="relative mt-16"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="mx-auto max-w-2xl overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <figure className="rounded-4xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
                    <Quote
                      className="mx-auto h-8 w-8 text-teal-light/50"
                      aria-hidden="true"
                    />
                    <div
                      className="mt-5 flex justify-center gap-1 text-teal-light"
                      aria-hidden="true"
                    >
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-teal-light" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 font-display text-base font-semibold text-white">
                      — {t.name}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              prev();
            }}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/15 sm:flex lg:-left-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              pauseAutoplay();
              next();
            }}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/15 sm:flex lg:-right-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => {
                  pauseAutoplay();
                  goTo(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-7 bg-teal-light" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* mobile prev/next */}
          <div className="mt-6 flex justify-center gap-4 sm:hidden">
            <button
              type="button"
              onClick={() => {
                pauseAutoplay();
                prev();
              }}
              aria-label="Previous testimonial"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                pauseAutoplay();
                next();
              }}
              aria-label="Next testimonial"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

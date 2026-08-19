"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you accept new patients?",
    a: "Yes! SmileCare is currently welcoming new patients of all ages, with same-day appointments often available.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a checkup and cleaning every six months, though your dentist may suggest a different schedule based on your oral health.",
  },
  {
    q: "Do you offer painless dental treatments?",
    a: "Absolutely. We use modern, gentle techniques and numbing options designed to keep every visit as comfortable as possible.",
  },
  {
    q: "How much does teeth whitening cost?",
    a: "Pricing depends on the whitening method and your goals. We'll walk you through clear, transparent options during your consultation.",
  },
  {
    q: "Do you provide dental implants?",
    a: "Yes, our team offers full implant services, from initial planning and placement through to final restoration.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, our pediatric dentist specializes in gentle, kid-friendly care to help children feel at ease from their very first visit.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "We work with most major dental insurance providers. Contact our front desk and we'll help verify your coverage before your visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-navy">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-teal-dark transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-navy-400">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

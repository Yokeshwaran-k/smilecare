"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Our Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10"
      >
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            SMILE<span className="text-teal-dark">CARE</span>
          </span>
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-dental sm:text-[11px]">
            Advanced Dental Studio
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-navy-700 transition-colors hover:text-teal-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-lift"
          >
            <CalendarCheck className="h-4 w-4" />
            Book an Appointment
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-navy transition hover:bg-navy-50 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden bg-white shadow-soft transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[28rem] border-t border-navy-100" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-navy-700 transition hover:bg-mist hover:text-teal-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-600"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              SMILE<span className="text-teal-light">CARE</span>
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
              Advanced Dental Studio
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Modern dentistry designed around your comfort, your health, and
              the smile you&apos;ve always wanted.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-teal-light hover:text-teal-light"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition hover:text-teal-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm transition hover:text-teal-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <a href="tel:+919876543210" className="transition hover:text-teal-light">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <a href="mailto:hello@smilecare.com" className="transition hover:text-teal-light">
                  hello@smilecare.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-light" />
                <span>123 Anna Nagar Main Road, Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/40 sm:flex-row lg:px-10">
          <p>&copy; 2026 SmileCare Dental Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-teal-light">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-teal-light">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

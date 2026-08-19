import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import Reveal from "./Reveal";

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
            Visit Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Get In Touch With SmileCare
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="overflow-hidden rounded-4xl border border-navy-100 shadow-soft">
            <div
              role="img"
              aria-label="Map placeholder showing SmileCare Dental Studio location in Anna Nagar, Chennai"
              className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-navy-50 to-mist sm:h-full sm:min-h-[26rem]"
            >
              <div className="flex flex-col items-center gap-3 text-navy-400">
                <MapPin className="h-9 w-9 text-teal-dark" />
                <p className="text-sm font-medium">Google Maps — Anna Nagar, Chennai</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-navy">
                SmileCare Dental Studio
              </h3>
              <p className="mt-2 flex items-start gap-3 text-navy-500">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-dark" />
                123 Anna Nagar Main Road, Chennai, Tamil Nadu
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-ivory px-5 py-4 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <Phone className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs text-navy-400">Call Us</p>
                  <p className="text-sm font-semibold text-navy">+91 98765 43210</p>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-ivory px-5 py-4 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <MessageCircle className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs text-navy-400">WhatsApp</p>
                  <p className="text-sm font-semibold text-navy">Chat With Us</p>
                </div>
              </a>

              <a
                href="mailto:hello@smilecare.com"
                className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-ivory px-5 py-4 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-soft sm:col-span-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-xs text-navy-400">Email</p>
                  <p className="text-sm font-semibold text-navy">hello@smilecare.com</p>
                </div>
              </a>
            </div>

            <div className="rounded-2xl border border-navy-100 bg-ivory p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-navy">
                <Clock className="h-4 w-4 text-teal-dark" />
                Opening Hours
              </p>
              <ul className="mt-4 space-y-2.5">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-navy-500">{h.day}</span>
                    <span className="font-medium text-navy">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

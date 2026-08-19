"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  treatment: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  treatment: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

const treatments = [
  "General Checkup",
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Pediatric Dentistry",
  "Other",
];

function validate(values: FormState): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) errors.name = "Please enter your full name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.date) errors.date = "Please choose a preferred date.";
  if (!values.time) errors.time = "Please choose a preferred time.";
  if (!values.treatment) errors.treatment = "Please select a treatment.";

  return errors;
}

export default function AppointmentForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    // Frontend-only demo: simulate a brief request before confirming.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setValues(initialState);
    }, 900);
  };

  const inputClasses = (field: keyof FormState) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-[15px] text-navy placeholder:text-navy-300 transition focus:outline-none focus:ring-2 focus:ring-teal/40 ${
      errors[field] ? "border-red-400" : "border-navy-100 focus:border-teal"
    }`;

  if (submitted) {
    return (
      <Reveal className="mx-auto flex max-w-xl flex-col items-center rounded-4xl border border-teal/30 bg-teal/5 px-8 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold text-navy">
          Thank you! Your appointment request has been received.
        </h3>
        <p className="mt-3 max-w-md text-navy-400">
          Our front-desk team will call or email you shortly to confirm your
          preferred date and time.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-navy px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Book Another Appointment
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto grid max-w-3xl gap-6 rounded-4xl border border-navy-100 bg-white p-6 shadow-card sm:p-10"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              className={inputClasses("name")}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={handleChange}
              className={inputClasses("phone")}
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-xs text-red-500">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            className={inputClasses("email")}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="date" className="mb-2 block text-sm font-semibold text-navy-700">
              Preferred Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              className={inputClasses("date")}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
            />
            {errors.date && (
              <p id="date-error" className="mt-1.5 text-xs text-red-500">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="time" className="mb-2 block text-sm font-semibold text-navy-700">
              Preferred Time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              value={values.time}
              onChange={handleChange}
              className={inputClasses("time")}
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? "time-error" : undefined}
            />
            {errors.time && (
              <p id="time-error" className="mt-1.5 text-xs text-red-500">
                {errors.time}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="treatment" className="mb-2 block text-sm font-semibold text-navy-700">
              Treatment
            </label>
            <select
              id="treatment"
              name="treatment"
              value={values.treatment}
              onChange={handleChange}
              className={inputClasses("treatment")}
              aria-invalid={!!errors.treatment}
              aria-describedby={errors.treatment ? "treatment-error" : undefined}
            >
              <option value="">Select</option>
              {treatments.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.treatment && (
              <p id="treatment-error" className="mt-1.5 text-xs text-red-500">
                {errors.treatment}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-700">
            Message <span className="font-normal text-navy-300">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            className={inputClasses("message")}
            placeholder="Tell us a little about what you'd like to address"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-[15px] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending Request...
            </>
          ) : (
            <>
              Request Appointment
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </Reveal>
  );
}

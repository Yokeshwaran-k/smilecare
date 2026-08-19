import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Technology from "@/components/Technology";
import Doctors from "@/components/Doctors";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import AppointmentCTA from "@/components/AppointmentCTA";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChooseUs />
        <Technology />
        <Doctors />
        <BeforeAfter />
        <Testimonials />
        <AppointmentCTA />

        <section id="appointment" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-content px-6 lg:px-10">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
                Book Now
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Request Your Appointment
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-500/90 sm:text-lg">
                Fill in your details below and our team will confirm your
                visit shortly. No account or payment needed.
              </p>
            </Reveal>

            <div className="mt-14">
              <AppointmentForm />
            </div>
          </div>
        </section>

        <Contact />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

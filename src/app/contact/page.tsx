import type { Metadata } from "next";
import PageTransition from "@/components/ui/PageTransition";
import { SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Art Kumthekar.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-surface-dark flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="hero-reveal hero-delay-1 text-navy-light font-medium text-sm uppercase tracking-widest mb-4">Connect</p>
          <h1 className="hero-reveal hero-delay-2 text-5xl md:text-7xl font-bold tracking-tight gradient-text">Get in Touch</h1>
          <p className="hero-reveal hero-delay-3 mt-6 text-text-secondary text-lg">
            I am always interested in connecting with fellow investors, entrepreneurs,
            and anyone passionate about building great companies.
          </p>
          <div className="hero-reveal hero-delay-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center gap-3 px-8 py-3 bg-navy text-white rounded-full hover:bg-navy-light transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center gap-3 px-8 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Me
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

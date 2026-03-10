import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/experience/Timeline";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/ui/PageTransition";
import { experienceData, educationData } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline and professional experience of Art Kumthekar.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <section className="bg-surface-dark pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="hero-reveal hero-delay-1 text-navy-light font-medium text-sm uppercase tracking-widest mb-4">Career</p>
          <h1 className="hero-reveal hero-delay-2 text-5xl md:text-7xl font-bold tracking-tight gradient-text">Experience</h1>
          <p className="hero-reveal hero-delay-3 mt-4 text-text-secondary text-lg max-w-2xl">My professional journey across strategy, private equity, and technology.</p>
        </div>
      </section>

      <Container className="py-20">
        <ScrollReveal>
          <SectionHeading title="Professional Experience" />
          <Timeline items={experienceData} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-20">
            <SectionHeading title="Education" />
            <Timeline items={educationData} />
          </div>
        </ScrollReveal>
      </Container>
    </PageTransition>
  );
}

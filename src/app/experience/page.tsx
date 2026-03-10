import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/experience/Timeline';
import PageTransition from '@/components/ui/PageTransition';
import { experienceData, educationData } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Career timeline and professional experience of Art Kumthekar.',
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Container className="py-20">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />
        <Timeline items={experienceData} />

        <div className="mt-20">
          <SectionHeading title="Education" />
          <Timeline items={educationData} />
        </div>
      </Container>
    </PageTransition>
  );
}

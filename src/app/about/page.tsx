import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import PageTransition from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Art Kumthekar.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Container className="py-20">
        <section className="mb-20">
          <SectionHeading title="About Me" />
          <div className="prose prose-gray prose-lg max-w-none">
            <p>
              I am an investment professional based in Chicago with a passion for
              understanding how businesses create value and identifying opportunities
              for growth. My career has been built at the intersection of strategy,
              private equity, and technology.
            </p>
            <p>
              I started my career at <strong>EY-Parthenon</strong>, where I spent two
              years leading private equity workstreams across multiple industries,
              developing a strong foundation in commercial due diligence, market
              analysis, and competitive strategy.
            </p>
            <p>
              I then joined <strong>McKinsey &amp; Company</strong>, where I spent nearly
              three years building deep expertise in commercial due diligence for
              large-cap private equity firms. Over the course of 15+ engagements, I
              led critical workstreams evaluating target assets across healthcare,
              technology, CPG, and education — directly informing investment
              decisions on transactions valued at $500M to over $1B. In my final
              engagements, I served as acting Engagement Manager, leading teams and
              translating complex market dynamics into actionable value-creation
              opportunities.
            </p>
            <p>
              In 2025, I co-founded <strong>TAM Lab</strong>, an AI-powered venture
              focused on transforming how PE and consulting firms conduct Total
              Addressable Market analysis. We are building tools that embed
              best-practice consulting methods directly into analyst workflows.
            </p>
            <p>
              Today, I am pursuing my <strong>MBA at the University of Chicago
              Booth School of Business</strong> (on full sponsorship from McKinsey)
              while working as an Investor at <strong>Energize Capital</strong>, where
              I evaluate high-growth technology companies across the climate tech and
              energy transition landscape.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <SectionHeading title="Education" />
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-48 shrink-0">
                <span className="text-sm text-gray-400">2025 – 2027</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  University of Chicago Booth School of Business
                </h3>
                <p className="text-navy font-medium">Master of Business Administration</p>
                <p className="text-sm text-gray-500 mt-1">
                  Concentrations in Finance and Strategic Management. Full tuition
                  sponsorship from McKinsey &amp; Company. Active member of Booth Private
                  Equity group.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="sm:w-48 shrink-0">
                <span className="text-sm text-gray-400">2016 – 2020</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  University of Michigan Ross School of Business
                </h3>
                <p className="text-navy font-medium">Bachelor of Business Administration</p>
                <p className="text-sm text-gray-500 mt-1">
                  Concentrations in Finance and Strategy. Graduated with Distinction
                  (GPA 3.54). Minor in German. Study abroad at WHU Otto Beisheim
                  School of Management near Frankfurt, Germany.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading title="Beyond Work" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Sports</h3>
              <p className="text-sm text-gray-500">
                Lifelong Michigan Wolverines and Cincinnati Bengals fan. Played
                water polo for 10 years and was a 2x Big Ten Club Champion.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">German Language</h3>
              <p className="text-sm text-gray-500">
                Studied German since middle school. Read the Harry Potter series
                in German. Studied abroad at WHU near Frankfurt.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-sm text-gray-500">
                President of a family-owned ed-tech firm serving 100 students,
                dedicated to making quality education accessible.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Entrepreneurship</h3>
              <p className="text-sm text-gray-500">
                Passionate about building products that solve real problems.
                Currently building TAM Lab to transform market analysis for
                investment professionals.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </PageTransition>
  );
}

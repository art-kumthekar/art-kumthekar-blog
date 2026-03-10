import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-24 md:py-32 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-navy font-medium mb-4">Welcome</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Art Kumthekar
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400 font-light">
          Investment Professional &middot; Entrepreneur &middot; Strategic Thinker
        </p>
        <p className="mt-6 text-gray-600 max-w-2xl text-lg leading-relaxed">
          I invest in high-growth technology companies at Energize Capital, co-founded an
          AI venture, and built my career across McKinsey and EY-Parthenon advising
          private equity firms on commercial strategy. I write about investing, markets,
          and building companies.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-dark transition-colors font-medium"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

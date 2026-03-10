import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-surface-dark overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,95,0.3)_0%,_transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <p className="hero-reveal hero-delay-1 text-navy-light font-medium mb-4 text-sm uppercase tracking-widest">
          Insights & Analysis
        </p>
        <h1 className="hero-reveal hero-delay-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
          <span className="gradient-text">Art Kumthekar</span>
        </h1>
        <p className="hero-reveal hero-delay-3 mt-6 text-xl md:text-2xl text-text-secondary font-light max-w-2xl leading-relaxed">
          Investor, strategist, and builder exploring the intersection of capital and impact. Writing about markets, private equity, and building companies.
        </p>
        <div className="hero-reveal hero-delay-4 mt-10 flex flex-wrap gap-4">
          <Link
            href="/about"
            className="glow-button inline-flex items-center px-8 py-3 bg-navy text-white rounded-full hover:bg-navy-light transition-all duration-300 font-medium"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/5 hover:text-white transition-all duration-300 font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
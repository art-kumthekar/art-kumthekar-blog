import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-surface-dark flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
        <p className="mt-6 text-text-secondary text-lg">This page could not be found.</p>
        <Link
          href="/"
          className="mt-8 inline-block px-8 py-3 bg-navy text-white rounded-full hover:bg-navy-light transition-all duration-300 font-medium"
        >
          Go back home
        </Link>
      </div>
    </section>
  );
}

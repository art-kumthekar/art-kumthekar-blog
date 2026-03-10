import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Art Kumthekar. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="hover:text-gray-600 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

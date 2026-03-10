'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
        <span className="text-lg font-semibold text-gray-900 tracking-tight">
          Art Kumthekar
        </span>
        <button
          onClick={onClose}
          className="p-2 text-gray-500 hover:text-gray-900"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="px-6 py-8">
        <ul className="space-y-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="text-xl font-medium text-gray-900 hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

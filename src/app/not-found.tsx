import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="mt-4 text-gray-500">This page could not be found.</p>
      <Link
        href="/"
        className="mt-8 inline-block text-navy hover:underline"
      >
        Go back home
      </Link>
    </Container>
  );
}

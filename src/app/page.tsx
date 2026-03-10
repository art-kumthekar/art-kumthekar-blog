import Container from '@/components/ui/Container';
import Hero from '@/components/home/Hero';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import PageTransition from '@/components/ui/PageTransition';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <PageTransition>
      <Hero />
      <Container className="py-20">
        <FeaturedPosts posts={posts} />
      </Container>
    </PageTransition>
  );
}

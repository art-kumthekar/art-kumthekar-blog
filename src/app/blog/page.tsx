import type { Metadata } from 'next';
import { Suspense } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/blog/BlogCard';
import CategoryFilter from '@/components/blog/CategoryFilter';
import PageTransition from '@/components/ui/PageTransition';
import { getAllPosts } from '@/lib/posts';
import { BLOG_CATEGORIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on investing, private equity, venture capital, and career advice.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const allPosts = getAllPosts();
  const posts = params.category
    ? allPosts.filter((p) => p.frontmatter.category === params.category)
    : allPosts;

  return (
    <PageTransition>
      <Container className="py-20">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on investing, markets, and building companies"
        />
        <Suspense fallback={null}>
          <CategoryFilter categories={BLOG_CATEGORIES} />
        </Suspense>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-gray-400 text-center py-12">
            No posts found in this category yet.
          </p>
        )}
      </Container>
    </PageTransition>
  );
}

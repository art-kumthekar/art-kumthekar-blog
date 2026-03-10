import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Hero from "@/components/home/Hero";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageTransition from "@/components/ui/PageTransition";
import { getAllPosts } from "@/lib/posts";
import { BLOG_CATEGORIES } from "@/lib/constants";

export default async function HomePage({
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
      <Hero />
      <Container className="py-20">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Latest Writing</h2>
              <p className="mt-2 text-text-secondary text-lg">Thoughts on investing, markets, and building companies</p>
            </div>
            <Suspense fallback={null}>
              <CategoryFilter categories={BLOG_CATEGORIES} />
            </Suspense>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 80}>
              <BlogCard post={post} />
            </ScrollReveal>
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
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import Container from '@/components/ui/Container';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import PageTransition from '@/components/ui/PageTransition';
import { mdxComponents } from '@/components/mdx/MDXComponents';
import { getPostBySlug, getPostSlugs, getAllPosts } from '@/lib/posts';
import { PostFrontmatter } from '@/lib/types';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const source = getPostBySlug(slug);
  if (!source) return {};

  const { frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  });

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getPostBySlug(slug);
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  const stats = readingTime(source);

  return (
    <PageTransition>
      <Container className="py-20">
        <article className="max-w-3xl mx-auto">
          <BlogPostHeader
            title={frontmatter.title}
            date={frontmatter.date}
            category={frontmatter.category}
            readingTime={stats.text}
            author={frontmatter.author}
          />
          <div className="prose prose-gray prose-lg max-w-none mt-10 prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-navy">
            {content}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="text-navy hover:underline text-sm"
            >
              &larr; Back to all posts
            </Link>
          </div>
        </article>
      </Container>
    </PageTransition>
  );
}

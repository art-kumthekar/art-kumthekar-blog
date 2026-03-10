import { Post } from '@/lib/types';
import BlogCard from '@/components/blog/BlogCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section>
      <div className="flex items-end justify-between mb-12">
        <SectionHeading title="Latest Writing" />
        <Link
          href="/blog"
          className="text-sm text-navy hover:underline hidden sm:block mb-12"
        >
          View all posts &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

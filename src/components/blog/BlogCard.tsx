import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { Post } from '@/lib/types';

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <Badge label={post.frontmatter.category} />
          <span className="text-xs text-gray-400">{post.readingTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-navy transition-colors">
          {post.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2 flex-1">
          {post.frontmatter.description}
        </p>
        <time className="block mt-4 text-xs text-gray-400">
          {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </article>
    </Link>
  );
}

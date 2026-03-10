import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { Post } from "@/lib/types";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={"/blog/" + post.slug} className="group block">
      <article className="relative p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy via-navy-light to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </article>
    </Link>
  );
}
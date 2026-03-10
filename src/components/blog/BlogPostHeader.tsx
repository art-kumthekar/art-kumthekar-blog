import Badge from '@/components/ui/Badge';

interface Props {
  title: string;
  date: string;
  category: string;
  readingTime: string;
  author: string;
}

export default function BlogPostHeader({
  title,
  date,
  category,
  readingTime,
  author,
}: Props) {
  return (
    <header className="border-b border-gray-100 pb-8">
      <Badge label={category} />
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
        {title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
        <span>{author}</span>
        <span aria-hidden>&middot;</span>
        <time>
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span aria-hidden>&middot;</span>
        <span>{readingTime}</span>
      </div>
    </header>
  );
}

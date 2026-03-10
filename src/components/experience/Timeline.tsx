import { TimelineEntry } from '@/lib/types';
import TimelineItem from './TimelineItem';

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="relative">
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
}

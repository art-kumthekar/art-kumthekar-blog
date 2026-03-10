import { TimelineEntry } from "@/lib/types";

export default function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 group-hover:bg-navy/30 transition-colors" />
      {/* Dot */}
      <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-gradient-to-br from-navy to-navy-light border-2 border-white ring-2 ring-gray-200 group-hover:ring-navy/30 transition-all" />

      <div className="group-hover:translate-x-1 transition-transform duration-300">
        <span className="text-sm text-text-secondary">{item.dateRange}</span>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">
          {item.title}
        </h3>
        <p className="text-navy font-medium">{item.organization}</p>
        <p className="text-sm text-text-secondary">{item.location}</p>
        <ul className="mt-3 space-y-1.5">
          {item.description.map((d, i) => (
            <li key={i} className="text-gray-600 text-sm leading-relaxed">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
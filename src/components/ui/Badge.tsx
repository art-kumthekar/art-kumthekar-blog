export default function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent-light text-navy">
      {label}
    </span>
  );
}

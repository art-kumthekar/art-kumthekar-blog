export default function SectionHeading({
  title,
  subtitle,
  gradient = false,
  light = false,
}: {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  light?: boolean;
}) {
  return (
    <div className="mb-12">
      <h2
        className={"text-3xl md:text-4xl font-bold tracking-tight " + (
          gradient ? "gradient-text-blue" : light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={"mt-3 text-lg " + (light ? "text-text-secondary" : "text-gray-500")}>{subtitle}</p>
      )}
    </div>
  );
}
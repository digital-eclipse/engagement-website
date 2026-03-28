export function SectionHeading({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

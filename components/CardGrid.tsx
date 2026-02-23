type CardGridProps = {
  children: React.ReactNode;
  columns?: 2 | 3;
};

export default function CardGrid({ children, columns = 3 }: CardGridProps) {
  return (
    <div
      className={`grid gap-6 ${
        columns === 3
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 md:grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

type CardProps = {
  title?: string;
  number?: number;
  children: React.ReactNode;
  accent?: "navy" | "sage" | "coral" | "gold";
  className?: string;
};

const accentBorderColors = {
  navy: "border-t-navy",
  sage: "border-t-sage",
  coral: "border-t-coral",
  gold: "border-t-gold",
};

export function Card({
  title,
  number,
  children,
  accent = "navy",
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-card rounded-lg border border-border border-t-2 ${accentBorderColors[accent]} p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${className}`}
    >
      {number !== undefined && (
        <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-2">
          {String(number).padStart(2, "0")}
        </span>
      )}
      {title && (
        <h3 className="font-display text-lg font-semibold text-navy mb-3">
          {title}
        </h3>
      )}
      <div className="text-foreground/70 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

type ResourceCardProps = {
  title: string;
  url: string;
  description: string;
  duration?: string;
  tag?: string;
};

export default function ResourceCard({
  title,
  url,
  description,
  duration,
  tag,
}: ResourceCardProps) {
  return (
    <a
      href={url.startsWith("http") ? url : `https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-card rounded-lg border border-border p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {tag && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold mb-2">
              {tag}
            </span>
          )}
          <h4 className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors">
            {title}
          </h4>
          <p className="text-sm text-foreground/60 mt-1 leading-relaxed">
            {description}
          </p>
        </div>
        {duration && (
          <span className="shrink-0 text-xs font-medium text-foreground/40 bg-background px-2 py-1 rounded">
            {duration}
          </span>
        )}
      </div>
      <span className="inline-block mt-3 text-xs text-navy font-medium group-hover:underline">
        Visit resource &rarr;
      </span>
    </a>
  );
}

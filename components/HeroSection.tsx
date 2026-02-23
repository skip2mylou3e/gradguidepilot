import Link from "next/link";

type HeroProps = {
  headline: string;
  subhead: string;
  accent?: "navy" | "sage" | "coral" | "neutral";
  ctas?: { label: string; href: string; variant: "primary" | "outline" }[];
};

const accentColors = {
  navy: "text-navy",
  sage: "text-sage",
  coral: "text-coral",
  neutral: "text-navy",
};

export default function HeroSection({
  headline,
  subhead,
  accent = "navy",
  ctas,
}: HeroProps) {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-content mx-auto">
        <h1
          className={`font-display text-4xl md:text-6xl font-bold leading-tight ${accentColors[accent]} animate-fade-up`}
        >
          {headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed animate-fade-up-delay-1">
          {subhead}
        </p>
        {ctas && ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-medium transition-all ${
                  cta.variant === "primary"
                    ? "bg-navy text-white hover:bg-navy/90"
                    : "border-2 border-gold text-gold hover:bg-gold hover:text-white"
                }`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-content mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-navy font-semibold">
            Project GradGuide
          </p>
          <p className="text-sm text-foreground/60 mt-1">
            Spring 2026 Pilot
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@gradguide.work"
              className="text-sm text-foreground/70 hover:text-navy transition-colors"
            >
              info@gradguide.work
            </a>
            <a
              href="https://linkedin.com/in/chrislouie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-navy transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-xs text-foreground/40">
            A volunteer initiative. Not affiliated with any university or
            employer.
          </p>
        </div>
      </div>
    </footer>
  );
}

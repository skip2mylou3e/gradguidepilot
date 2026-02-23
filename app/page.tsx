import HeroSection from "@/components/HeroSection";
import CardGrid, { Card } from "@/components/CardGrid";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="A map for the maze."
        subhead="Project GradGuide connects college students with experienced professionals for personalized, weekly coaching through the spring recruiting season."
        accent="navy"
        ctas={[
          { label: "I'm a Student →", href: "/for-students", variant: "primary" },
          { label: "I'm a Guide →", href: "/for-guides", variant: "outline" },
        ]}
      />

      {/* What is GradGuide */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold text-navy mb-6">
              What is GradGuide?
            </h2>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                AI has changed hiring faster than anyone expected. Entry-level
                roles are fewer and harder to land, and the standard advice —
                apply, network, follow up — isn&rsquo;t enough when you don&rsquo;t
                know how the other side of the table actually works.
              </p>
              <p>
                Project GradGuide is a pilot program built to bridge that gap. A
                small cohort of college students are matched one-on-one with
                experienced professionals who volunteer their time to coach them
                through the spring job and internship search — resume review,
                networking strategy, interview prep, and everything in between.
              </p>
              <p>
                It&rsquo;s personal. It&rsquo;s practical. And it&rsquo;s built
                on the belief that the best part of talent work is connecting
                people to opportunity.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 flex items-center">
            <div className="bg-navy rounded-lg p-8 text-white w-full">
              <p className="font-display text-4xl font-bold text-gold mb-2">
                14
              </p>
              <p className="text-white/80 text-sm">
                participants in the Spring 2026 pilot — 6 guides and 8 students,
                matched one-on-one for 12 weeks of weekly coaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            How it works
          </h2>
          <CardGrid columns={3}>
            <Card number={1} title="Match" accent="gold">
              <p>
                Students and guides are matched based on industry interest,
                timezone, and availability.
              </p>
            </Card>
            <Card number={2} title="Meet" accent="gold">
              <p>
                Weekly 30&ndash;45 minute sessions from late February through
                mid-May. No formal agenda required — just consistent, honest
                conversation.
              </p>
            </Card>
            <Card number={3} title="Move" accent="gold">
              <p>
                Students leave with better materials, a stronger network, and a
                clearer sense of how to navigate the search. Guides get the
                satisfaction of opening a door.
              </p>
            </Card>
          </CardGrid>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            Who this is for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Students panel */}
            <div className="bg-sage/10 border border-sage/30 rounded-lg p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sage mb-3">
                Students
              </span>
              <p className="text-foreground/70 leading-relaxed">
                You&rsquo;re in college and trying to land something this spring
                — an internship or a full-time role. You may feel like you
                don&rsquo;t know the right people, don&rsquo;t know how the
                process really works, or have been applying and hearing nothing.
                GradGuide gives you a dedicated advisor who does.
              </p>
            </div>
            {/* Guides panel */}
            <div className="bg-coral/10 border border-coral/30 rounded-lg p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-coral mb-3">
                Guides
              </span>
              <p className="text-foreground/70 leading-relaxed">
                You work in a professional field and remember what it felt like
                to not know how any of this worked. GradGuide gives you a
                structured, low-commitment way to pay that forward. One student,
                one hour a week, twelve weeks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

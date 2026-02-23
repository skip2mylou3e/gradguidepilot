import HeroSection from "@/components/HeroSection";
import CardGrid, { Card } from "@/components/CardGrid";
import SessionOneGuide from "@/components/SessionOneGuide";

export default function ForGuides() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="You know how this works. They don't yet."
        subhead="A practical guide to running sessions that actually move the needle — including how to start."
        accent="coral"
      />

      {/* What You've Signed Up For */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            What you&rsquo;ve signed up for
          </h2>
          <div className="max-w-3xl space-y-4 text-foreground/70 leading-relaxed">
            <p>
              You&rsquo;ve committed to 30&ndash;45 minutes per student per
              week, for 12 weeks. That&rsquo;s it. No formal deliverables, no
              reports, no performance reviews. What you&rsquo;re giving is your
              time, your honesty, and your perspective — which is exactly what
              these students can&rsquo;t get from a career services office or a
              YouTube video.
            </p>
            <p>
              Your student is in the middle of a real search. The spring
              internship window is already open. Some of your students need to
              move fast. Your job is to help them move smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Two Types of Students */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            Two types of students (recognize them early)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border border-t-2 border-t-sage rounded-lg p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sage mb-3">
                Still exploring
              </span>
              <p className="text-foreground/70 leading-relaxed">
                Not sure what they want, haven&rsquo;t applied much. Needs help
                narrowing to 2&ndash;3 directions quickly. Don&rsquo;t let
                exploration become a reason to delay action.
              </p>
            </div>
            <div className="bg-card border border-border border-t-2 border-t-coral rounded-lg p-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-coral mb-3">
                Already in motion
              </span>
              <p className="text-foreground/70 leading-relaxed">
                Has applications out, may have interviews, might be getting
                rejections. Needs tactical, real-time support. Move into
                execution mode immediately.
              </p>
            </div>
          </div>
          <div className="bg-coral/5 border border-coral/20 rounded-lg p-5 max-w-3xl">
            <p className="text-foreground/70 italic">
              Ask in Session 1: &ldquo;Do you have anything submitted or in
              progress right now?&rdquo; The answer tells you what gear to start
              in.
            </p>
          </div>
        </div>
      </section>

      {/* Session 1 Guide */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Session 1 — Your most important session
          </h2>
          <p className="text-foreground/60 mb-10 max-w-3xl">
            This is the session that sets the tone for everything that follows.
            Here&rsquo;s the full guide.
          </p>
          <SessionOneGuide />
        </div>
      </section>

      {/* Week-by-Week Arc */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            The week-by-week arc
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-coral/30">
                  <th className="py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-coral">
                    Weeks
                  </th>
                  <th className="py-3 pr-4 text-xs font-semibold uppercase tracking-wider text-coral">
                    Theme
                  </th>
                  <th className="py-3 text-xs font-semibold uppercase tracking-wider text-coral">
                    Focus
                  </th>
                </tr>
              </thead>
              <tbody className="text-foreground/70 text-sm">
                {[
                  {
                    weeks: "1",
                    theme: "Intake & Planning",
                    focus:
                      "Session 1 guide above — diagnostic and shared plan.",
                  },
                  {
                    weeks: "2",
                    theme: "Resume & Story",
                    focus:
                      "Narrative clarity, not cosmetic edits. The 'so what' test.",
                  },
                  {
                    weeks: "3–4",
                    theme: "Network & Outreach",
                    focus:
                      "10 target contacts, 3–5 messages sent this week.",
                  },
                  {
                    weeks: "5–6",
                    theme: "Applications in Flight",
                    focus:
                      "Quality over volume. Real-time cover letter review.",
                  },
                  {
                    weeks: "7–8",
                    theme: "Interviews & Audit",
                    focus:
                      "Mock interview if scheduled. Honest audit if stuck.",
                  },
                  {
                    weeks: "9–10",
                    theme: "Offers & Decisions",
                    focus: "Evaluate, negotiate, redirect if needed.",
                  },
                  {
                    weeks: "11–12",
                    theme: "Landing & Looking Ahead",
                    focus:
                      "Wrap up, consolidate learning, sustain momentum.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-4 font-semibold text-navy whitespace-nowrap">
                      {row.weeks}
                    </td>
                    <td className="py-4 pr-4 font-medium">{row.theme}</td>
                    <td className="py-4">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips for Great Sessions */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            Tips for great sessions
          </h2>
          <CardGrid columns={2}>
            <Card title="Be specific" accent="coral">
              <p>
                Generic advice is forgettable. Specific advice (&ldquo;send
                three LinkedIn messages this week, here&rsquo;s a
                template&rdquo;) creates movement.
              </p>
            </Card>
            <Card title="Be direct" accent="coral">
              <p>
                Kind, but direct. Students don&rsquo;t benefit from vague
                encouragement.
              </p>
            </Card>
            <Card title="You don't have to have all the answers" accent="coral">
              <p>
                &ldquo;I don&rsquo;t know — let me think about that&rdquo; is a
                perfectly good response.
              </p>
            </Card>
            <Card title="Watch for the real blocker" accent="coral">
              <p>
                &ldquo;I just haven&rsquo;t had time&rdquo; usually means
                something else. Go one level deeper.
              </p>
            </Card>
            <Card title="Flag issues early" accent="coral">
              <p>
                If a student goes quiet or sessions aren&rsquo;t happening, tell
                the program team. Don&rsquo;t let it drift.
              </p>
            </Card>
            <Card title="Referrals are on your terms only" accent="coral">
              <p>
                You&rsquo;re never obligated to introduce a student to anyone.
                If you do, make sure you&rsquo;d genuinely vouch for them.
              </p>
            </Card>
          </CardGrid>
        </div>
      </section>

      {/* Ground Rules */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Ground rules
          </h2>
          <div className="max-w-3xl space-y-4 text-foreground/70 leading-relaxed">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-coral font-bold shrink-0">&bull;</span>
                Keep sessions professional and focused on career development.
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold shrink-0">&bull;</span>
                All conversations are confidential unless otherwise agreed.
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold shrink-0">&bull;</span>
                No financial exchanges — this is a volunteer program.
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold shrink-0">&bull;</span>
                If something isn&rsquo;t working, flag it early at{" "}
                <a
                  href="mailto:info@gradguide.work"
                  className="text-coral hover:underline"
                >
                  info@gradguide.work
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Need Support */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Need support?
          </h2>
          <p className="text-foreground/70 mb-2">
            The program team checks in regularly and is available for guidance,
            mediation, or a quick consult anytime.
          </p>
          <a
            href="mailto:info@gradguide.work"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-navy text-white rounded-md font-medium hover:bg-navy/90 transition-colors"
          >
            info@gradguide.work
          </a>
        </div>
      </section>
    </>
  );
}

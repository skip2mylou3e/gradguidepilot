import HeroSection from "@/components/HeroSection";
import CardGrid, { Card } from "@/components/CardGrid";

export default function ForStudents() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="Your search, with a map."
        subhead="Here's what to expect, how to show up, and how to make the most of the next 12 weeks."
        accent="sage"
      />

      {/* What You've Signed Up For */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            What you&rsquo;ve signed up for
          </h2>
          <div className="max-w-3xl space-y-4 text-foreground/70 leading-relaxed">
            <p>
              You&rsquo;ve been matched with a guide who works in your target
              industry (or close to it). They&rsquo;ve volunteered to spend
              30&ndash;45 minutes with you every week through mid-May.
              That&rsquo;s a meaningful gift of time and expertise — use it well.
            </p>
            <p>
              This isn&rsquo;t career services. Your guide isn&rsquo;t going to
              send you job listings or make introductions on autopilot.
              They&rsquo;re going to help you get sharper, think more clearly,
              and move faster than you would on your own. The job search itself
              is still yours to run.
            </p>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            Expectations
          </h2>
          <div className="max-w-3xl space-y-8">
            {[
              {
                title: "Show up prepared.",
                body: 'Know what you want to cover before each session. Even a single specific question beats a vague "I\'m not sure what I need."',
              },
              {
                title: "Do the work between sessions.",
                body: "Your action items aren't optional. They're the mechanism by which you actually make progress. If you couldn't complete something, come ready to say why.",
              },
              {
                title: "Be honest about where you are.",
                body: "If you're discouraged, stuck, or not sure this is working — say so. Your guide can only help with what they know about.",
              },
              {
                title: "Respond promptly.",
                body: "Your guide is fitting this into a busy schedule. Same-day responses to scheduling messages are a simple form of respect.",
              },
              {
                title: "Write a session recap.",
                body: "After each session, write a short recap of what you covered and what you're working on before the next session. Send it to your guide and CC info@gradguide.work so the program team can stay in the loop.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="shrink-0 w-8 h-8 bg-sage/20 text-sage rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mt-1">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get the Most Out of It */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">
            How to get the most out of it
          </h2>
          <CardGrid columns={2}>
            <Card title="Come with specifics" accent="sage">
              <p>
                &ldquo;Can you review this cover letter for the Deloitte
                consulting role I&rsquo;m applying to this Friday?&rdquo; is 10x
                more useful than &ldquo;Can you help with my
                applications?&rdquo;
              </p>
            </Card>
            <Card title="Use your guide's perspective" accent="sage">
              <p>
                They sit on the other side of the hiring table. Ask them what
                actually gets attention, what kills an application, what
                they&rsquo;d do if they were you.
              </p>
            </Card>
            <Card title="Don't wait for the session to share wins" accent="sage">
              <p>
                If you land an interview, get an offer, or have a breakthrough —
                send your guide a quick message. They want to know.
              </p>
            </Card>
            <Card title="Ask for introductions thoughtfully" accent="sage">
              <p>
                Your guide may be able to connect you with someone in their
                network. Don&rsquo;t ask generically — ask specifically:
                &ldquo;Do you know anyone in healthcare consulting I could talk
                to?&rdquo;
              </p>
            </Card>
            <Card title="Track everything" accent="sage">
              <p>
                Keep a simple spreadsheet of every application, every outreach,
                every conversation. Your guide can help you see patterns
                you&rsquo;d otherwise miss.
              </p>
            </Card>
            <Card title="Treat every session like a meeting you prepare for" accent="sage">
              <p>
                It doesn&rsquo;t need to be formal — but showing up with
                something to discuss every week is the difference between a
                useful program and a pleasant chat.
              </p>
            </Card>
          </CardGrid>
        </div>
      </section>

      {/* Session Recap Format */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Session recap format
          </h2>
          <div className="max-w-2xl bg-sage/10 border border-sage/30 rounded-lg p-8">
            <p className="font-semibold text-navy mb-4">
              After every session, email your guide (CC:{" "}
              <a
                href="mailto:info@gradguide.work"
                className="text-sage hover:underline"
              >
                info@gradguide.work
              </a>
              ):
            </p>
            <ol className="space-y-2 text-foreground/70">
              <li className="flex gap-3">
                <span className="font-bold text-sage shrink-0">1.</span>
                What we covered today
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-sage shrink-0">2.</span>
                My action items before next session
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-sage shrink-0">3.</span>
                Any questions or things I&rsquo;m still thinking about
              </li>
            </ol>
            <p className="text-sm text-foreground/50 mt-4 italic">
              Keep it short — 3&ndash;5 sentences is enough. The habit matters
              more than the length.
            </p>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            What success looks like
          </h2>
          <div className="max-w-3xl">
            <p className="text-foreground/70 leading-relaxed text-lg">
              A successful GradGuide experience isn&rsquo;t only a job offer by
              May. It&rsquo;s a clearer sense of what you want, better materials
              to pursue it with, a real professional relationship with someone in
              your industry, and the skills to run a smarter search — now and in
              the future. The offer is the goal. The growth is the guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Questions?
          </h2>
          <p className="text-foreground/70 mb-4">
            Reach out anytime.
          </p>
          <a
            href="mailto:info@gradguide.work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-md font-medium hover:bg-navy/90 transition-colors"
          >
            info@gradguide.work
          </a>
        </div>
      </section>
    </>
  );
}

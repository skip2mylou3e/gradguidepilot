export default function SessionOneGuide() {
  return (
    <div className="space-y-10">
      {/* Before the session */}
      <div>
        <h4 className="font-display text-xl font-semibold text-coral mb-4">
          Before the session
        </h4>
        <ul className="space-y-2 text-foreground/70 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Look up their LinkedIn/resume. Know their school, major, any experience.
          </li>
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Note what they said in their application about where they are in the search.
          </li>
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Have a doc open to capture what they share.
          </li>
        </ul>
      </div>

      {/* Opening */}
      <div>
        <h4 className="font-display text-xl font-semibold text-coral mb-4">
          Opening (5 min)
        </h4>
        <div className="bg-coral/5 border border-coral/20 rounded-lg p-5">
          <p className="text-foreground/70 leading-relaxed italic">
            &ldquo;I want to make sure our time is actually useful for you, so
            I&rsquo;m going to ask a lot of questions today. By the end I&rsquo;d
            love for us to have a rough plan. Does that sound good?&rdquo;
          </p>
          <p className="text-foreground/60 text-sm mt-3">
            Then share 2 minutes of your own story — the honest version, not a
            LinkedIn recap.
          </p>
        </div>
      </div>

      {/* Intake Questions */}
      <div>
        <h4 className="font-display text-xl font-semibold text-coral mb-4">
          Intake questions (25&ndash;30 min)
        </h4>
        <p className="text-foreground/60 mb-6">
          Six areas to cover:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              q: "Where are you in your search?",
              detail:
                "What have you applied to? Any conversations in progress? What's your timeline?",
            },
            {
              q: "What do you actually want?",
              detail:
                "If you landed the right thing this summer, what would it look like? What would feel like a win by May?",
            },
            {
              q: "What's been the hardest part?",
              detail: "Where are you stuck? What's not working?",
            },
            {
              q: "What do you bring?",
              detail:
                "Tell me about a time you solved something hard. What would someone who knows you say you're good at?",
            },
            {
              q: "What support do you have?",
              detail:
                "Career services, family, existing network? What's missing?",
            },
            {
              q: "What do you want from our sessions?",
              detail:
                "What kind of help is most useful — accountability, feedback, industry knowledge, connections?",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4"
            >
              <p className="font-semibold text-navy text-sm">
                {i + 1}. {item.q}
              </p>
              <p className="text-foreground/60 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Close */}
      <div>
        <h4 className="font-display text-xl font-semibold text-coral mb-4">
          Close (10 min)
        </h4>
        <ul className="space-y-2 text-foreground/70 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Sketch a shared plan based on what you heard.
          </li>
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Confirm next session time before you hang up.
          </li>
          <li className="flex gap-3">
            <span className="text-coral font-bold shrink-0">&bull;</span>
            Give the student 2&ndash;3 specific action items — not vague
            (&ldquo;update your resume&rdquo;) but concrete (&ldquo;send me your
            updated resume by Thursday&rdquo;).
          </li>
        </ul>
      </div>

      {/* After the session */}
      <div>
        <h4 className="font-display text-xl font-semibold text-coral mb-4">
          After the session
        </h4>
        <p className="text-foreground/70 leading-relaxed">
          Send a brief recap email within 24 hours. 3&ndash;4 sentences: what you
          discussed, what they&rsquo;re working on, what you&rsquo;ll focus on
          next time.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Discord Server Admins
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visualize Discord Member Engagement{" "}
          <span className="text-[#58a6ff]">by Role</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your Discord server and instantly see which roles are driving conversation — and which ones have gone silent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start for $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg hover:border-[#58a6ff] transition-colors"
          >
            Learn more
          </a>
        </div>
        {/* Mock heatmap */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
          <p className="text-[#8b949e] text-xs uppercase tracking-widest mb-4">Role Activity — Last 30 Days</p>
          <div className="space-y-3">
            {[
              { role: "@moderators", color: "bg-[#58a6ff]", cells: [9,8,9,7,9,8,6] },
              { role: "@members", color: "bg-[#3fb950]", cells: [6,7,5,8,6,7,9] },
              { role: "@newcomers", color: "bg-[#d29922]", cells: [3,2,4,2,3,1,2] },
              { role: "@lurkers", color: "bg-[#f85149]", cells: [1,0,1,0,1,0,0] }
            ].map(({ role, color, cells }) => (
              <div key={role} className="flex items-center gap-3">
                <span className="text-[#8b949e] text-xs w-28 text-right shrink-0">{role}</span>
                <div className="flex gap-1 flex-1">
                  {cells.map((v, i) => (
                    <div
                      key={i}
                      className={`h-7 flex-1 rounded ${color} transition-opacity`}
                      style={{ opacity: v / 10 }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
              <span key={d} className="text-[#8b949e] text-xs flex-1 text-center">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm mb-2">Pro Plan</div>
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to understand your community.</p>
          <ul className="space-y-3 mb-8">
            {[
              "Connect unlimited Discord servers",
              "Interactive role activity heatmaps",
              "30-day & 90-day trend views",
              "CSV export for reports",
              "Email digest summaries"
            ].map(f => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to my Discord server?",
              a: "You authorize via Discord OAuth. We only request read-only permissions to fetch message activity counts — we never read message content."
            },
            {
              q: "What data is used to build the heatmaps?",
              a: "We aggregate message counts per role per day using Discord's API. No personal data or message text is stored — only anonymized activity counts."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} Discord Role Activity Heatmap. All rights reserved.</p>
      </footer>
    </main>
  )
}

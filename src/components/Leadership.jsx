import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-12 last:mb-0 pl-10 md:pl-0">
      {/* Red Glowing Dot on the Timeline Line */}
      <div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_rgba(255,42,42,0.9)] z-20 top-6" />

      {/* Even Index: Card on the Left, Empty Spacer on the Right */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full md:w-[45%] md:text-right bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.01] transition-all duration-300 shadow-xl group"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-500 transition-colors tracking-tight">
              {item.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mt-1">
              {item.role}
            </p>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
          <div className="hidden md:block w-[45%]" />
        </>
      ) : (
        <>
          <div className="hidden md:block w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full md:w-[45%] md:text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:scale-[1.01] transition-all duration-300 shadow-xl group"
          >
            {item.badge && (
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 mb-3">
                {item.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-500 transition-colors tracking-tight">
              {item.title}
            </h3>
            <p className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold mt-1">
              {item.role}
            </p>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default function Leadership() {
  if (!leadershipList || leadershipList.length === 0) return null

  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden text-white"
    >
      {/* Torn-Paper Divider at the Top */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180 -translate-y-[1px] z-10 pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider">
            Activities
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
            Leadership &amp; Engagement
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Active roles driving technical events, peer mentorship, and developer community building.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto pt-6">
          {/* Vertical Gradient Line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

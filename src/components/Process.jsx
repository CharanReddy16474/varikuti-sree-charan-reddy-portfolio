import { skillsContent } from '../data/portfolioData'

export default function Process() {
  return (
    <section
      id="process"
      className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            {skillsContent.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {skillsContent.heading}
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            {skillsContent.description}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skillsContent.cards.map((card, idx) => (
            <div
              key={card.number}
              className="relative bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 hover:border-[#ff2a2a]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Step Number & Connector */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-black font-mono text-neutral-600 group-hover:text-[#ff2a2a] transition-colors">
                    {card.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Step {idx + 1}
                  </span>
                </div>

                {/* Step Title & Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>

              {/* Progress Line Indicator */}
              <div className="pt-6">
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ff2a2a] transition-all duration-500 group-hover:w-full"
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="flex justify-center pt-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-300 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-white">{skillsContent.endText}</span>
          </div>
        </div>
      </div>
    </section>
  )
}


import { technicalSkills } from '../data/portfolioData'

function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200">
      {name}
    </span>
  )
}

function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        <h3 className="text-lg md:text-xl font-black uppercase text-white pb-3 mb-5 border-b border-white/10 group-hover:text-red-500 transition-colors">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred Red Circles */}
      <div className="absolute top-10 left-[-100px] w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider">
          Technical Stack
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          My Skillset
        </h2>
        <p className="text-white/50 text-base md:text-lg">
          Technologies, languages, and tools I use to engineer robust full-stack solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}


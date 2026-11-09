import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-500/30 transition-all duration-300 group"
    >
      {/* Emoji in a rounded square that tints red and scales on hover */}
      <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300 mb-4 select-none">
        {skill.icon}
      </div>

      {/* Uppercase Name */}
      <h3 className="text-base font-black uppercase tracking-tight text-gray-900 group-hover:text-[#ff2a2a] transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-2">
        {skill.desc}
      </p>
    </div>
  )
}

export default function SoftSkills() {
  return (
    <section
      id="soft-skills"
      className="bg-white text-gray-900 pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-Paper Divider at the Top */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px] z-10 pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            Core Competencies
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Essential interpersonal and engineering strengths that drive successful collaboration and software delivery.
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { technicalSkills, softSkillsList } from '../data/portfolioData'

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white text-black pt-16 pb-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black">
            Skills &amp; Technologies
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            A comprehensive full-stack toolkit across frontend architecture, backend REST APIs, and database engineering.
          </p>
        </div>

        {/* Technical Skills: 4 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.categories.map((category, idx) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-neutral-50 border border-neutral-200/80 hover:border-[#ff2a2a]/40 rounded-3xl p-7 transition duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#ff2a2a] transition-colors">
                    {category.title}
                  </h3>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]" />
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-xl bg-white text-neutral-800 text-xs sm:text-sm font-semibold border border-neutral-200/90 shadow-sm transition-colors hover:border-[#ff2a2a]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Subsection */}
        <div className="pt-8 space-y-8">
          <div data-aos="fade-up" className="text-center">
            <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              Professional Strengths
            </h3>
            <p className="text-sm text-neutral-500 mt-1">
              Core competencies driving collaborative software delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkillsList.map((item, idx) => (
              <div
                key={item.name}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-neutral-50 border border-neutral-200 hover:border-[#ff2a2a]/40 rounded-2xl p-6 transition duration-300 shadow-sm hover:shadow-md space-y-3 hover:translate-y-[-2px]"
              >
                <div className="text-3xl select-none">{item.icon}</div>
                <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

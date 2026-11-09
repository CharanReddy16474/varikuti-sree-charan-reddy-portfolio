import { internshipsList, education } from '../data/portfolioData'

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Experience &amp; Education
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Practical development experience and formal computer science engineering foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Internship */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a]" />
              <span>Internship Experience</span>
            </h3>

            {internshipsList.map((intern) => (
              <div
                key={intern.organization}
                className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-6 hover:border-neutral-700 transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{intern.role}</h4>
                    <p className="text-[#ff2a2a] font-semibold text-sm">
                      {intern.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 px-3 py-1 rounded-full bg-neutral-800">
                    {intern.duration}
                  </span>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-2.5 text-neutral-300 text-sm leading-relaxed list-disc list-inside">
                  {intern.skills.map((skill, idx) => (
                    <li key={idx} className="text-neutral-300">
                      <span className="text-neutral-300">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {intern.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Education</span>
            </h3>

            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 space-y-6 hover:border-neutral-700 transition">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#ff2a2a] uppercase font-bold tracking-wider">
                  Undergraduate Degree
                </span>
                <h4 className="text-xl font-bold text-white">{education.degree}</h4>
                <p className="text-neutral-400 text-sm">{education.institution}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-neutral-500 font-semibold uppercase">
                    Performance
                  </p>
                  <p className="text-lg font-black text-white mt-0.5">
                    {education.cgpa}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-500 font-semibold uppercase">
                    Graduation Year
                  </p>
                  <p className="text-lg font-black text-[#ff2a2a] mt-0.5">
                    {education.graduation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


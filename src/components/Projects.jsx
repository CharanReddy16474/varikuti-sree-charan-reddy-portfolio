import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Real-world full-stack applications, secure REST APIs, and database-driven solutions.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                project.isFlagship
                  ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-[#ff2a2a]/60 shadow-2xl shadow-[#ff2a2a]/10 hover:border-[#ff2a2a]'
                  : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:shadow-xl'
              }`}
            >
              <div className="space-y-6">
                {/* Card Top: Number & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black font-mono text-[#ff2a2a]">
                    #{project.number}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 rounded-full bg-[#ff2a2a]/15 text-[#ff2a2a] text-xs font-bold tracking-wide">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff2a2a] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800/80 text-neutral-300 text-xs font-medium border border-neutral-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-8 border-t border-neutral-800/80 mt-6 flex items-center justify-between gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#ff2a2a] transition-colors"
                >
                  <span>Source Code</span>
                  <span>↗</span>
                </a>

                {project.links.demo ? (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#ff2a2a] hover:bg-[#e02424] text-white text-xs font-bold shadow-md transition-colors"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-neutral-500 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    Demo Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


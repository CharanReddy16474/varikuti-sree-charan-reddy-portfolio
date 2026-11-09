import { aboutContent, education, personalInfo } from '../data/portfolioData'
import profileImg from '../assets/about/profile.png'

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-neutral-900 py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Illustrated Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative Background Accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#ff2a2a]/10 -rotate-2" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-neutral-100 rotate-2" />

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 left-6 right-6 bg-neutral-950 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center justify-between border border-neutral-800">
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Academics</p>
                  <p className="text-sm font-bold text-white">{education.cgpa}</p>
                </div>
                <div className="h-8 w-px bg-neutral-800" />
                <div className="text-right">
                  <p className="text-xs text-neutral-400 font-medium">Degree</p>
                  <p className="text-sm font-bold text-[#ff2a2a]">B.E. CSE (2026)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            {/* Section Tag */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
              About Me
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
              {aboutContent.heading}
            </h2>

            {/* Bio with TAP Academy highlight */}
            <div
              className="text-neutral-700 text-base sm:text-lg leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
            />

            {/* Tech Stack Chips */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {aboutContent.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors border border-neutral-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Education / Location Details */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-200">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Institution
                </p>
                <p className="text-sm sm:text-base font-bold text-black mt-1">
                  {education.institution}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                  Location
                </p>
                <p className="text-sm sm:text-base font-bold text-black mt-1">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

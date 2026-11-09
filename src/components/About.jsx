import { useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData'

export default function About() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point-star SVG (Top-Right) */}
      <svg
        className="absolute top-10 right-10 w-10 h-10 text-black fill-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative 4-point-star SVG (Bottom-Left) */}
      <svg
        className="absolute bottom-28 left-8 w-12 h-12 text-black fill-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard */}
        <div className="md:w-[350px] shrink-0 w-full flex flex-col items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 9,
              mass: 1.1,
            }}
            className="relative flex flex-col items-center pt-8 w-full max-w-[280px]"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Grey clip rectangle */}
            <div className="relative z-10 w-8 h-4 bg-gray-400 rounded-sm mb-[-2px] shadow-sm" />

            {/* Flippable Card Container */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped(!flipped)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* FRONT face: Dark badge with photo */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col justify-between overflow-hidden">
                  {/* Slot cutout */}
                  <div className="w-12 h-1.5 bg-black/60 rounded-full mx-auto mb-2 shrink-0" />

                  {/* Photo inside */}
                  <div className="w-full flex-grow rounded-xl overflow-hidden bg-black">
                    <img
                      src={stackImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* BACK face: Visiting card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl flex flex-col justify-between overflow-hidden text-left p-5 text-white select-none">
                  {/* 6px Red Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#ff2a2a]" />

                  {/* Top: Brand & Title */}
                  <div className="pt-1 space-y-1">
                    <p className="text-lg sm:text-xl font-black tracking-tight text-white">
                      {personalInfo.brandName}
                      <span className="text-[#ff2a2a]">.</span>
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-semibold">
                      {personalInfo.title}
                    </p>
                  </div>

                  {/* Thin Divider */}
                  <div className="w-full h-px bg-white/10 my-2" />

                  {/* Rows with info */}
                  <div className="space-y-2 text-xs text-white/85">
                    {/* Email */}
                    {personalInfo.emails?.primary && (
                      <a
                        href={`mailto:${personalInfo.emails.primary}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-[#ff2a2a] transition-colors truncate"
                      >
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="truncate">
                          {personalInfo.emails.primary}
                        </span>
                      </a>
                    )}

                    {/* Phone */}
                    {personalInfo.phone && (
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 hover:text-[#ff2a2a] transition-colors truncate"
                      >
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.phone}</span>
                      </a>
                    )}

                    {/* Location */}
                    {personalInfo.location && (
                      <div className="flex items-center gap-2 text-white/85 truncate">
                        <svg
                          className="w-4 h-4 text-red-400 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="truncate">{personalInfo.location}</span>
                      </div>
                    )}

                    {/* Social links row */}
                    <div className="flex items-center gap-4 pt-0.5">
                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 hover:text-[#ff2a2a] transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
                          </svg>
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1.5 hover:text-[#ff2a2a] transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-red-400 shrink-0 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Bottom: QR Code */}
                  <div className="pt-2 flex items-center gap-3 border-t border-white/10 mt-auto">
                    <div className="bg-white rounded-lg p-1.5 shrink-0">
                      <QRCode
                        value={
                          socialLinks.linkedin ||
                          `mailto:${personalInfo.emails.primary}`
                        }
                        size={76}
                      />
                    </div>
                    <p className="text-[10px] text-white/60 font-medium leading-tight">
                      Scan to connect
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {/* Tap to flip hint */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Heading & Bio */}
        <div data-aos="fade-left" className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 md:h-20 fill-white z-10"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}

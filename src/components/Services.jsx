import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

// ── TagCard ──────────────────────────────────────────────────────────────────
function TagCard({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }) {
  const cardRef  = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef?.current || !cardRef?.current) return
    const containerH = containerRef.current.getBoundingClientRect().height
    const cardTop     = cardRef.current.offsetTop  // relative to container

    // "line tip" position in px within the container
    const lineTipPx = latest * containerH
    setIsActive(lineTipPx > cardTop + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-colors duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_0_40px_rgba(255,42,42,0.45)]'
          : 'bg-white shadow-xl'
      } ${className}`}
    >
      {/* Punched hole at top */}
      <div className="flex justify-center mb-1">
        <div className={`w-6 h-6 rounded-full border-4 transition-colors duration-700 ${
          isActive ? 'bg-red-700 border-red-900' : 'bg-[#e4e4e4] border-gray-300'
        }`} />
      </div>

      {/* Inner panel */}
      <div className={`rounded-[1.5rem] p-8 min-h-[220px] flex flex-col justify-between transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <div>
          {/* Faint serif italic number */}
          <span className={`block font-serif italic text-6xl font-black leading-none mb-4 transition-colors duration-700 ${
            isActive ? 'text-white/20' : 'text-gray-200'
          }`}>
            {number}
          </span>

          {/* Title */}
          <h3 className={`text-2xl font-black leading-tight mb-3 transition-colors duration-700 ${
            isActive ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>

          {/* Text */}
          <p className={`text-sm leading-relaxed transition-colors duration-700 ${
            isActive ? 'text-red-100' : 'text-gray-500'
          }`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

// Desktop positions, tilts, AOS config for each of the 4 cards
const cardMeta = [
  {
    className: 'md:absolute md:top-[10px]  md:right-[5%]  lg:right-[10%]  rotate-2  md:rotate-6',
    aosType:   'fade-left',
    aosDelay:  100,
  },
  {
    className: 'md:absolute md:top-[450px] md:left-[5%]   lg:left-[10%]  -rotate-2 md:-rotate-6',
    aosType:   'fade-right',
    aosDelay:  200,
  },
  {
    className: 'md:absolute md:top-[700px] md:right-[5%]  lg:right-[15%]  rotate-1  md:rotate-3',
    aosType:   'fade-left',
    aosDelay:  300,
  },
  {
    className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%]  -rotate-1 md:-rotate-3',
    aosType:   'fade-right',
    aosDelay:  400,
  },
]

// SVG path shared by both desktop and mobile
const DESKTOP_PATH = 'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

// ── Section ──────────────────────────────────────────────────────────────────
export default function Services() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness:  60,
    damping:    20,
    restDelta:  0.001,
  })

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      {/* Inner wrapper — tall enough on desktop for the scroll-activated cards */}
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* ── Header ── */}
        <div
          data-aos="fade-up"
          className="md:absolute md:top-10 md:left-0 md:w-[450px] z-20 relative mb-12 md:mb-0"
        >
          {/* Badge pill */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </div>

          {/* Heading with hand-drawn arrow */}
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {skillsContent.heading}
            </h2>
            {/* Hand-drawn arrow at bottom-right of heading */}
            <svg
              className="absolute -bottom-6 right-0 w-10 h-10 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </div>

          <p className="text-gray-500 text-base md:text-lg mt-8 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* ── Desktop Scroll-Animated SVG Path ── */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={DESKTOP_PATH}
                stroke="white"
                strokeWidth={20}
                fill="none"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint guide path */}
          <path
            d={DESKTOP_PATH}
            stroke="#cbd5e1"
            strokeWidth={2}
            fill="none"
            strokeDasharray="8 10"
          />

          {/* 2. Real animated dashed path (revealed by mask) */}
          <path
            d={DESKTOP_PATH}
            stroke="black"
            strokeWidth={2}
            fill="none"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* ── Mobile Vertical SVG Path ── */}
        <svg
          className="md:hidden absolute left-[50%] -translate-x-1/2 top-0 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                stroke="white"
                strokeWidth={12}
                fill="none"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
              />
            </mask>
          </defs>

          {/* 1. Faint guide */}
          <path
            d="M 2,0 L 2,100"
            stroke="#cbd5e1"
            strokeWidth={2}
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          {/* 2. Animated path */}
          <path
            d="M 2,0 L 2,100"
            stroke="black"
            strokeWidth={2}
            fill="none"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* ── Cards Container ── */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardMeta[idx].className}
              aosType={cardMeta[idx].aosType}
              aosDelay={cardMeta[idx].aosDelay}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* ── Hand-written end note ── */}
        <p className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none pointer-events-none whitespace-nowrap">
          {skillsContent.endText}
        </p>

      </div>
    </section>
  )
}

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

// ── Arrow icon (slides right on hover) ───────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

// ── Spinner icon ──────────────────────────────────────────────────────────────
function SpinnerIcon() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')
  const [agreed, setAgreed] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Parallax — giant background word floats as the section scrolls
  const { scrollYProgress } = useScroll({
    target:  ref,
    offset:  ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // ── Form submit ─────────────────────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    // Trigger native browser tooltip if any required field is missing
    if (formRef.current && !formRef.current.reportValidity()) {
      return
    }

    // Read values by id
    const firstName = formRef.current.querySelector('#firstName')?.value.trim() ?? ''
    const lastName  = formRef.current.querySelector('#lastName')?.value.trim()  ?? ''
    const email     = formRef.current.querySelector('#email')?.value.trim()     ?? ''
    const message   = formRef.current.querySelector('#message')?.value.trim()   ?? ''

    // Basic validation
    if (!firstName || !email || !message) {
      setErrorMsg(!message ? 'Please write a message before sending.' : 'Please fill in all required fields.')
      setStatus('error')
      setTimeout(() => {
        setStatus('idle')
        setErrorMsg('')
      }, 3000)
      return
    }

    setStatus('sending')
    setErrorMsg('')

    // Populate extra template field variations so any template variable works
    const fullName = `${firstName} ${lastName}`.trim()
    if (formRef.current.querySelector('#hidden_name')) {
      formRef.current.querySelector('#hidden_name').value = fullName
    }
    if (formRef.current.querySelector('#hidden_from_name')) {
      formRef.current.querySelector('#hidden_from_name').value = fullName
    }
    if (formRef.current.querySelector('#hidden_reply_to')) {
      formRef.current.querySelector('#hidden_reply_to').value = email
    }
    if (formRef.current.querySelector('#hidden_email')) {
      formRef.current.querySelector('#hidden_email').value = email
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const PLACEHOLDERS = [
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      'YOUR_EMAILJS_PUBLIC_KEY',
    ]
    const isConfigured =
      serviceId && templateId && publicKey &&
      !PLACEHOLDERS.includes(serviceId) &&
      !PLACEHOLDERS.includes(templateId) &&
      !PLACEHOLDERS.includes(publicKey)

    if (!isConfigured) {
      // Fallback: open mailto
      const subject = `Portfolio Contact from ${firstName} ${lastName}`
      const body    = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`,
        '_blank'
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // EmailJS send
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Failed to send — check your connection or email directly.')
      setStatus('error')
    }
    setTimeout(() => {
      setStatus('idle')
      setErrorMsg('')
    }, 4000)
  }

  // ── Submit button label / style ─────────────────────────────────────────────
  const btnConfig = {
    idle: {
      label:   'Send Message',
      icon:    <ArrowIcon />,
      classes: 'border-black text-black hover:bg-black hover:text-white group',
    },
    sending: {
      label:   'Sending...',
      icon:    <SpinnerIcon />,
      classes: 'border-gray-400 text-gray-400 cursor-not-allowed',
    },
    success: {
      label:   'Sent Successfully ✓',
      icon:    null,
      classes: 'border-green-600 bg-green-600 text-white',
    },
    error: {
      label:   'Failed — Try Again',
      icon:    null,
      classes: 'border-red-900 bg-red-900 text-white',
    },
  }
  const btn = btnConfig[status]

  // ── Common input class (underline-only) ─────────────────────────────────────
  const inputCls =
    'w-full bg-transparent border-b border-white/40 pb-3 text-white text-lg ' +
    'placeholder-white/60 outline-none focus:border-white transition-colors duration-200'

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Parallax giant word ── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter text-white/[0.03] scale-y-[1.6] origin-top whitespace-nowrap"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red card ── */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full md:w-[85%] lg:w-[75%] ml-auto bg-[#ff2a2a] p-8 md:p-16"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
            Reach Me
          </p>
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white hover:text-[#ff2a2a] transition-colors duration-300"
            >
              {/* Instagram icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              DM on Instagram
            </a>
          ) : null}
        </div>

        {/* ── Form ── */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Hidden inputs to support any EmailJS template variable names */}
          <input type="hidden" id="hidden_name" name="name" />
          <input type="hidden" id="hidden_from_name" name="from_name" />
          <input type="hidden" id="hidden_reply_to" name="reply_to" />
          <input type="hidden" id="hidden_email" name="email" />

          {/* Two-column row: inputs left, textarea right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left — text inputs */}
            <div className="flex flex-col gap-10">
              <div>
                <label htmlFor="firstName" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  First Name <span className="text-white">*</span>
                </label>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="Sree Charan"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Reddy"
                  className={inputCls}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                  Email Address <span className="text-white">*</span>
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Right — message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                Message <span className="text-white">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell me about your project, opportunity, or just say hello…"
                rows={8}
                className={`${inputCls} resize-none min-h-[120px] flex-1`}
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-white/20 pt-8">
            {/* Left — checkbox + note */}
            <div className="flex flex-col gap-4 max-w-sm">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-black rounded flex-shrink-0"
                />
                <span className="text-white/70 text-sm leading-snug">
                  I allow my submitted data to be used to contact me back.
                </span>
              </label>

              <p className="text-white/50 text-xs leading-relaxed">
                Your message will be sent directly to my inbox. I typically respond within 24–48 hours.
              </p>

              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="text-white text-sm font-semibold underline underline-offset-4 hover:text-black transition-colors duration-200 w-fit"
              >
                Or email me directly →
              </a>
            </div>

            {/* Right — submit button */}
            <div className="flex flex-col items-end gap-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 text-sm font-black uppercase tracking-widest transition-all duration-300 ${btn.classes}`}
              >
                {btn.icon}
                {btn.label}
              </button>
              {errorMsg && (
                <p className="text-white text-xs font-semibold bg-black/40 px-3 py-1.5 rounded-md">
                  {errorMsg}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

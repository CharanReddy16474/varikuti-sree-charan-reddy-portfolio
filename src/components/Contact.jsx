import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks, emailjsConfig } from '../data/portfolioData'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    // Fallback if EmailJS variables are not set in .env.local
    if (
      !emailjsConfig.serviceId ||
      emailjsConfig.serviceId === 'YOUR_EMAILJS_SERVICE_ID'
    ) {
      // Direct mailto fallback
      const formData = new FormData(formRef.current)
      const name = formData.get('user_name') || ''
      const email = formData.get('user_email') || ''
      const subject = formData.get('subject') || 'Portfolio Inquiry'
      const message = formData.get('message') || ''

      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(
        `From: ${name} (${email})\n\nMessage:\n${message}`,
      )}`

      window.location.href = mailtoUrl
      setStatus('success')
      if (formRef.current) formRef.current.reset()
      return
    }

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        {
          publicKey: emailjsConfig.publicKey,
        },
      )
      setStatus('success')
      if (formRef.current) formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMessage(
        'Unable to send message via the form. Please reach out directly via email.',
      )
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 relative overflow-hidden border-t border-neutral-900"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            I am actively looking for software engineering roles and full-stack opportunities. Drop a message or reach out directly!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Contact Details
            </h3>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="block bg-neutral-900/60 border border-neutral-800 hover:border-[#ff2a2a]/50 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2a2a] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Email
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff2a2a] transition-colors mt-0.5">
                    {personalInfo.emails.primary}
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="block bg-neutral-900/60 border border-neutral-800 hover:border-[#ff2a2a]/50 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2a2a] group-hover:scale-110 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Phone
                  </p>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#ff2a2a] transition-colors mt-0.5">
                    {personalInfo.phone}
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2a2a]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Location
                </p>
                <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition"
              >
                GitHub Profile ↗
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm font-semibold text-neutral-300 hover:text-[#ff2a2a] hover:border-neutral-600 transition"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-8 sm:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="user_name"
                    className="block text-xs font-bold uppercase tracking-wider text-neutral-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="user_email"
                    className="block text-xs font-bold uppercase tracking-wider text-neutral-300"
                  >
                    Your Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Full Stack Opportunity"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hello Charan, I came across your portfolio..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none"
                />
              </div>

              {/* Feedback States */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
                  ✓ Message sent successfully! I will get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ff2a2a] hover:bg-[#e02424] active:scale-95 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#ff2a2a]/30 transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


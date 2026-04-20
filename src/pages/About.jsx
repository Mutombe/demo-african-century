import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, CheckCircle } from '@phosphor-icons/react';
import { story, business, googleReviews, industries } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function About() {
  return (
    <PageTransition>
      <SEO title="About — African Century" description="African Century — a Harare-based financial house, founded in 2011, licensed by RBZ and SECZ." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-8">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">About</span>
          </nav>
          <p className="kicker text-gold-500 mb-6">The Firm · Since 2011</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            A financial house, <span className="italic">built slowly</span>,<br />built to <span className="italic text-gold-500">last</span>.
          </h1>
          <div className="rule-gold w-24 my-8" />
        </div>
      </section>

      {/* Story — editorial two-col */}
      <section className="bg-ivory-50 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <SectionReveal className="lg:col-span-7">
              <p className="drop-cap text-ink-600 text-lg leading-[1.75] text-pretty mb-6">
                {story.opener}
              </p>
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-500 text-base lg:text-lg leading-[1.75] text-pretty mb-5">
                  {p}
                </p>
              ))}
            </SectionReveal>

            <SectionReveal className="lg:col-span-5" delay={150}>
              <div className="aspect-[4/5] overflow-hidden bg-forest-100">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                  alt="Office interior, Harare"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-gold-400" />
                <p className="text-[11px] tracking-[0.18em] uppercase text-ink-400">
                  Josiah Chinamano Avenue · 2024
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-forest-800 text-ivory-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="paper opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <SectionReveal className="lg:col-span-5">
              <ShieldCheck size={32} weight="light" className="text-gold-400 mb-6" />
              <p className="kicker text-gold-300 mb-5">Regulation & Oversight</p>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight text-balance">
                Licensed, supervised, <span className="italic text-gold-300">accountable</span>.
              </h2>
              <div className="rule-gold w-16 mt-6" />
            </SectionReveal>
            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {business.licensing.map((l, i) => (
                  <SectionReveal key={l} delay={i * 80}>
                    <li className="flex items-start gap-4 pb-5 border-b border-ivory-100/15">
                      <CheckCircle size={20} weight="light" className="text-gold-400 shrink-0 mt-0.5" />
                      <span className="text-base lg:text-lg text-ivory-100 leading-relaxed">{l}</span>
                    </li>
                  </SectionReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-ivory-100 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="kicker text-gold-500 mb-5">Sectors Served</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-800 leading-tight mb-12 max-w-3xl text-balance">
              Capital for <span className="italic">every corner</span> of the Zimbabwean economy.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-px bg-ivory-300">
            {industries.map((ind, i) => (
              <SectionReveal key={ind} delay={i * 40}>
                <div className="bg-ivory-50 p-8 min-h-[140px] flex items-end">
                  <div>
                    <p className="kicker text-gold-500 mb-2">{String(i + 1).padStart(2, '0')}</p>
                    <p className="font-display text-xl text-forest-800 leading-tight">{ind}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-ivory-50 py-20 lg:py-24 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <p className="kicker text-gold-500 mb-5">Google Reviews</p>
                <h2 className="font-display text-4xl sm:text-5xl text-forest-800 leading-tight text-balance">
                  <span className="text-gold-500">{business.rating}</span> out of 5 · {business.reviewCount} reviews
                </h2>
              </div>
              <a
                href="https://www.google.com/search?q=African+Century+Harare+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 kicker text-forest-700 hover:text-gold-500 transition-colors"
              >
                View on Google
                <ArrowRight size={12} />
              </a>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {googleReviews.map((r, i) => (
              <SectionReveal key={r.name} delay={i * 80}>
                <div className="bg-ivory-100 border border-ivory-300 p-8 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-forest-700 text-ivory-100 flex items-center justify-center font-display text-sm">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-forest-800">{r.name}</p>
                        <p className="text-[11px] tracking-wide text-ink-400">{r.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({length: 5}).map((_, idx) => (
                        <Star key={idx} size={13} weight="fill" className={idx < r.rating ? 'text-gold-400' : 'text-ivory-300'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-ink-600 leading-relaxed text-pretty">{r.text}</p>
                  <div className="mt-5 pt-4 border-t border-ivory-300 flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-ink-400">
                    <svg width="14" height="14" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                    Google Review
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 py-20 relative">
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-forest-800 leading-tight mb-6 text-balance">
            Fifteen years in. <span className="italic">Still learning.</span>
          </h2>
          <p className="text-ink-500 leading-relaxed mb-8 max-w-xl mx-auto">
            We would be pleased to share more about how we work — in person, or over a video call.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-forest-700 text-ivory-100 px-9 py-4 text-xs tracking-[0.22em] uppercase hover:bg-forest-800 transition-colors"
          >
            Arrange a meeting
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

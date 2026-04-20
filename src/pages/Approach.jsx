import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { approach, story } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Approach() {
  return (
    <PageTransition>
      <SEO title="Approach — African Century" description="Rigour, alignment, local knowledge and the long view — the four principles that guide every mandate." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-8">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Approach</span>
          </nav>
          <p className="kicker text-gold-500 mb-6">Our Philosophy</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            Four <span className="italic">principles</span>,<br />applied without <span className="italic text-gold-500">exception</span>.
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ink-500 text-lg leading-relaxed text-pretty">
            A philosophy is only useful if it survives the hard meeting. Ours has done so for fifteen years. It is the reason our clients stay — and the reason we turn down work we might otherwise have accepted.
          </p>
        </div>
      </section>

      {/* Principles — editorial list */}
      <section className="bg-ivory-50 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 space-y-24">
          {approach.map((item, i) => (
            <SectionReveal key={item.number} delay={i * 80}>
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <p className="font-display text-[120px] lg:text-[180px] text-gold-400/70 leading-none">
                    {item.number}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <h2 className="font-display text-4xl lg:text-6xl text-forest-800 leading-tight mb-5 text-balance">
                    {item.title}
                  </h2>
                  <div className="rule-gold w-16 mb-6" />
                  <p className="text-ink-500 text-lg leading-[1.75] text-pretty max-w-2xl">
                    {item.body}
                  </p>
                </div>
              </div>
              {i < approach.length - 1 && <div className="hairline mt-16" />}
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Values band */}
      <section className="bg-forest-800 text-ivory-100 py-20 lg:py-28 relative overflow-hidden">
        <div className="paper opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="kicker text-gold-300 mb-5">Our Values</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight max-w-3xl text-balance mb-14">
              Four words we take <span className="italic text-gold-300">entirely seriously</span>.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {story.values.map((v, i) => (
              <SectionReveal key={v.label} delay={i * 100}>
                <div className="border-t border-gold-400/40 pt-6">
                  <h3 className="font-display text-3xl text-gold-300 mb-3">{v.label}</h3>
                  <p className="text-sm text-ivory-200/70 leading-relaxed">{v.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 py-20 lg:py-24 relative">
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="kicker text-gold-500 mb-5">Begin</p>
          <h2 className="font-display text-4xl sm:text-5xl text-forest-800 leading-tight mb-8 text-balance">
            If our approach <span className="italic">resonates</span>, the conversation should be a short one.
          </h2>
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

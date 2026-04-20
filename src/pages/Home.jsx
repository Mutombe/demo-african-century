import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quotes, ShieldCheck, Star } from '@phosphor-icons/react';
import {
  hero,
  stats,
  pillars,
  approach,
  insights,
  testimonials,
  industries,
  business,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import PillarCard from '../components/PillarCard';
import InsightCard from '../components/InsightCard';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title="African Century — Capital. Judgment. A century to come."
        description="Harare-based financial services firm providing corporate lending, SME finance, treasury, investment advisory and leasing."
      />

      {/* HERO — editorial, asymmetric */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-12 lg:pt-20 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            {/* Left — type */}
            <div className="lg:col-span-7">
              <p className="kicker text-gold-500 mb-6">{hero.kicker}</p>
              <h1 className="font-display text-[48px] sm:text-7xl lg:text-[112px] leading-[0.92] text-forest-800 text-balance tracking-tight">
                {hero.headlinePre}
                <span className="inline-block w-3" />
                <span className="italic font-light text-forest-700">{hero.headlineMid}</span>
                <br />
                <span className="italic text-gold-500 font-light">{hero.headlineAccent}</span>
              </h1>
              <div className="rule-gold w-24 my-8" />
              <p className="text-ink-500 text-base lg:text-lg leading-relaxed max-w-2xl text-pretty">
                {hero.sub}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={hero.ctaPrimary.to}
                  className="inline-flex items-center justify-center gap-3 bg-forest-700 text-ivory-100 px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-forest-800 transition-colors"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to={hero.ctaSecondary.to}
                  className="inline-flex items-center justify-center gap-3 border border-forest-700 text-forest-700 px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-forest-700 hover:text-ivory-100 transition-colors"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>
            </div>

            {/* Right — image with editorial caption */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-100">
                <img
                  src={hero.image}
                  alt={hero.alt}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover object-center animate-slow-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px w-8 bg-gold-400" />
                <p className="text-[11px] tracking-[0.18em] uppercase text-ink-400">
                  Boardroom. 153 Josiah Chinamano.
                </p>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-5 -left-5 sm:top-8 sm:-left-8 bg-ivory-50 border border-ivory-300 px-5 py-4 shadow-sm hidden sm:block">
                <p className="kicker text-gold-500 mb-1">Est.</p>
                <p className="font-display text-3xl text-forest-800 leading-none">2011</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker-bar of industries */}
        <div className="relative border-t border-b border-ivory-300 bg-ivory-50 overflow-hidden">
          <div className="flex animate-marquee-slow whitespace-nowrap py-5">
            {[...industries, ...industries].map((industry, i) => (
              <span key={i} className="mx-8 text-[11px] tracking-[0.28em] uppercase text-ink-400">
                {industry}
                <span className="ml-8 text-gold-400">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — editorial ledger */}
      <section className="bg-forest-800 text-ivory-100 relative overflow-hidden">
        <div className="paper opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
          <SectionReveal>
            <div className="max-w-3xl mb-14">
              <p className="kicker text-gold-300 mb-5">The Ledger · Since 2011</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
                Fifteen years of <span className="italic text-gold-300">capital deployed</span> across Zimbabwean enterprise.
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            {stats.map((s, i) => (
              <SectionReveal key={s.label} delay={i * 100}>
                <div className="border-t border-gold-400/40 pt-5">
                  <p className="font-display text-5xl sm:text-6xl lg:text-7xl text-gold-300 leading-none mb-3">
                    {s.value}
                  </p>
                  <p className="kicker text-ivory-100 mb-2">{s.label}</p>
                  <p className="text-xs text-ivory-200/60 leading-relaxed">{s.note}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — five pillars */}
      <section className="bg-ivory-100 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="kicker text-gold-500 mb-5">The Practice</p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-800 leading-tight text-balance">
                  Five pillars. <span className="italic">One philosophy.</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="hidden lg:inline-flex items-center gap-3 text-forest-700 kicker hover:text-gold-500 transition-colors"
              >
                All services
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-300">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.slug} delay={i * 80}>
                <PillarCard pillar={pillar} index={i} />
              </SectionReveal>
            ))}
            {/* CTA card fills the 6th slot */}
            <SectionReveal delay={400}>
              <Link
                to="/contact"
                className="group relative flex flex-col justify-between bg-forest-700 text-ivory-100 p-8 sm:p-10 h-full hover:bg-forest-800 transition-colors"
              >
                <div>
                  <p className="kicker text-gold-300 mb-10">Begin</p>
                  <h3 className="font-display text-2xl sm:text-3xl leading-tight text-balance">
                    Arrange an introductory conversation.
                  </h3>
                  <div className="rule-gold w-10 mt-5 mb-5" />
                  <p className="text-sm text-ivory-200/70 leading-relaxed">
                    All first meetings are with a partner. Strictly confidential.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-ivory-100/15 mt-8">
                  <span className="kicker text-gold-300">Contact us</span>
                  <ArrowRight size={16} className="text-gold-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* APPROACH — editorial typographic list */}
      <section className="bg-ivory-50 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <SectionReveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <p className="kicker text-gold-500 mb-6">Our Approach</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-800 leading-[1.05] text-balance mb-6">
                Four principles. <span className="italic">Applied without exception.</span>
              </h2>
              <div className="rule-gold w-20 mb-6" />
              <p className="text-ink-500 leading-relaxed text-pretty">
                African Century has always been a house of conviction. The
                following four commitments guide every mandate we accept — and
                shape every client relationship we keep.
              </p>
              <Link
                to="/approach"
                className="mt-8 inline-flex items-center gap-3 kicker text-forest-700 hover:text-gold-500 transition-colors"
              >
                Read the full philosophy
                <ArrowRight size={14} />
              </Link>
            </SectionReveal>

            <div className="lg:col-span-8 space-y-px bg-ivory-300">
              {approach.map((item, i) => (
                <SectionReveal key={item.number} delay={i * 100}>
                  <div className="bg-ivory-50 py-10 px-2 flex gap-8 lg:gap-12">
                    <p className="font-display text-5xl lg:text-6xl text-gold-400 leading-none w-16 shrink-0">
                      {item.number}
                    </p>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl lg:text-3xl text-forest-800 leading-tight mb-3">
                        {item.title}
                      </h3>
                      <p className="text-ink-500 leading-relaxed text-pretty">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-forest-800 text-ivory-100 py-20 lg:py-28 overflow-hidden">
        <div className="paper opacity-40" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-forest-900/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="max-w-2xl mb-14">
              <p className="kicker text-gold-300 mb-5">In Their Words</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
                What our clients say — when <span className="italic text-gold-300">the meeting has ended</span>.
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 100}>
                <blockquote className="border-l border-gold-400/60 pl-8 lg:pl-10">
                  <Quotes size={32} className="text-gold-400/70 mb-6" weight="fill" />
                  <p className="font-display text-xl lg:text-2xl leading-[1.5] text-balance text-ivory-100 mb-6 italic">
                    {t.quote}
                  </p>
                  <footer className="flex items-center gap-4 pt-5 border-t border-ivory-100/15">
                    <div className="h-10 w-10 border border-gold-400/60 flex items-center justify-center font-display text-gold-300 text-sm">
                      {t.logo}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ivory-100">{t.name}</p>
                      <p className="text-xs text-ivory-200/60 mt-0.5">{t.title}</p>
                    </div>
                  </footer>
                </blockquote>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-ivory-100 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div className="max-w-2xl">
                <p className="kicker text-gold-500 mb-5">Insights · The Essays</p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-800 leading-tight text-balance">
                  Writing from the <span className="italic">desk</span>.
                </h2>
              </div>
              <Link
                to="/insights"
                className="hidden lg:inline-flex items-center gap-3 text-forest-700 kicker hover:text-gold-500 transition-colors"
              >
                All essays
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className="mb-16">
            <InsightCard article={insights[0]} feature />
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 pt-8 border-t border-ivory-300">
            {insights.slice(1, 3).map((article, i) => (
              <SectionReveal key={article.slug} delay={i * 100}>
                <InsightCard article={article} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY CTA */}
      <section className="relative overflow-hidden bg-forest-900">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          alt="Handshake"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32 text-ivory-100 text-center">
          <SectionReveal>
            <p className="kicker text-gold-300 mb-6">A Meeting, Not a Sales Call</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-8 text-balance max-w-4xl mx-auto">
              If your business deserves a financial partner of <span className="italic text-gold-300">genuine quality</span>, we should talk.
            </h2>
            <div className="rule-gold w-24 mx-auto mb-8" />
            <p className="text-ivory-200/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
              Every introductory conversation is held with a partner. Strictly confidential, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gold-400 text-forest-900 px-9 py-4 text-xs tracking-[0.22em] uppercase hover:bg-gold-300 transition-colors"
              >
                Arrange a meeting
                <ArrowRight size={14} />
              </Link>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 border border-ivory-100/40 text-ivory-100 px-9 py-4 text-xs tracking-[0.22em] uppercase hover:bg-ivory-100 hover:text-forest-800 transition-colors"
              >
                Call {business.phone}
              </a>
            </div>
            <div className="mt-14 flex items-center justify-center gap-3 text-[11px] tracking-[0.18em] uppercase text-ivory-200/60">
              <ShieldCheck size={14} className="text-gold-400" />
              <span>RBZ Registered · SECZ Licensed</span>
              <span className="mx-2">·</span>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4].map(i => <Star key={i} size={11} weight="fill" className="text-gold-400" />)}
                <Star size={11} weight="fill" className="text-gold-400/60" />
              </div>
              <span>4.1 · 71 reviews</span>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

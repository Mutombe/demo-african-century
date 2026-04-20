import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { pillars, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import PillarCard from '../components/PillarCard';

export default function Services() {
  return (
    <PageTransition>
      <SEO title="Services — African Century" description="Corporate lending, SME finance, treasury, investment advisory and asset finance in Zimbabwe." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <p className="kicker text-gold-500 mb-6">The Practice</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            Five <span className="italic">disciplines</span>,<br />served from one <span className="italic text-gold-500">house</span>.
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ink-500 text-lg leading-relaxed text-pretty">
            African Century operates five complementary desks, each led by a partner, each underwritten by a single credit committee and a single philosophy. The work of the firm is the sum of its parts — never the promotion of one over another.
          </p>
        </div>
      </section>

      {/* Pillar grid */}
      <section className="bg-ivory-100 pb-20 lg:pb-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-300">
            {pillars.map((pillar, i) => (
              <SectionReveal key={pillar.slug} delay={i * 80}>
                <PillarCard pillar={pillar} index={i} />
              </SectionReveal>
            ))}
            <SectionReveal delay={400}>
              <div className="bg-forest-700 text-ivory-100 p-10 h-full flex flex-col justify-between">
                <div>
                  <p className="kicker text-gold-300 mb-8">Not sure which desk?</p>
                  <h3 className="font-display text-2xl leading-tight mb-4">
                    We will point you in the right direction.
                  </h3>
                  <p className="text-sm text-ivory-200/70 leading-relaxed">
                    A 20-minute conversation with our client relationships desk is the fastest route to the right partner.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 border-b border-gold-300 pb-2 kicker text-gold-300 hover:text-gold-200 transition-colors"
                >
                  Start a conversation
                  <ArrowRight size={14} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Editorial — how we work */}
      <section className="bg-ivory-50 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5">
                <p className="kicker text-gold-500 mb-5">How We Work</p>
                <h2 className="font-display text-4xl sm:text-5xl text-forest-800 leading-tight text-balance">
                  Every mandate follows the <span className="italic">same discipline</span>.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-8">
                {[
                  { n: '01', t: 'Introduction', b: 'A 45-minute conversation, by appointment, with the responsible partner. No preparation required.' },
                  { n: '02', t: 'Discovery', b: 'A short information exchange. We read your numbers. You meet our credit team. Site visits where appropriate.' },
                  { n: '03', t: 'Structuring', b: 'We propose a structure in writing — terms, tenor, covenants and pricing — usually within ten working days.' },
                  { n: '04', t: 'Committee', b: 'Our credit committee meets weekly. Decisions are made by people, not by models, and are communicated the same day.' },
                  { n: '05', t: 'Partnership', b: 'Disbursement is the beginning of the relationship. Relationship managers stay with clients for the duration.' },
                ].map((s, i) => (
                  <div key={s.n} className="flex gap-8 pb-8 border-b border-ivory-300 last:border-b-0">
                    <p className="font-display text-2xl text-gold-400 w-12 shrink-0">{s.n}</p>
                    <div>
                      <h4 className="font-display text-xl text-forest-800 mb-2">{s.t}</h4>
                      <p className="text-sm text-ink-500 leading-relaxed text-pretty">{s.b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}

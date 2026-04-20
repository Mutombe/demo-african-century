import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { team } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import TeamMember from '../components/TeamMember';

export default function Team() {
  return (
    <PageTransition>
      <SEO title="Partners — African Century" description="Meet the partners who lead African Century — from the credit committee to the treasury desk." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-20">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-8">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Partners</span>
          </nav>
          <p className="kicker text-gold-500 mb-6">The People Behind the Work</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            A <span className="italic">small team</span>,<br />carrying a <span className="italic text-gold-500">considerable responsibility</span>.
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ink-500 text-lg leading-relaxed text-pretty">
            African Century is deliberately boutique. Our partners are accessible by name, responsible by mandate, and committed to the long relationship over the one-time fee.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-ivory-100 pb-20 lg:pb-28 relative">
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {team.map((m, i) => (
              <SectionReveal key={m.slug} delay={i * 60}>
                <TeamMember member={m} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join us / CTA */}
      <section className="bg-forest-800 text-ivory-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="paper opacity-40" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <p className="kicker text-gold-300 mb-5">A Note on Culture</p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-8 text-balance italic">
            "We hire for judgment, and we train for everything else. The best mandates are run by people who are paid to think — not to process."
          </h2>
          <div className="rule-gold w-16 mx-auto mb-6" />
          <p className="text-ivory-200/70">— Tendai Masuku, Managing Partner</p>
        </div>
      </section>
    </PageTransition>
  );
}

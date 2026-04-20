import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import { insights } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import InsightCard from '../components/InsightCard';

const KICKERS = ['All', ...new Set(insights.map(i => i.kicker))];

export default function Insights() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? insights : insights.filter(i => i.kicker === filter);

  return (
    <PageTransition>
      <SEO title="Insights — African Century" description="Essays from the desk — macro, credit, treasury, wealth and asset finance." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-14 lg:pt-28 lg:pb-16">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-8">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Insights</span>
          </nav>
          <p className="kicker text-gold-500 mb-6">Writing From the Desk</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            Essays on <span className="italic">Zimbabwean</span><br />capital markets.
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ink-500 text-lg leading-relaxed text-pretty">
            Field notes, macro commentary, and occasional longer-form writing from our partners — published when there is something worth saying.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-ivory-100 border-t border-b border-ivory-300 sticky top-20 z-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-5 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {KICKERS.map(k => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`shrink-0 text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors ${
                filter === k ? 'bg-forest-700 text-ivory-100' : 'text-ink-500 hover:text-forest-700 border border-ivory-300'
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </section>

      {/* Feature */}
      {filtered.length > 0 && (
        <section className="bg-ivory-100 py-16 lg:py-20 relative">
          <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
            <SectionReveal>
              <InsightCard article={filtered[0]} feature />
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Rest */}
      {filtered.length > 1 && (
        <section className="bg-ivory-50 py-16 lg:py-20 relative">
          <div className="paper" />
          <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
            <p className="kicker text-gold-500 mb-10">More Essays</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
              {filtered.slice(1).map((article, i) => (
                <SectionReveal key={article.slug} delay={i * 80}>
                  <InsightCard article={article} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="py-20 text-center text-ink-400">
          <p>No essays in this category yet.</p>
        </section>
      )}

      {/* Subscribe */}
      <section className="bg-forest-800 text-ivory-100 py-20 lg:py-24 relative overflow-hidden">
        <div className="paper opacity-40" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="kicker text-gold-300 mb-5">The Quarterly Letter</p>
          <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-6 text-balance">
            A letter from the partners, <span className="italic text-gold-300">four times a year</span>.
          </h2>
          <p className="text-ivory-200/70 mb-8 max-w-xl mx-auto">
            Macro commentary, lessons from the desk, and the occasional confession. Sent only to clients and a small circle of friends of the firm.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold-400 text-forest-900 px-8 py-3.5 text-xs tracking-[0.22em] uppercase hover:bg-gold-300 transition-colors"
          >
            Request the letter
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, CheckCircle, Buildings, Storefront,
  ChartLineUp, Compass, Truck, Phone,
} from '@phosphor-icons/react';
import { pillars, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import NotFound from './NotFound';

const ICONS = { Buildings, Storefront, ChartLineUp, Compass, Truck };

const HERO_IMAGES = {
  'corporate-lending': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  'sme-finance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80',
  'treasury': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80',
  'investment-advisory': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
  'leasing': 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80',
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const pillar = pillars.find(p => p.slug === slug);
  if (!pillar) return <NotFound />;

  const Icon = ICONS[pillar.icon] || Buildings;
  const currentIdx = pillars.findIndex(p => p.slug === slug);
  const prev = pillars[(currentIdx - 1 + pillars.length) % pillars.length];
  const next = pillars[(currentIdx + 1) % pillars.length];

  return (
    <PageTransition>
      <SEO title={`${pillar.title} — African Century`} description={pillar.short} />

      {/* Hero with image */}
      <section className="relative bg-forest-800 overflow-hidden">
        <img
          src={HERO_IMAGES[slug]}
          alt={pillar.title}
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/70 to-forest-900" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-24 pb-20 lg:pt-32 lg:pb-24 text-ivory-100">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ivory-200/60 mb-10">
            <Link to="/" className="hover:text-gold-300">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold-300">Services</Link>
            <span>/</span>
            <span className="text-gold-300">{pillar.title}</span>
          </nav>

          <p className="kicker text-gold-300 mb-6">{pillar.kicker}</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl">
            {pillar.title}
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ivory-200/80 text-lg leading-relaxed text-pretty">
            {pillar.short}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ivory-100 py-20 lg:py-28 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left — long copy */}
            <SectionReveal className="lg:col-span-8">
              <p className="kicker text-gold-500 mb-5">Mandate Overview</p>
              <h2 className="font-display text-4xl lg:text-5xl text-forest-800 leading-tight mb-6 text-balance">
                What we do, and how.
              </h2>
              <div className="rule-gold w-16 mb-8" />
              <p className="drop-cap text-ink-600 text-lg leading-[1.7] text-pretty">
                {pillar.long}
              </p>

              <h3 className="font-display text-3xl text-forest-800 mt-14 mb-6">Product set</h3>
              <div className="rule-gold w-12 mb-8" />
              <ul className="space-y-4">
                {pillar.features.map((f) => (
                  <li key={f} className="flex items-start gap-4 border-b border-ivory-300 pb-4">
                    <CheckCircle size={18} weight="light" className="text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-ink-600 text-base leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <div className="mt-14 bg-forest-700 text-ivory-100 p-8 sm:p-10">
                <p className="kicker text-gold-300 mb-5">Indicative Terms</p>
                <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-4">
                  Built around the borrower — not the template.
                </h3>
                <p className="text-sm text-ivory-200/70 leading-relaxed max-w-xl">
                  Every facility is bespoke. Pricing, tenor, security and covenants reflect the operator's cash-flow profile. Indicative terms are communicated in writing at the structuring stage.
                </p>
              </div>
            </SectionReveal>

            {/* Right — sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-ivory-50 border border-ivory-300 p-8">
                <Icon size={32} weight="light" className="text-forest-700 mb-5" />
                <p className="kicker text-gold-500 mb-3">{pillar.kicker}</p>
                <h3 className="font-display text-2xl text-forest-800 leading-tight mb-6">Arrange a conversation</h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-6">
                  Speak with the partner who leads this desk. All first meetings are confidential and without obligation.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-forest-700 text-ivory-100 py-3.5 text-xs tracking-[0.22em] uppercase hover:bg-forest-800 transition-colors"
                >
                  Contact
                  <ArrowRight size={12} />
                </Link>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-forest-700 text-forest-700 py-3.5 text-xs tracking-[0.22em] uppercase hover:bg-forest-700 hover:text-ivory-100 transition-colors"
                >
                  <Phone size={12} />
                  {business.phone}
                </a>
              </div>

              <div className="bg-forest-800 text-ivory-100 p-8">
                <p className="kicker text-gold-300 mb-5">Other Desks</p>
                <ul className="divide-y divide-ivory-100/10">
                  {pillars.filter(p => p.slug !== slug).map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/services/${p.slug}`}
                        className="group flex items-center justify-between py-3.5 text-sm hover:text-gold-300 transition-colors"
                      >
                        <span>{p.title}</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next nav */}
      <section className="bg-ivory-50 border-t border-ivory-300 py-10">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-2 gap-8">
          <Link to={`/services/${prev.slug}`} className="group flex items-center gap-4 text-left">
            <ArrowLeft size={16} className="text-gold-500 group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="kicker text-ink-400 mb-1">Previous</p>
              <p className="font-display text-lg text-forest-800 group-hover:text-gold-600 transition-colors">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/services/${next.slug}`} className="group flex items-center gap-4 justify-end text-right">
            <div>
              <p className="kicker text-ink-400 mb-1">Next</p>
              <p className="font-display text-lg text-forest-800 group-hover:text-gold-600 transition-colors">{next.title}</p>
            </div>
            <ArrowRight size={16} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

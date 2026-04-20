import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — African Century" description="The page you requested could not be found." />
      <section className="min-h-[70vh] bg-ivory-100 flex items-center justify-center px-6 relative">
        <div className="paper" />
        <div className="relative text-center max-w-md">
          <p className="font-display text-[140px] lg:text-[200px] text-gold-400/60 leading-none">404</p>
          <div className="rule-gold w-16 mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl text-forest-800 leading-tight mb-4 text-balance">
            A page out of catalogue.
          </h1>
          <p className="text-ink-500 leading-relaxed mb-8">
            The page you requested could not be found. Let us return you to the desk.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-forest-700 text-ivory-100 px-8 py-4 text-xs tracking-[0.22em] uppercase hover:bg-forest-800 transition-colors"
          >
            Return home
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}

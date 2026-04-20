import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function InsightCard({ article, feature = false }) {
  return (
    <article
      className={`group flex ${feature ? 'flex-col lg:flex-row' : 'flex-col'} gap-6 lg:gap-10 cursor-pointer`}
    >
      <div
        className={`relative overflow-hidden bg-forest-100 ${
          feature ? 'lg:w-[55%] aspect-[4/3] lg:aspect-[5/4]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4 bg-ivory-50 px-3 py-1.5">
          <span className="kicker text-forest-700 text-[10px]">{article.kicker}</span>
        </div>
      </div>

      <div className={`flex flex-col justify-center ${feature ? 'lg:w-[45%]' : ''}`}>
        <div className="flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-3">
          <span>{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className="h-px w-4 bg-ink-200" />
          <span>{article.readTime}</span>
        </div>
        <h3 className={`font-display ${feature ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'} text-forest-800 leading-tight mb-4 text-balance group-hover:text-gold-600 transition-colors`}>
          {article.title}
        </h3>
        <p className={`text-ink-500 leading-relaxed ${feature ? 'text-base' : 'text-sm'} mb-5 text-pretty`}>
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 mt-auto">
          <span className="kicker text-forest-700 group-hover:text-gold-500 transition-colors">Read essay</span>
          <ArrowRight size={14} className="text-forest-700 group-hover:text-gold-500 group-hover:translate-x-1 transition-all" />
        </div>
        {feature && (
          <p className="mt-6 text-xs text-ink-400 italic">By {article.author}</p>
        )}
      </div>
    </article>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Buildings, Storefront, ChartLineUp, Compass, Truck } from '@phosphor-icons/react';

const ICONS = { Buildings, Storefront, ChartLineUp, Compass, Truck };

export default function PillarCard({ pillar, index = 0 }) {
  const Icon = ICONS[pillar.icon] || Buildings;
  return (
    <Link
      to={`/services/${pillar.slug}`}
      className="group relative flex flex-col bg-ivory-50 border border-ivory-300 p-8 sm:p-10 hover:border-gold-400 transition-all duration-500 overflow-hidden"
    >
      {/* Corner flourish */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-gold-400" />
      </div>

      <div className="flex items-start justify-between mb-10">
        <span className="kicker text-gold-500">{pillar.kicker}</span>
        <Icon size={28} className="text-forest-700" weight="light" />
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-forest-800 leading-tight mb-4 text-balance">
        {pillar.title}
      </h3>
      <div className="rule-gold w-10 mb-5" />
      <p className="text-sm text-ink-500 leading-relaxed mb-8 flex-1 text-pretty">
        {pillar.short}
      </p>

      <div className="flex items-center justify-between pt-5 border-t border-ivory-200">
        <span className="kicker text-forest-700 group-hover:text-gold-500 transition-colors">
          Learn more
        </span>
        <ArrowRight
          size={16}
          className="text-forest-700 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300"
        />
      </div>
    </Link>
  );
}

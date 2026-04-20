import React from 'react';
import { Link } from 'react-router-dom';
import {
  LinkedinLogo,
  InstagramLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
  ShieldCheck,
} from '@phosphor-icons/react';
import { business } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-forest-800 text-ivory-100 mt-20 sm:mt-28">
      <div className="paper absolute inset-0 opacity-40" />
      {/* Gold top rule */}
      <div className="rule-gold w-full" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={business.logo}
                alt={business.name}
                className="h-11 w-auto"
                loading="lazy"
               onError={e => { e.currentTarget.style.display = 'none'; }} />
              <span className="font-display text-xl text-ivory-100">
                {business.name}
              </span>
            </Link>
            <p className="text-sm text-ivory-200/70 leading-relaxed max-w-xs font-body">
              A Harare-based financial house — corporate lending, SME finance,
              treasury, investment advisory and leasing. Since 2011.
            </p>
            <div className="flex items-center gap-2">
              <a
                href={business.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 border border-ivory-100/20 flex items-center justify-center text-ivory-100/70 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
              >
                <LinkedinLogo size={15} />
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 border border-ivory-100/20 flex items-center justify-center text-ivory-100/70 hover:text-gold-300 hover:border-gold-400/50 transition-colors"
              >
                <InstagramLogo size={15} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-2">
            <p className="kicker text-gold-300 mb-5">Services</p>
            <ul className="space-y-2.5 text-sm text-ivory-200/70">
              <li><Link to="/services/corporate-lending" className="hover:text-gold-300 transition-colors">Corporate Lending</Link></li>
              <li><Link to="/services/sme-finance" className="hover:text-gold-300 transition-colors">SME Finance</Link></li>
              <li><Link to="/services/treasury" className="hover:text-gold-300 transition-colors">Treasury</Link></li>
              <li><Link to="/services/investment-advisory" className="hover:text-gold-300 transition-colors">Investment Advisory</Link></li>
              <li><Link to="/services/leasing" className="hover:text-gold-300 transition-colors">Asset Finance</Link></li>
            </ul>
          </div>

          {/* Firm column */}
          <div className="lg:col-span-2">
            <p className="kicker text-gold-300 mb-5">Firm</p>
            <ul className="space-y-2.5 text-sm text-ivory-200/70">
              <li><Link to="/approach" className="hover:text-gold-300 transition-colors">Approach</Link></li>
              <li><Link to="/team" className="hover:text-gold-300 transition-colors">Partners</Link></li>
              <li><Link to="/insights" className="hover:text-gold-300 transition-colors">Insights</Link></li>
              <li><Link to="/about" className="hover:text-gold-300 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Visit column */}
          <div className="col-span-2 lg:col-span-4">
            <p className="kicker text-gold-300 mb-5">Visit</p>
            <ul className="space-y-3.5 text-sm text-ivory-200/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold-400 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-gold-400 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-gold-400 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-gold-300"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={16} className="mt-0.5 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-gold-300"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory strip */}
        <div className="mt-14 pt-8 border-t border-ivory-100/15">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <div className="text-[11px] tracking-[0.1em] text-ivory-200/60 leading-relaxed">
                {business.licensing.join(' · ')}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ivory-100/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory-200/50 tracking-wide">
          <p>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </p>
          <p>
            Website by{' '}
            <a
              href="https://bitstudio.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-300 hover:underline"
            >
              Bit Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, Phone, ArrowRight } from '@phosphor-icons/react';
import { business } from '../data/siteData';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/approach', label: 'Approach' },
  { to: '/team', label: 'Partners' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Top regulator strip */}
      <div className="hidden lg:block bg-forest-800 text-ivory-200/80 text-[11px] tracking-[0.2em] uppercase">
        <div className="max-w-[1400px] mx-auto px-10 h-8 flex items-center justify-between">
          <span>Registered by RBZ · Licensed by SECZ · Est. 2011</span>
          <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gold-300">
            <Phone size={11} />
            {business.phone}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-ivory-100/97 backdrop-blur-md border-b border-ivory-300 shadow-sm'
            : 'bg-ivory-100 border-b border-ivory-300'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              className="h-11 w-auto shrink-0"
              loading="eager"
             onError={e => { e.currentTarget.style.display = 'none'; }} />
            <div className="flex flex-col leading-none">
              <span className="font-display text-[18px] sm:text-[20px] tracking-tight text-forest-800 truncate">
                {business.name}
              </span>
              <span className="hidden sm:inline-block text-[10px] tracking-[0.22em] uppercase text-ink-400 mt-1">
                Financial House · Harare
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-forest-700'
                      : 'text-ink-500 hover:text-forest-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-forest-700 text-ivory-100 px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase hover:bg-forest-800 transition-colors"
            >
              Arrange Meeting
              <ArrowRight size={12} />
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex xl:hidden items-center justify-center text-forest-800"
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-forest-900/50"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory-100 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-ivory-300">
            <span className="font-display text-xl text-forest-800">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-forest-800"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl transition-colors border-b border-ivory-200/60 ${
                    isActive ? 'text-gold-500' : 'text-forest-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-ivory-300 space-y-3 bg-ivory-50">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-forest-700 text-ivory-100 py-3 text-xs tracking-[0.2em] uppercase"
            >
              <Phone size={14} />
              Call {business.phone}
            </a>
            <p className="text-[11px] text-ink-400 text-center tracking-wide">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

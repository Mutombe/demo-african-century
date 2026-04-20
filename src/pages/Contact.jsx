import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowRight, Phone, EnvelopeSimple, MapPin, Clock,
  WhatsappLogo, CaretDown, ShieldCheck,
} from '@phosphor-icons/react';
import { business, pillars, faqs } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', interest: pillars[0].title, message: '',
  });
  const [channel, setChannel] = useState('whatsapp');
  const [openFaq, setOpenFaq] = useState(null);

  const composeMessage = () => {
    return `Hello African Century,\n\nMy name is ${form.name}${form.company ? ` of ${form.company}` : ''}.\n\nI would like to discuss: ${form.interest}.\n\n${form.message}\n\nContact: ${form.phone || form.email}`.trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message || (!form.phone && !form.email)) {
      toast.error('Please share your name, a contact detail, and a short message.');
      return;
    }
    const msg = encodeURIComponent(composeMessage());
    if (channel === 'whatsapp') {
      window.open(`https://wa.me/${business.whatsapp}?text=${msg}`, '_blank');
      toast.success('Opening WhatsApp — please send the pre-filled message.');
    } else {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Meeting request — ' + form.interest)}&body=${msg}`;
      toast.success('Opening your email client.');
    }
  };

  return (
    <PageTransition>
      <SEO title="Contact — African Century" description="Arrange a confidential meeting with a partner. Harare, Zimbabwe." />

      {/* Hero */}
      <section className="relative bg-ivory-100 overflow-hidden">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-14 lg:pt-28 lg:pb-16">
          <nav className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-ink-400 mb-8">
            <Link to="/" className="hover:text-gold-500">Home</Link>
            <span>/</span>
            <span className="text-gold-500">Contact</span>
          </nav>
          <p className="kicker text-gold-500 mb-6">By Appointment</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-forest-800 text-balance max-w-5xl">
            Let us <span className="italic">talk</span>.
          </h1>
          <div className="rule-gold w-24 my-8" />
          <p className="max-w-2xl text-ink-500 text-lg leading-relaxed text-pretty">
            All introductory conversations are with a partner. Strictly confidential, no obligation, and typically forty-five minutes.
          </p>
        </div>
      </section>

      {/* Main contact */}
      <section className="bg-ivory-50 py-20 lg:py-24 relative">
        <div className="paper" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <SectionReveal className="lg:col-span-7">
              <div className="bg-ivory-100 border border-ivory-300 p-8 sm:p-12">
                <p className="kicker text-gold-500 mb-4">Arrange a Meeting</p>
                <h2 className="font-display text-3xl sm:text-4xl text-forest-800 leading-tight mb-8 text-balance">
                  Tell us, in brief, what we can do for you.
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" id="name" value={form.name} onChange={v => setForm({ ...form, name: v })} required />
                    <Field label="Company" id="company" value={form.company} onChange={v => setForm({ ...form, company: v })} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" id="email" type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
                    <Field label="Phone" id="phone" type="tel" value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
                  </div>

                  <div>
                    <label className="kicker text-ink-400 mb-2 block">Area of interest</label>
                    <select
                      value={form.interest}
                      onChange={e => setForm({ ...form, interest: e.target.value })}
                      className="w-full bg-ivory-50 border-b border-ink-200 py-3 text-base text-forest-800 focus:border-gold-400 outline-none transition-colors appearance-none"
                    >
                      {pillars.map(p => <option key={p.slug}>{p.title}</option>)}
                      <option>General enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="kicker text-ink-400 mb-2 block">Message</label>
                    <textarea
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      required
                      placeholder="A few lines about your business and what you are looking for…"
                      className="w-full bg-ivory-50 border-b border-ink-200 py-3 text-base text-forest-800 focus:border-gold-400 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Channel */}
                  <div>
                    <label className="kicker text-ink-400 mb-3 block">Send via</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setChannel('whatsapp')}
                        className={`flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.22em] uppercase transition-colors ${
                          channel === 'whatsapp'
                            ? 'bg-forest-700 text-ivory-100'
                            : 'border border-ivory-300 text-ink-500 hover:border-forest-700'
                        }`}
                      >
                        <WhatsappLogo size={14} /> WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setChannel('email')}
                        className={`flex items-center justify-center gap-2 py-3.5 text-xs tracking-[0.22em] uppercase transition-colors ${
                          channel === 'email'
                            ? 'bg-gold-400 text-forest-900'
                            : 'border border-ivory-300 text-ink-500 hover:border-gold-400'
                        }`}
                      >
                        <EnvelopeSimple size={14} /> Email
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`w-full mt-4 inline-flex items-center justify-center gap-3 py-4 text-xs tracking-[0.22em] uppercase transition-colors ${
                      channel === 'whatsapp' ? 'bg-forest-700 text-ivory-100 hover:bg-forest-800' : 'bg-gold-400 text-forest-900 hover:bg-gold-300'
                    }`}
                  >
                    Send via {channel === 'whatsapp' ? 'WhatsApp' : 'Email'}
                    <ArrowRight size={14} />
                  </button>

                  <p className="text-[11px] text-ink-400 flex items-center gap-2 pt-2">
                    <ShieldCheck size={12} weight="light" className="text-gold-500" />
                    All submissions are treated with strict confidentiality.
                  </p>
                </form>
              </div>
            </SectionReveal>

            {/* Sidebar */}
            <SectionReveal className="lg:col-span-5 space-y-6" delay={120}>
              <div className="bg-forest-800 text-ivory-100 p-8 sm:p-10">
                <p className="kicker text-gold-300 mb-6">Direct Contact</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <MapPin size={18} weight="light" className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="kicker text-ivory-200/60 mb-1">Office</p>
                      <p className="text-base leading-relaxed">{business.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={18} weight="light" className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="kicker text-ivory-200/60 mb-1">Telephone</p>
                      <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="text-base hover:text-gold-300">
                        {business.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <EnvelopeSimple size={18} weight="light" className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="kicker text-ivory-200/60 mb-1">Email</p>
                      <a href={`mailto:${business.email}`} className="text-base hover:text-gold-300">
                        {business.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={18} weight="light" className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="kicker text-ivory-200/60 mb-1">Hours</p>
                      <p className="text-base leading-relaxed">
                        Mon–Fri {business.hours.weekdays}<br />
                        Saturday {business.hours.saturday}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ivory-200">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[95%]"
                  loading="lazy"
                  title="Office location"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-100 py-20 lg:py-24 relative">
        <div className="paper" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="kicker text-gold-500 mb-5 text-center">Frequently Asked</p>
            <h2 className="font-display text-4xl sm:text-5xl text-forest-800 leading-tight text-center mb-12 text-balance">
              Questions we hear <span className="italic">often</span>.
            </h2>
          </SectionReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 60}>
                <div className="border border-ivory-300 bg-ivory-50">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg text-forest-800">{faq.q}</span>
                    <CaretDown
                      size={16}
                      className={`text-gold-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-ink-500 leading-relaxed text-pretty border-t border-ivory-300 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, id, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label htmlFor={id} className="kicker text-ink-400 mb-2 block">
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full bg-ivory-50 border-b border-ink-200 py-3 text-base text-forest-800 placeholder:text-ink-300 focus:border-gold-400 outline-none transition-colors"
      />
    </div>
  );
}

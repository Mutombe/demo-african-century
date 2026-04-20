import React from 'react';

export default function TeamMember({ member }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-ivory-200 aspect-[4/5] mb-5">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent" />
      </div>
      <div>
        <p className="kicker text-gold-500 mb-2">{member.title}</p>
        <h3 className="font-display text-xl text-forest-800 leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-xs text-ink-400 tracking-wide mb-3">
          {member.credentials}
        </p>
        <p className="text-sm text-ink-500 leading-relaxed text-pretty">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

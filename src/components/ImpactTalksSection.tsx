import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { UPCOMING_IMPACT_TALKS } from '../data/mockData';
import { ImpactSession } from '../types';
import { Video, Calendar, ArrowUpRight, ChevronDown, ChevronUp, X } from 'lucide-react';

interface ImpactTalksSectionProps {
  onRsvpSession: (session: ImpactSession) => void;
}

export const ImpactTalksSection: React.FC<ImpactTalksSectionProps> = ({ onRsvpSession }) => {
  const [expandedTalks, setExpandedTalks] = useState<Record<string, boolean>>({});
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const toggleTalk = (id: string) => {
    setExpandedTalks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Community images for talk cards
  const communityImages = [
    '/community (2).jpg',
    '/community (4).jpg',
    '/community (6).jpg',
  ];

  return (
    <section id="impact-talks" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs text-[#8b949e] uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5 text-[#58a6ff]" />
            <span>Live Sessions</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Impact Talks & Live Meetups
          </h2>
          <p className="text-[#8b949e] mt-2">Interactive Community Calls on Google Meet</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(260px,auto)]">
          {UPCOMING_IMPACT_TALKS.map((talk, idx) => {
            const isExpanded = !!expandedTalks[talk.id];
            const isLarge = idx === 0;
            const cardImage = talk.image || communityImages[idx % communityImages.length];

            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group rounded-xl border border-[#30363d]/40 bg-[#1c2128]/30 hover:border-[#58a6ff]/30 hover:bg-[#1c2128]/50 p-5 flex flex-col justify-between transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div>
                  <div
                    onClick={() => setSelectedFlyer(talk.image || null)}
                    className={`relative -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl border-b border-[#30363d]/30 cursor-pointer ${
                      isLarge ? 'h-44 lg:h-56' : 'h-32'
                    }`}
                  >
                    <img src={cardImage} alt={talk.topic} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#010409]/80 to-transparent" />
                  </div>

                  <div className="flex items-center justify-between mb-3 text-xs text-[#8b949e]">
                    <div className="flex items-center gap-1.5 text-[#58a6ff]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                      talk.isComingSoon ? 'bg-[#d29922]/10 text-[#d29922]' : 'bg-[#3fb950]/10 text-[#3fb950]'
                    }`}>
                      {talk.isComingSoon ? 'Coming Soon' : 'Live Event'}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-white tracking-tight mb-3 ${isLarge ? 'text-xl' : 'text-base'}`}>
                    {talk.topic}
                  </h3>

                  {talk.speakers && talk.speakers.length > 0 && (
                    <div className="space-y-1.5 mb-3">
                      {talk.speakers.map((sp, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-white font-medium">{sp.name}</span>
                          <span className="text-[#8b949e]">{sp.role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isExpanded && (
                    <div className="mt-3 p-3 rounded-lg bg-[#1c2128]/50 border border-[#30363d]/30 text-xs text-[#8b949e]">
                      {talk.isComingSoon
                        ? 'This session is currently in planning. Keep an eye on our community announcements for official broadcast details.'
                        : 'Live interactive session happening on the 4th of October 2026. Join the discussion on what makes us human in an age of rapid technological acceleration.'}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#30363d]/30 flex items-center justify-between">
                  {talk.isComingSoon ? (
                    <span className="text-xs text-[#8b949e]">Date TBA</span>
                  ) : (
                    <span className="text-xs text-[#58a6ff]">{talk.spotsLeft} seats left</span>
                  )}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleTalk(talk.id)}
                      className="text-xs text-[#8b949e] hover:text-white flex items-center gap-1"
                    >
                      {isExpanded ? 'Hide' : 'Details'}
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    {!talk.isComingSoon && (
                      <button
                        onClick={() => onRsvpSession(talk)}
                        className="px-3 py-1.5 rounded-lg bg-[#3fb950]/10 text-[#3fb950] text-xs font-medium hover:bg-[#3fb950]/20 transition-all flex items-center gap-1"
                      >
                        Reserve
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Flyer Modal */}
      {selectedFlyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedFlyer(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#0d1117] rounded-xl border border-[#30363d] p-4 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedFlyer(null)} className="absolute top-4 right-4 p-2 text-[#8b949e] hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3fb950]/15 text-[#3fb950] mb-3">Official Event Flyer</span>
            <img src={selectedFlyer} alt="Event Flyer" className="max-w-full max-h-[75vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

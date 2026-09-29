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

  return (
    <section id="impact-talks" className="py-24 sm:py-32 relative border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#00F0FF] uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5 text-[#00FFAB]" />
            <span>Live Community Sessions</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Impact Talks & Live Meetups
          </h2>
          <p className="text-slate-600 dark:text-cyan-200/80 mt-2 font-medium">Interactive Community Calls on Google Meet</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(260px,auto)]">
          {UPCOMING_IMPACT_TALKS.map((talk, idx) => {
            const isExpanded = !!expandedTalks[talk.id];
            const isLarge = idx === 0;

            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group rounded-2xl glass-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div>
                  {talk.image && (
                    <div
                      onClick={() => setSelectedFlyer(talk.image || null)}
                      className={`relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl border-b border-cyan-500/20 cursor-pointer ${
                        isLarge ? 'h-48 lg:h-60' : 'h-36'
                      }`}
                    >
                      <img src={talk.image} alt={talk.topic} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E]/80 to-transparent" />
                      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full glass-pill text-[#00FFAB] text-[10px] font-bold">
                        Click to view flyer
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5 text-[#00F0FF] font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#00FFAB]" />
                      <span>{talk.date}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      talk.isComingSoon ? 'bg-amber-500/20 text-amber-300' : 'bg-[#00FFAB]/20 text-[#00FFAB]'
                    }`}>
                      {talk.isComingSoon ? 'Coming Soon' : 'Live Event'}
                    </span>
                  </div>

                  <h3 className={`font-display font-bold text-slate-900 dark:text-white tracking-tight mb-3 ${isLarge ? 'text-2xl' : 'text-base'}`}>{talk.topic}</h3>

                  {talk.speakers && talk.speakers.length > 0 && (
                    <div className="space-y-1.5 mb-3 p-3 rounded-xl glass-card">
                      {talk.speakers.map((sp, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className="text-slate-900 dark:text-white font-semibold">{sp.name}</span>
                          <span className="text-[#00F0FF] text-[11px]">{sp.role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isExpanded && (
                    <div className="mt-3 p-3 rounded-xl glass-card text-xs text-slate-700 dark:text-slate-300">
                      {talk.isComingSoon
                        ? 'This session is currently in planning. Keep an eye on our community announcements for broadcast details.'
                        : 'Live interactive session happening on the 4th of October 2026. Join the discussion on what makes us human in an age of AI.'}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between">
                  {talk.isComingSoon ? (
                    <span className="text-xs text-slate-400">Date TBA</span>
                  ) : (
                    <span className="text-xs font-bold text-[#00FFAB]">{talk.spotsLeft} seats left</span>
                  )}
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleTalk(talk.id)} className="text-xs text-[#00F0FF] hover:underline flex items-center gap-1 font-semibold">
                      {isExpanded ? 'Hide' : 'Details'}
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    {!talk.isComingSoon && (
                      <button onClick={() => onRsvpSession(talk)} className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00FFAB] to-[#00F0FF] text-slate-950 text-xs font-bold shadow-md shadow-[#00FFAB]/20 hover:scale-105 transition-all flex items-center gap-1">
                        <span>Reserve</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedFlyer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedFlyer(null)}>
          <div className="relative max-w-4xl w-full max-h-[90vh] glass-card rounded-2xl p-6 flex flex-col items-center border-cyan-500/30" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedFlyer(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white glass-pill rounded-full"><X className="w-5 h-5" /></button>
            <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00FFAB] to-[#00F0FF] text-slate-950 mb-4 shadow-md">Official Event Flyer</span>
            <img src={selectedFlyer} alt="Event Flyer" className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
};

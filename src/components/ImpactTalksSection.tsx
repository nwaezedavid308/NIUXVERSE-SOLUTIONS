import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { UPCOMING_IMPACT_TALKS } from '../data/mockData';
import { ImpactSession } from '../types';
import { Video, Calendar, Users, ArrowUpRight, ChevronDown, ChevronUp, X } from 'lucide-react';

interface ImpactTalksSectionProps {
  onRsvpSession: (session: ImpactSession) => void;
}

export const ImpactTalksSection: React.FC<ImpactTalksSectionProps> = ({ onRsvpSession }) => {
  const [expandedTalks, setExpandedTalks] = useState<Record<string, boolean>>({});
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const toggleTalk = (id: string) => {
    setExpandedTalks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Bento layout: first talk is large, others are smaller
  const bentoLayouts = [
    'md:col-span-2 lg:col-span-2 lg:row-span-2', // What Makes Us Human - Large featured
    'md:col-span-1 lg:col-span-1',              // Modern Tech & Human Emotion
    'md:col-span-1 lg:col-span-1',              // Creating Real-World Impact
  ];

  return (
    <section id="impact-talks" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0065E1]/10 dark:bg-[#0065E1]/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/15 border border-[#0065E1]/20 dark:border-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] text-xs font-semibold tracking-wider uppercase mb-4">
              <Video className="w-3.5 h-3.5" />
              <span>Live Sessions</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">Upcoming Talks</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Impact Talks & Live Meetups
            </h2>
            <p className="text-lg sm:text-xl text-[#0065E1] dark:text-[#01CF11] mt-2 font-medium tracking-tight">
              Interactive Community Calls on Google Meet
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm dark:border-[#0065E1]/20 dark:bg-[#051b44]/60 text-sm text-slate-600 dark:text-slate-300 max-w-md shadow-sm">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-semibold block mb-1.5 text-xs uppercase tracking-wider">Small Group Calls:</span>
            Seats are limited so everyone can ask questions and join the conversation directly.
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(280px,auto)]">
          {UPCOMING_IMPACT_TALKS.map((talk, idx) => {
            const isExpanded = !!expandedTalks[talk.id];
            const isLarge = idx === 0;

            return (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl dark:border-[#0065E1]/20 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-5 sm:p-6 flex flex-col justify-between hover:border-[#0065E1]/40 dark:hover:border-[#01CF11]/40 transition-all duration-500 relative overflow-hidden ${
                  bentoLayouts[idx] || ''
                }`}
              >
                <div className={isLarge ? 'flex-1' : ''}>
                  {/* Poster Image */}
                  {talk.image && (
                    <div
                      onClick={() => setSelectedFlyer(talk.image || null)}
                      className={`relative -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-4 sm:mb-5 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/20 bg-[#02102e] group/poster cursor-pointer ${
                        isLarge ? 'h-48 sm:h-64 lg:h-72' : 'h-36 sm:h-44'
                      }`}
                      title="Click to view full flyer"
                    >
                      <img
                        src={talk.image}
                        alt={`${talk.topic} event poster`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/poster:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/85 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="px-2.5 py-1 rounded-full bg-[#0065E1]/90 backdrop-blur-md text-[10px] font-semibold">
                          Live Interactive Session
                        </span>
                        <span className="text-[10px] font-medium text-[#01CF11] bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
                          Sunday 4th Oct
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3 sm:mb-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 text-[#0065E1] dark:text-[#01CF11] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                    {talk.isComingSoon ? (
                      <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/30 text-[10px] uppercase tracking-wider">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-lg bg-[#01CF11]/15 text-[#02102e] dark:text-[#01CF11] font-semibold border border-[#01CF11]/30 text-[10px] uppercase tracking-wider">
                        Live Event
                      </span>
                    )}
                  </div>

                  <h3 className={`font-display font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors leading-snug ${
                    isLarge ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
                  }`}>
                    {talk.topic}
                  </h3>

                  {talk.speakers && talk.speakers.length > 0 ? (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 mb-4 space-y-2 text-xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0065E1] dark:text-[#01CF11] block">
                        Speakers & Panel
                      </span>
                      {talk.speakers.map((sp, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900 dark:text-white">{sp.name}</span>
                          <span className="text-[#0065E1] dark:text-[#01CF11] text-[11px]">{sp.role}</span>
                        </div>
                      ))}
                      {talk.moderator && (
                        <div className="pt-1.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500 dark:text-slate-400">Moderator:</span>
                          <span className="font-bold text-[#01CF11]">{talk.moderator}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
                      <p>
                        <span className="text-slate-500 dark:text-slate-400">Host:</span> <span className="text-slate-900 dark:text-white font-medium">{talk.host}</span>
                      </p>
                      {talk.guest && (
                        <p>
                          <span className="text-slate-500 dark:text-slate-400">Guest:</span> <span className="text-[#0065E1] dark:text-[#01CF11] font-medium">{talk.guest}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Collapsible Agenda */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleTalk(talk.id)}
                      className="inline-flex items-center gap-1 text-xs text-[#0065E1] dark:text-[#01CF11] hover:underline transition-colors font-medium"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {talk.isComingSoon
                          ? 'This session is currently in planning. Keep an eye on our community announcements for official broadcast details.'
                          : 'Live interactive session happening on the 4th of October 2026. Join the discussion on what makes us human in an age of rapid technological acceleration.'}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                  {talk.isComingSoon ? (
                    <>
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                        Inactive · Date TBA
                      </span>
                      <button
                        disabled
                        className="px-4 py-2 rounded-full bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-slate-500 text-xs font-semibold cursor-not-allowed border border-slate-200 dark:border-white/10"
                      >
                        Coming Soon
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-[11px] text-[#0065E1] dark:text-[#01CF11] font-semibold">
                        {talk.spotsLeft} seats available
                      </span>

                      <button
                        id={`rsvp-talk-btn-${talk.id}`}
                        onClick={() => onRsvpSession(talk)}
                        className="px-4 py-2 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold transition-all flex items-center gap-1 shadow-lg shadow-[#01CF11]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Reserve Seat</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Flyer Lightbox Modal */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#02102e] rounded-2xl border border-[#0065E1]/30 p-4 sm:p-6 overflow-hidden flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close flyer view"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full flex justify-between items-center mb-3 pr-10">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#01CF11] text-[#02102e]">
                Official Event Flyer
              </span>
              <span className="text-xs text-slate-300">
                What Makes Us Human? · 4th October 2026
              </span>
            </div>
            <div className="w-full flex-1 flex items-center justify-center overflow-auto max-h-[78vh]">
              <img
                src={selectedFlyer}
                alt="What Makes Us Human? Official Event Flyer"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-[#0065E1]/20"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

import React, { useState } from 'react';
import { UPCOMING_IMPACT_TALKS } from '../data/mockData';
import { ImpactSession } from '../types';
import { Video, Calendar, Users, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface ImpactTalksSectionProps {
  onRsvpSession: (session: ImpactSession) => void;
}

export const ImpactTalksSection: React.FC<ImpactTalksSectionProps> = ({ onRsvpSession }) => {
  const [expandedTalks, setExpandedTalks] = useState<Record<string, boolean>>({});

  const toggleTalk = (id: string) => {
    setExpandedTalks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="impact-talks" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-[#0065E1]/25 bg-white dark:bg-[#02102e] transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0065E1]/15 dark:bg-[#0065E1]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/30 dark:border-[#0065E1]/40 text-[#0065E1] dark:text-[#01CF11] text-xs tracking-[-0.01em] mb-3 font-semibold">
              <Video className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
              <span>LIVE SESSIONS</span>
              <span>/</span>
              <span>UPCOMING TALKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-slate-900 dark:text-white leading-[1.15]">
              Impact Talks & Live Meetups
            </h2>
            <p className="text-lg sm:text-xl font-normal text-[#0065E1] dark:text-[#01CF11] mt-1 tracking-[-0.01em]">
              Interactive Community Calls on Google Meet
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#051b44] dark:border-[#0065E1]/30 text-xs text-slate-600 dark:text-slate-200 max-w-sm shadow-sm transition-colors tracking-[-0.01em]">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-semibold block mb-1">SMALL GROUP CALLS:</span>
            Seats are limited so everyone can ask questions and join the conversation directly.
          </div>
        </div>

        {/* Sessions Grid with Collapsible Agendas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_IMPACT_TALKS.map((talk) => {
            const isExpanded = !!expandedTalks[talk.id];

            return (
              <div
                key={talk.id}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl dark:border-[#0065E1]/30 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-6 flex flex-col justify-between hover:border-[#0065E1]/50 dark:hover:border-[#01CF11]/60 dark:hover:shadow-2xl dark:hover:shadow-[#0065E1]/25 transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1.5 text-[#0065E1] dark:text-[#01CF11] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                    {talk.isComingSoon ? (
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 text-[10px] uppercase tracking-wider">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-[#01CF11]/20 text-[#02102e] dark:text-[#01CF11] font-bold border border-[#01CF11]/40 text-[10px] uppercase tracking-wider">
                        Live Event
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors leading-snug">
                    {talk.topic}
                  </h3>

                  {talk.speakers && talk.speakers.length > 0 ? (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/30 mb-4 space-y-2 text-xs">
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
                          <span className="text-slate-600 dark:text-neutral-400">Moderator:</span>
                          <span className="font-bold text-[#01CF11]">{talk.moderator}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1 mb-4 text-xs text-slate-500 dark:text-neutral-400">
                      <p>
                        <span className="text-slate-500 dark:text-neutral-400">Host:</span> <span className="text-slate-900 dark:text-white font-medium">{talk.host}</span>
                      </p>
                      {talk.guest && (
                        <p>
                          <span className="text-slate-500 dark:text-neutral-400">Guest:</span> <span className="text-[#0065E1] dark:text-[#01CF11] font-medium">{talk.guest}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Collapsible Agenda Dropdown */}
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
                      <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-[#0065E1]/30 text-xs text-slate-700 dark:text-slate-200 leading-relaxed animate-fadeIn">
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
                      <span className="text-[11px] text-slate-400 dark:text-neutral-500 font-medium">
                        Inactive • Date TBA
                      </span>
                      <button
                        disabled
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-neutral-500 text-xs font-semibold cursor-not-allowed border border-slate-200 dark:border-white/10"
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
                        className="px-3.5 py-1.5 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold transition-colors flex items-center gap-1 shadow-md shadow-[#01CF11]/25"
                      >
                        <span>Reserve Seat</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

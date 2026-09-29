import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { SHOW_EPISODES } from '../data/mockData';
import { Episode } from '../types';
import { Radio, Play, Pause, Search, User, Clock, Bookmark, ChevronDown, ChevronUp, X, ArrowUpRight, Check } from 'lucide-react';

export const ShowSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [savedEpisodes, setSavedEpisodes] = useState<Record<string, boolean>>({});
  const [expandedEpisodeCards, setExpandedEpisodeCards] = useState<Record<string, boolean>>({});

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const categories = [
    'All',
    'Human Condition',
    'Ethics & Rights',
    'Future Trends',
    'Creator Economy',
    'Futuristic Tech',
  ];

  const filteredEpisodes = SHOW_EPISODES.filter((ep) => {
    const matchesCategory = selectedCategory === 'All' || ep.category === selectedCategory;
    const matchesSearch =
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.hook.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ep.guest && ep.guest.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ep.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const togglePlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingId(playingId === id ? null : id);
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedEpisodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleCardExpansion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedEpisodeCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section ref={sectionRef} id="the-show" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#0065E1]/10 dark:bg-[#0065E1]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#01CF11]/8 dark:bg-[#01CF11]/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/15 border border-[#0065E1]/20 dark:border-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] text-xs font-semibold tracking-wider uppercase mb-4">
              <Radio className="w-3.5 h-3.5" />
              <span>Episode Archive</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">12 Episodes</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              The Niuxverse Show
            </h2>
            <p className="text-lg sm:text-xl text-[#0065E1] dark:text-[#01CF11] mt-2 font-medium tracking-tight">
              Futuristic Tech & Human Life
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm dark:border-[#0065E1]/20 dark:bg-[#051b44]/60 max-w-md shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0065E1] dark:text-[#01CF11] tracking-wider uppercase mb-1.5">
              <User className="w-4 h-4" />
              <span>Hosted by Nwaeze David</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "The King of Intelligence" — Conversations on future technology, human connection, and creating positive impact.
            </p>
          </div>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-8 border-b border-slate-200 dark:border-white/10"
        >
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#02102e] dark:bg-white text-white dark:text-[#02102e] shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 border border-slate-200 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, thinkers, notes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-slate-500 text-sm focus:outline-none focus:border-[#0065E1] dark:focus:border-[#01CF11] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Episodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((episode, idx) => {
            const isPlaying = playingId === episode.id;
            const isSaved = !!savedEpisodes[episode.id];
            const isExpanded = !!expandedEpisodeCards[episode.id];

            return (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl dark:border-[#0065E1]/20 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-6 flex flex-col justify-between hover:border-[#0065E1]/40 dark:hover:border-[#01CF11]/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0065E1]/30 via-[#01CF11] to-transparent group-hover:from-[#0065E1] group-hover:via-[#01CF11] transition-all" />

                <div>
                  {/* Episode Poster Thumbnail */}
                  {episode.image && (
                    <div
                      onClick={() => setActiveEpisode(episode)}
                      className="relative -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/20 cursor-pointer group/epimg bg-[#02102e]"
                    >
                      <img
                        src={episode.image}
                        alt={`${episode.title} event poster`}
                        referrerPolicy="no-referrer"
                        className="w-full h-44 object-cover object-center group-hover/epimg:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/85 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="px-2.5 py-1 rounded-full bg-[#0065E1]/90 backdrop-blur-md text-[10px] font-semibold">
                          Special Broadcast
                        </span>
                        {episode.eventDate && (
                          <span className="text-[10px] font-medium text-[#01CF11] bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
                            {episode.eventDate}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[#0065E1] dark:text-[#01CF11] px-2.5 py-0.5 rounded-lg bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/20 dark:border-[#0065E1]/30 font-display">
                        EP {episode.number}
                      </span>
                      {episode.isComingSoon ? (
                        <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/30 text-[10px] uppercase tracking-wider">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-lg bg-[#01CF11]/15 text-[#02102e] dark:text-[#01CF11] font-semibold border border-[#01CF11]/30 text-[10px] uppercase tracking-wider">
                          Live · 4th Oct 2026
                        </span>
                      )}
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">{episode.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(episode.id, e)}
                        className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors ${isSaved ? 'text-[#01CF11]' : 'text-slate-400 dark:text-slate-500'}`}
                        title="Bookmark Episode"
                      >
                        <Bookmark className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-snug mb-3 tracking-tight group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors">
                    {episode.title}
                  </h3>

                  {/* Hook quotation */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-white/5 mb-4 text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{episode.hook}"
                  </div>

                  {/* Speakers / Guest Section */}
                  {episode.speakers && episode.speakers.length > 0 ? (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 mb-4 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0065E1] dark:text-[#01CF11]">
                          Speakers
                        </span>
                        {episode.eventDate && (
                          <span className="text-[10px] font-semibold text-slate-700 dark:text-white">
                            {episode.eventDate}
                          </span>
                        )}
                      </div>
                      {episode.speakers.map((sp, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900 dark:text-white">{sp.name}</span>
                          <span className="text-[#0065E1] dark:text-[#01CF11] text-[11px]">{sp.role}</span>
                        </div>
                      ))}
                      {episode.moderator && (
                        <div className="pt-1.5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-slate-500 dark:text-slate-400">Moderator:</span>
                          <span className="font-bold text-[#01CF11]">{episode.moderator}</span>
                        </div>
                      )}
                    </div>
                  ) : episode.guest ? (
                    <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
                      <div className="w-7 h-7 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/20 dark:border-[#0065E1]/30 flex items-center justify-center text-[10px] text-[#0065E1] dark:text-[#01CF11] font-bold">
                        {episode.guest.slice(0, 1)}
                      </div>
                      <div className="truncate">
                        <span className="font-semibold text-slate-900 dark:text-white">{episode.guest}</span>
                        {episode.guestRole && (
                          <span className="text-[#0065E1] dark:text-[#01CF11] block text-[10px] truncate">
                            {episode.guestRole}
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
                      <span>Solo Session by Nwaeze David</span>
                    </div>
                  )}

                  {/* Collapsible Key Questions & Synopsis Accordion */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 dark:border-white/10 mb-4 space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <p className="text-slate-600 dark:text-slate-300">{episode.description}</p>
                      <div>
                        <span className="font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block mb-1.5 text-[10px]">
                          Core Inquiries:
                        </span>
                        <ul className="space-y-1">
                          {episode.keyQuestions.map((q, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#0065E1] dark:text-[#01CF11] font-bold mt-0.5">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                  {episode.isComingSoon ? (
                    <button
                      disabled
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-400 border border-slate-200 dark:bg-white/5 dark:text-slate-500 dark:border-white/10 cursor-not-allowed opacity-75"
                    >
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => togglePlay(episode.id, e)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                        isPlaying
                          ? 'bg-[#01CF11] text-[#02102e] font-bold shadow-lg shadow-[#01CF11]/25'
                          : 'bg-[#0065E1]/10 text-[#0065E1] border border-[#0065E1]/20 hover:bg-[#0065E1] hover:text-white dark:bg-[#0065E1]/20 dark:text-[#01CF11] dark:border-[#0065E1]/30 dark:hover:bg-[#0065E1] dark:hover:text-white'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      <span>{isPlaying ? 'Playing Excerpt' : 'Preview Audio'}</span>
                    </button>
                  )}

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleCardExpansion(episode.id, e)}
                      className="text-xs text-[#0065E1] dark:text-[#01CF11] hover:underline flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    <button
                      onClick={() => setActiveEpisode(episode)}
                      className="p-1.5 text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-white transition-colors"
                      title="Open full episode notes"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
                    </button>
                  </div>
                </div>

                {/* Animated waveform when playing */}
                {isPlaying && (
                  <div className="mt-3 pt-2 flex items-center justify-center gap-1">
                    {[35, 80, 45, 95, 60, 40, 75, 90, 30, 85, 50, 70].map((h, i) => (
                      <span
                        key={i}
                        className="w-1 bg-[#01CF11] rounded-full animate-pulse"
                        style={{
                          height: `${h * 0.22}px`,
                          animationDelay: `${(i * 0.1).toFixed(1)}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            <p className="text-lg font-display">No discussions found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#0065E1]/10 border border-[#0065E1]/20 text-[#0065E1] dark:bg-[#0065E1]/20 dark:border-[#0065E1]/30 dark:text-[#01CF11] text-sm hover:bg-[#0065E1] hover:text-white transition-all font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Episode Full Notes Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-[#0065E1]/30 dark:bg-[#051b44] dark:text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {activeEpisode.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/20 bg-[#02102e] flex items-center justify-center">
                <img
                  src={activeEpisode.image}
                  alt={activeEpisode.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[460px] object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <span className="px-3 py-1 rounded-full bg-[#01CF11] text-[#02102e] font-bold text-xs">
                    Live Broadcast Event
                  </span>
                  {activeEpisode.eventDate && (
                    <span className="font-semibold text-white bg-black/60 px-2.5 py-1 rounded-full">
                      {activeEpisode.eventDate}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#02102e] px-2.5 py-0.5 rounded-lg bg-[#01CF11] font-display">
                EPISODE {activeEpisode.number}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider">
                {activeEpisode.category} · {activeEpisode.duration}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
              {activeEpisode.title}
            </h3>

            {/* Hook callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:border-none dark:bg-gradient-to-r dark:from-[#0065E1]/20 dark:to-transparent border-l-4 border-[#01CF11] mb-6 text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "{activeEpisode.hook}"
            </div>

            {/* Speakers / Guest details */}
            {activeEpisode.speakers && activeEpisode.speakers.length > 0 ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#0065E1] dark:text-[#01CF11] font-bold uppercase tracking-wider">Featured Speakers</span>
                  {activeEpisode.eventDate && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-lg bg-[#01CF11]/15 text-[#02102e] dark:text-[#01CF11]">
                      {activeEpisode.eventDate}
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 pt-1">
                  {activeEpisode.speakers.map((sp, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/50 dark:border-white/5 last:border-0">
                      <span className="font-bold text-slate-900 dark:text-white">{sp.name}</span>
                      <span className="text-[#0065E1] dark:text-[#01CF11]">{sp.role}</span>
                    </div>
                  ))}
                  {activeEpisode.moderator && (
                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-900 dark:text-white">
                      <span className="text-slate-500 dark:text-slate-400">Moderator:</span>
                      <span className="text-[#01CF11] font-bold">{activeEpisode.moderator}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : activeEpisode.guest ? (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-white/5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/20 dark:border-[#0065E1]/30 flex items-center justify-center text-[#0065E1] dark:text-[#01CF11] font-bold">
                  {activeEpisode.guest.slice(0, 2)}
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Featured Guest</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{activeEpisode.guest}</p>
                  <p className="text-xs text-[#0065E1] dark:text-[#01CF11] font-semibold">{activeEpisode.guestRole}</p>
                </div>
              </div>
            ) : null}

            {/* Synopsis */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Episode Overview
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeEpisode.description}
              </p>
            </div>

            {/* Key Inquiries */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-3">
                Key Questions
              </h4>
              <ul className="space-y-2">
                {activeEpisode.keyQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <span className="text-[#0065E1] dark:text-[#01CF11] font-bold mt-0.5">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio transmission bar */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={(e) => togglePlay(activeEpisode.id, e)}
                  className="w-10 h-10 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] flex items-center justify-center flex-shrink-0 transition-colors font-bold shadow-lg shadow-[#01CF11]/25"
                >
                  {playingId === activeEpisode.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div className="text-xs">
                  <p className="text-slate-900 dark:text-white font-semibold">
                    {playingId === activeEpisode.id ? 'Streaming Audio Stream' : 'Listen to Episode Stream'}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px]">Nwaeze David {activeEpisode.guest ? `with ${activeEpisode.guest}` : '(Solo Session)'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

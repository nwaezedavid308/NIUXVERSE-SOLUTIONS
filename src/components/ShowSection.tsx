import React, { useState } from 'react';
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
    <section id="the-show" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-[#0065E1]/25 bg-white dark:bg-[#02102e] transition-colors duration-300">
      {/* Editorial backdrop accents */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] dr-blue-glow opacity-30 dark:opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#01CF11]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/30 dark:border-[#0065E1]/40 text-[#0065E1] dark:text-[#01CF11] text-xs tracking-[-0.01em] mb-3 font-semibold">
              <Radio className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
              <span>EPISODE ARCHIVE</span>
              <span>/</span>
              <span>12 EPISODES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.02em] text-slate-900 dark:text-white leading-[1.15]">
              The Niuxverse Show
            </h2>
            <p className="text-lg sm:text-xl font-normal text-[#0065E1] dark:text-[#01CF11] mt-1 tracking-[-0.01em]">
              Futuristic Tech & Human Life
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-[#0065E1]/30 dark:bg-[#051b44] max-w-md shadow-sm transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0065E1] dark:text-[#01CF11] tracking-[-0.01em] uppercase mb-1">
              <User className="w-4 h-4" />
              <span>HOSTED BY NWAEZE DAVID</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-200 tracking-[-0.01em]">
              "The King of Intelligence" • Conversations on future technology, human connection, and creating positive impact.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar (Compact & Clean) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-white/10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#0065E1] text-white shadow-md shadow-[#0065E1]/30'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200 dark:bg-[#051b44] dark:text-slate-200 dark:hover:text-white dark:hover:bg-[#0065E1]/25 dark:border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, thinkers, notes..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 dark:bg-[#051b44] dark:border-[#0065E1]/30 dark:text-white dark:placeholder-neutral-400 text-xs focus:outline-none focus:border-[#0065E1] dark:focus:border-[#01CF11] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:text-neutral-400 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Episodes Grid with Collapsible Dossiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((episode) => {
            const isPlaying = playingId === episode.id;
            const isSaved = !!savedEpisodes[episode.id];
            const isExpanded = !!expandedEpisodeCards[episode.id];

            return (
              <div
                key={episode.id}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg dark:border-[#0065E1]/30 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-6 flex flex-col justify-between hover:border-[#0065E1]/50 dark:hover:border-[#01CF11]/60 dark:hover:shadow-xl dark:hover:shadow-[#0065E1]/25 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0065E1]/30 via-[#01CF11] to-transparent group-hover:from-[#0065E1] group-hover:via-[#01CF11] transition-all" />

                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-4 text-xs text-slate-500 dark:text-neutral-400">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-[#0065E1] dark:text-[#01CF11] px-2 py-0.5 rounded bg-[#0065E1]/10 dark:bg-[#0065E1]/30 border border-[#0065E1]/20 dark:border-[#0065E1]/50">
                        EP {episode.number}
                      </span>
                      {episode.isComingSoon ? (
                        <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border border-amber-500/30 text-[10px] uppercase tracking-wider">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-[#01CF11]/20 text-[#02102e] dark:text-[#01CF11] font-bold border border-[#01CF11]/40 text-[10px] uppercase tracking-wider">
                          Live • 4th Oct 2026
                        </span>
                      )}
                      <span className="text-[11px] text-slate-600 dark:text-slate-300">{episode.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-neutral-400">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(episode.id, e)}
                        className={`p-1 rounded hover:bg-slate-100 dark:hover:bg-white/10 transition-colors ${
                          isSaved ? 'text-[#01CF11]' : 'text-slate-400 dark:text-neutral-500'
                        }`}
                        title="Bookmark Episode"
                      >
                        <Bookmark className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors">
                    {episode.title}
                  </h3>

                  {/* Hook quotation */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-white/5 mb-4 text-xs text-slate-600 dark:text-slate-200 italic leading-relaxed">
                    "{episode.hook}"
                  </div>

                  {/* Speakers / Guest Section */}
                  {episode.speakers && episode.speakers.length > 0 ? (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/30 mb-4 space-y-2 text-xs">
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
                          <span className="text-slate-600 dark:text-neutral-400">Moderator:</span>
                          <span className="font-bold text-[#01CF11]">{episode.moderator}</span>
                        </div>
                      )}
                    </div>
                  ) : episode.guest ? (
                    <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-neutral-300 mb-4">
                      <div className="w-6 h-6 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/30 border border-[#0065E1]/30 dark:border-[#0065E1]/50 flex items-center justify-center text-[10px] text-[#0065E1] dark:text-[#01CF11] font-bold">
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
                    <div className="text-[11px] text-slate-500 dark:text-neutral-400 mb-4 flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
                      <span>Solo Session by Nwaeze David</span>
                    </div>
                  )}

                  {/* Collapsible Key Questions & Synopsis Accordion */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 dark:border-white/10 mb-4 space-y-3 text-xs text-slate-700 dark:text-slate-200 leading-relaxed animate-fadeIn">
                      <p className="text-slate-600 dark:text-slate-300">{episode.description}</p>
                      <div>
                        <span className="font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block mb-1">
                          Core Inquiries:
                        </span>
                        <ul className="space-y-1">
                          {episode.keyQuestions.map((q, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-[#0065E1] dark:text-[#01CF11] font-bold">•</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer: Audio preview trigger & Expandable Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2">
                  {episode.isComingSoon ? (
                    <button
                      disabled
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-400 border border-slate-200 dark:bg-white/5 dark:text-neutral-400 dark:border-white/10 cursor-not-allowed opacity-75"
                    >
                      <span>Coming Soon</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => togglePlay(episode.id, e)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isPlaying
                          ? 'bg-[#01CF11] text-[#02102e] font-bold'
                          : 'bg-[#0065E1]/10 text-[#0065E1] border border-[#0065E1]/30 hover:bg-[#0065E1] hover:text-white dark:bg-[#0065E1]/25 dark:text-[#01CF11] dark:border-[#0065E1]/50 dark:hover:bg-[#0065E1] dark:hover:text-white'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                      <span>{isPlaying ? 'Playing Excerpt' : 'Preview Audio'}</span>
                    </button>
                  )}

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleCardExpansion(episode.id, e)}
                      className="text-xs text-[#0065E1] dark:text-[#01CF11] hover:underline flex items-center gap-1 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-white/5 transition-colors font-medium"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>

                    <button
                      onClick={() => setActiveEpisode(episode)}
                      className="p-1 text-slate-400 hover:text-slate-800 dark:text-neutral-400 dark:hover:text-white transition-colors"
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
              </div>
            );
          })}
        </div>

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-neutral-400">
            <p className="text-base">No discussions found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-[#0065E1]/10 border border-[#0065E1]/30 text-[#0065E1] dark:bg-[#0065E1]/30 dark:border-[#0065E1]/50 dark:text-[#01CF11] text-xs hover:bg-[#0065E1] hover:text-white transition-all font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Episode Full Notes Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-[#0065E1]/50 dark:bg-[#051b44] dark:text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveEpisode(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#02102e] px-2.5 py-0.5 rounded bg-[#01CF11]">
                EPISODE {activeEpisode.number}
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-300 uppercase tracking-wider">
                {activeEpisode.category} • {activeEpisode.duration}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
              {activeEpisode.title}
            </h3>

            {/* Hook callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:border-none dark:bg-gradient-to-r dark:from-[#0065E1]/20 dark:to-transparent border-l-4 border-[#01CF11] mb-6 text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed">
              "{activeEpisode.hook}"
            </div>

            {/* Speakers / Guest details */}
            {activeEpisode.speakers && activeEpisode.speakers.length > 0 ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/30 mb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#0065E1] dark:text-[#01CF11] font-bold uppercase tracking-wider">Featured Speakers</span>
                  {activeEpisode.eventDate && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#01CF11]/20 text-[#02102e] dark:text-[#01CF11]">
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
                      <span className="text-slate-500 dark:text-neutral-400">Moderator:</span>
                      <span className="text-[#01CF11] font-bold">{activeEpisode.moderator}</span>
                    </div>
                  )}
                </div>
              </div>
            ) : activeEpisode.guest ? (
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-white/5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0065E1]/10 dark:bg-[#0065E1]/30 border border-[#0065E1]/30 dark:border-[#0065E1]/50 flex items-center justify-center text-[#0065E1] dark:text-[#01CF11] font-bold">
                  {activeEpisode.guest.slice(0, 2)}
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-neutral-400 uppercase tracking-wider block">Featured Guest</span>
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
              <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed">
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
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                    <span className="text-[#0065E1] dark:text-[#01CF11] font-bold mt-0.5">•</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audio transmission bar */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/90 dark:border-[#0065E1]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={(e) => togglePlay(activeEpisode.id, e)}
                  className="w-10 h-10 rounded-lg bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] flex items-center justify-center flex-shrink-0 transition-colors font-bold"
                >
                  {playingId === activeEpisode.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
                <div className="text-xs">
                  <p className="text-slate-900 dark:text-white font-semibold">
                    {playingId === activeEpisode.id ? 'Streaming Audio Stream' : 'Listen to Episode Stream'}
                  </p>
                  <p className="text-slate-500 dark:text-neutral-400 text-[11px]">Nwaeze David {activeEpisode.guest ? `with ${activeEpisode.guest}` : '(Solo Session)'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

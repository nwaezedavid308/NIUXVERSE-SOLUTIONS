import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SHOW_EPISODES } from '../data/mockData';
import { Episode } from '../types';
import { Radio, Play, Pause, Search, Clock, Bookmark, ChevronDown, ChevronUp, X, ArrowUpRight } from 'lucide-react';

export const ShowSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEpisode, setActiveEpisode] = useState<Episode | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [savedEpisodes, setSavedEpisodes] = useState<Record<string, boolean>>({});
  const [expandedEpisodeCards, setExpandedEpisodeCards] = useState<Record<string, boolean>>({});

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const categories = ['All', 'Human Condition', 'Ethics & Rights', 'Future Trends', 'Creator Economy', 'Futuristic Tech'];

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
    setSavedEpisodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCardExpansion = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedEpisodeCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="the-show" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0065E1]/10 border border-[#0065E1]/20 text-[#0065E1] text-xs font-semibold tracking-wider uppercase mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>Episode Archive</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-500">12 Episodes</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            The Niuxverse Show
          </h2>
          <p className="text-[#0065E1] mt-2 font-medium">Futuristic Tech & Human Life</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#0065E1]/10">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#0065E1] text-white shadow-md shadow-[#0065E1]/25'
                    : 'bg-[#051b44]/30 text-slate-400 hover:text-white hover:bg-[#0065E1]/15 border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[#051b44]/30 border border-[#0065E1]/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0065E1] focus:ring-1 focus:ring-[#0065E1]/50 transition-all"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(260px,auto)]">
          {filteredEpisodes.map((episode, idx) => {
            const isPlaying = playingId === episode.id;
            const isSaved = !!savedEpisodes[episode.id];
            const isExpanded = !!expandedEpisodeCards[episode.id];
            const isLarge = idx === 0;
            const isWide = idx === 5 || idx === 11;

            return (
              <motion.div
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
                className={`group rounded-xl border border-[#0065E1]/15 bg-[#051b44]/20 hover:border-[#0065E1]/50 hover:bg-[#051b44]/50 hover:shadow-lg hover:shadow-[#0065E1]/10 p-5 flex flex-col justify-between transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0065E1] to-[#01CF11] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-xl" />

                <div>
                  {episode.image && (
                    <div
                      onClick={() => setActiveEpisode(episode)}
                      className={`relative -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-xl border-b border-[#0065E1]/10 cursor-pointer ${
                        isLarge ? 'h-40 lg:h-56' : 'h-32'
                      }`}
                    >
                      <img src={episode.image} alt={episode.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/80 to-transparent" />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-[#0065E1]">EP {episode.number}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                        episode.isComingSoon
                          ? 'bg-amber-500/15 text-amber-500 border border-amber-500/30'
                          : 'bg-[#01CF11]/15 text-[#01CF11] border border-[#01CF11]/30'
                      }`}>
                        {episode.isComingSoon ? 'Coming Soon' : 'Live'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{episode.duration}</span>
                      <button
                        onClick={(e) => toggleBookmark(episode.id, e)}
                        className={`transition-colors ${isSaved ? 'text-[#01CF11]' : 'text-slate-500 hover:text-[#01CF11]'}`}
                      >
                        <Bookmark className="w-3.5 h-3.5" fill={isSaved ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>

                  <h3 className={`font-display font-bold text-white tracking-tight mb-2 group-hover:text-[#0065E1] transition-colors ${isLarge ? 'text-xl' : 'text-base'}`}>
                    {episode.title}
                  </h3>
                  <p className="text-xs text-slate-500 italic mb-4 line-clamp-2">"{episode.hook}"</p>

                  {isExpanded && (
                    <div className="pt-3 border-t border-[#0065E1]/10 mb-3 text-xs text-slate-400">
                      <p className="mb-2">{episode.description}</p>
                      <ul className="space-y-1">
                        {episode.keyQuestions.map((q, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#0065E1]">•</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#0065E1]/10 flex items-center justify-between">
                  {episode.isComingSoon ? (
                    <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      Coming Soon
                    </span>
                  ) : (
                    <button
                      onClick={(e) => togglePlay(episode.id, e)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isPlaying
                          ? 'bg-[#01CF11] text-[#02102e] shadow-md shadow-[#01CF11]/25'
                          : 'bg-[#0065E1]/10 text-[#0065E1] hover:bg-[#0065E1] hover:text-white'
                      }`}
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      {isPlaying ? 'Playing' : 'Preview'}
                    </button>
                  )}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => toggleCardExpansion(episode.id, e)}
                      className="text-xs text-slate-500 hover:text-[#0065E1] flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-[#0065E1]/5 transition-all"
                    >
                      {isExpanded ? 'Hide' : 'Details'}
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={() => setActiveEpisode(episode)}
                      className="p-1.5 text-slate-500 hover:text-[#0065E1] transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredEpisodes.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            <p className="text-lg font-display">No episodes found.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2 rounded-lg bg-[#0065E1]/10 text-[#0065E1] text-sm font-medium hover:bg-[#0065E1] hover:text-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {activeEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-xl border border-[#0065E1]/30 bg-[#02102e] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setActiveEpisode(null)} className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            {activeEpisode.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-xl">
                <img src={activeEpisode.image} alt={activeEpisode.title} className="w-full max-h-[400px] object-contain" />
              </div>
            )}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#02102e] px-2.5 py-0.5 rounded bg-[#01CF11] font-display">
                EPISODE {activeEpisode.number}
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">{activeEpisode.category}</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-white mt-2 mb-3">{activeEpisode.title}</h3>
            <p className="text-sm text-slate-400 italic mb-4">"{activeEpisode.hook}"</p>
            <p className="text-sm text-slate-400 mb-4">{activeEpisode.description}</p>
            <div className="space-y-2">
              {activeEpisode.keyQuestions.map((q, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-[#0065E1] font-bold">•</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

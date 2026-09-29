import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ACADEMY_COURSES } from '../data/mockData';
import { AcademyCourse } from '../types';
import { BookOpen, ArrowRight, X, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface AcademyTracksProps {
  onEnroll: (course: AcademyCourse) => void;
}

export const AcademyTracks: React.FC<AcademyTracksProps> = ({ onEnroll }) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabusId(expandedSyllabusId === id ? null : id);
  };

  return (
    <section id="academy" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#01CF11]" />
            <span>Niuxverse Academy</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Practical Learning Tracks
          </h2>
          <p className="text-slate-500 mt-2">Step-by-step tracks to build in-demand skills and real products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(280px,auto)]">
          {ACADEMY_COURSES.map((course, idx) => {
            const isSyllabusOpen = expandedSyllabusId === course.id;
            const isLarge = idx === 0;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group rounded-xl border border-[#01CF11]/15 bg-[#051b44]/20 hover:border-[#01CF11]/40 hover:bg-[#051b44]/40 p-6 flex flex-col justify-between transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div>
                  {course.image && (
                    <div
                      onClick={() => setSelectedCourse(course)}
                      className={`relative -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-xl border-b border-[#01CF11]/10 cursor-pointer ${
                        isLarge ? 'h-48 lg:h-64' : 'h-36'
                      }`}
                    >
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/80 to-transparent" />
                      {course.highlight && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#01CF11]/15 text-[#01CF11] text-[10px] font-bold uppercase">{course.highlight}</span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                    <span className="font-display font-bold text-[#01CF11]">{course.code}</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#0065E1]/10 text-[#0065E1]">{course.level}</span>
                    <span>{course.duration}</span>
                  </div>

                  <h3 className={`font-display font-bold text-white tracking-tight mb-2 ${isLarge ? 'text-xl' : 'text-lg'}`}>{course.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{course.tagline}</p>

                  {isSyllabusOpen && (
                    <div className="mt-3 space-y-2">
                      {course.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#01CF11] mt-0.5 flex-shrink-0" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#01CF11]/10 flex items-center justify-between">
                  <button onClick={() => toggleSyllabus(course.id)} className="text-xs text-slate-500 hover:text-white flex items-center gap-1">
                    {isSyllabusOpen ? 'Hide Topics' : 'View Topics'}
                    {isSyllabusOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                  <button onClick={() => onEnroll(course)} className="px-4 py-2 rounded-lg bg-[#01CF11]/10 text-[#01CF11] text-xs font-medium hover:bg-[#01CF11]/20 transition-all flex items-center gap-1">
                    Join Track <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-xl border border-[#01CF11]/30 bg-[#02102e] p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setSelectedCourse(null)} className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white"><X className="w-5 h-5" /></button>
            {selectedCourse.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-xl">
                <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full max-h-[400px] object-contain" />
              </div>
            )}
            <span className="text-xs font-bold text-[#01CF11] font-display">{selectedCourse.code}</span>
            <h3 className="font-display font-bold text-2xl text-white mt-2 mb-3">{selectedCourse.title}</h3>
            <p className="text-sm text-slate-400 mb-4">{selectedCourse.tagline}</p>
            <div className="space-y-2 mb-4">
              {selectedCourse.modules.map((mod, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-[#01CF11] font-display font-bold">0{i + 1}</span><span>{mod}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-lg bg-[#051b44]/50 border border-[#01CF11]/20">
              <span className="text-xs text-[#01CF11] font-medium block mb-1">Outcome:</span>
              <p className="text-sm text-slate-400">{selectedCourse.outcome}</p>
            </div>
            <button onClick={() => { const c = selectedCourse; setSelectedCourse(null); onEnroll(c); }} className="mt-6 w-full py-3 rounded-lg bg-[#01CF11]/10 text-[#01CF11] font-medium text-sm hover:bg-[#01CF11]/20 transition-all">Join Track</button>
          </div>
        </div>
      )}
    </section>
  );
};

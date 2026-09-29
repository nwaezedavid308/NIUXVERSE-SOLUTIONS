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

  // Bento layout: first course is large, others are smaller
  const bentoLayouts = [
    'md:col-span-2 lg:col-span-2 lg:row-span-2', // What Makes Us Human - Large featured
    'md:col-span-1 lg:col-span-1',              // Graphics Design
    'md:col-span-1 lg:col-span-1',              // Product Design
  ];

  return (
    <section id="academy" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0065E1]/8 dark:bg-[#0065E1]/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-[#01CF11]/6 dark:bg-[#01CF11]/8 rounded-full blur-[100px]" />
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
              <BookOpen className="w-3.5 h-3.5" />
              <span>Niuxverse Academy</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">Learning Tracks</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Practical Learning Tracks
            </h2>
            <p className="text-lg sm:text-xl text-[#0065E1] dark:text-[#01CF11] mt-2 font-medium tracking-tight">
              Step-by-step tracks to build in-demand skills and real products.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm dark:border-[#0065E1]/20 dark:bg-[#051b44]/60 text-sm text-slate-600 dark:text-slate-300 max-w-md shadow-sm">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-semibold block mb-1.5 text-xs uppercase tracking-wider">Our Mission:</span>
            "We are a community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives."
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(300px,auto)]">
          {ACADEMY_COURSES.map((course, idx) => {
            const isSyllabusOpen = expandedSyllabusId === course.id;
            const isLarge = idx === 0;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl dark:border-[#0065E1]/20 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-6 sm:p-7 flex flex-col justify-between hover:border-[#0065E1]/40 dark:hover:border-[#01CF11]/40 transition-all duration-500 relative overflow-hidden ${
                  bentoLayouts[idx] || ''
                }`}
              >
                {/* Highlight badge */}
                {course.highlight && !course.image && (
                  <div className="absolute top-0 right-0 bg-[#01CF11] text-[#02102e] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md z-10">
                    {course.highlight}
                  </div>
                )}

                <div className={isLarge ? 'flex-1' : ''}>
                  {/* Visual Poster Banner */}
                  {course.image && (
                    <div
                      onClick={() => setSelectedCourse(course)}
                      className={`relative -mx-6 sm:-mx-7 -mt-6 sm:-mt-7 mb-5 sm:mb-6 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/20 cursor-pointer group/poster bg-[#02102e] ${
                        isLarge ? 'h-48 sm:h-64 lg:h-80' : 'h-36 sm:h-44'
                      }`}
                    >
                      <img
                        src={course.image}
                        alt={`${course.title} event poster`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/poster:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#01CF11] text-[#02102e] text-[10px] font-bold uppercase tracking-wider shadow-lg">
                          {course.highlight || 'Featured'}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0065E1]/90 backdrop-blur-md text-[11px] font-semibold">
                          Special Event Track
                        </span>
                        {course.eventDate && (
                          <span className="text-[11px] font-medium text-[#01CF11] bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
                            {course.eventDate}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Course code & level */}
                  <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-bold text-[#0065E1] dark:text-[#01CF11] px-2.5 py-0.5 rounded-lg bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/20 dark:border-[#0065E1]/30 font-display">
                      {course.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-medium">
                      {course.level}
                    </span>
                    <span className="hidden sm:inline">{course.duration}</span>
                  </div>

                  <h3 className={`font-display font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors leading-snug ${
                    isLarge ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                  }`}>
                    {course.title}
                  </h3>

                  <p className={`text-slate-600 dark:text-slate-300 leading-relaxed mb-4 ${isLarge ? 'text-sm sm:text-base' : 'text-sm'}`}>
                    {course.tagline}
                  </p>

                  {/* Speakers preview */}
                  {course.speakers && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 mb-4 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block">
                        Featuring Speakers:
                      </span>
                      {course.speakers.map((s, idx) => (
                        <div key={idx} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-[#0065E1] dark:text-[#01CF11] text-[11px]">{s.role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Collapsible Syllabus */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleSyllabus(course.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0065E1] dark:text-[#01CF11] hover:underline py-1 transition-colors"
                    >
                      <span>{isSyllabusOpen ? 'Hide Topics' : 'View Topics'}</span>
                      {isSyllabusOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isSyllabusOpen && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-white/5 space-y-2">
                        <span className="font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block text-[11px]">
                          Topics Covered:
                        </span>
                        {course.modules.map((mod, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11] mt-0.5 flex-shrink-0" />
                            <span className="text-xs">{mod}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
                  <button
                    id={`view-syllabus-${course.id}`}
                    onClick={() => setSelectedCourse(course)}
                    className="text-xs text-slate-600 hover:text-[#0065E1] dark:text-slate-300 dark:hover:text-[#01CF11] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 text-[#0065E1] dark:text-[#01CF11]" />
                  </button>

                  <button
                    id={`enroll-btn-${course.id}`}
                    onClick={() => onEnroll(course)}
                    className="px-5 py-2.5 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold transition-all shadow-lg shadow-[#01CF11]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Join Track
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-[#0065E1]/30 dark:bg-[#051b44] dark:text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedCourse.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/20 bg-[#02102e] flex items-center justify-center">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[460px] object-contain object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white">
                  <span className="px-3 py-1 rounded-full bg-[#01CF11] text-[#02102e] font-bold text-xs">
                    {selectedCourse.highlight || 'Featured Track'}
                  </span>
                  {selectedCourse.eventDate && (
                    <span className="font-semibold text-white bg-black/60 px-2.5 py-1 rounded-full">
                      {selectedCourse.eventDate}
                    </span>
                  )}
                </div>
              </div>
            )}

            <div className="flex items-center gap-3 mb-2 text-xs">
              <span className="font-bold text-[#02102e] px-2.5 py-0.5 rounded-lg bg-[#01CF11] font-display">
                {selectedCourse.code}
              </span>
              <span className="text-slate-500 dark:text-slate-300 uppercase tracking-wider">{selectedCourse.level} · {selectedCourse.duration}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2 tracking-tight">
              {selectedCourse.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 italic">
              {selectedCourse.tagline}
            </p>

            {/* Complete module list */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-3">
                What You Will Learn
              </h4>
              <div className="space-y-2.5">
                {selectedCourse.modules.map((mod, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] mt-0.5 font-display">
                      0{i + 1}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/50 dark:border-[#0065E1]/20 mb-6">
              <span className="text-[11px] font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block mb-1.5">
                What You Will Walk Away With:
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCourse.outcome}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Registration is open
              </span>
              <button
                onClick={() => {
                  const courseToEnroll = selectedCourse;
                  setSelectedCourse(null);
                  onEnroll(courseToEnroll);
                }}
                className="px-6 py-2.5 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#01CF11]/25"
              >
                Join Track
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

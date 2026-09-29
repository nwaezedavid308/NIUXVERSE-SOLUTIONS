import React, { useState } from 'react';
import { ACADEMY_COURSES } from '../data/mockData';
import { AcademyCourse } from '../types';
import { BookOpen, ArrowRight, X, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface AcademyTracksProps {
  onEnroll: (course: AcademyCourse) => void;
}

export const AcademyTracks: React.FC<AcademyTracksProps> = ({ onEnroll }) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<string | null>(null);

  const toggleSyllabus = (id: string) => {
    setExpandedSyllabusId(expandedSyllabusId === id ? null : id);
  };

  return (
    <section id="academy" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-[#0065E1]/25 bg-white dark:bg-[#02102e] transition-colors duration-300">
      {/* Background radiant glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0065E1]/15 dark:bg-[#0065E1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#01CF11]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/30 dark:border-[#0065E1]/40 text-[#0065E1] dark:text-[#01CF11] text-xs tracking-wide mb-3 font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
              <span>NIUXVERSE ACADEMY</span>
              <span>/</span>
              <span>LEARNING TRACKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-slate-900 dark:text-white leading-[1.2]">
              Practical Learning Tracks
            </h2>
            <p className="text-lg sm:text-xl font-normal text-[#0065E1] dark:text-[#01CF11] mt-1 tracking-normal">
              Step-by-step tracks to build in demand skills and build real products.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#051b44] dark:border-[#0065E1]/30 text-xs text-slate-600 dark:text-slate-200 max-w-sm shadow-sm transition-colors tracking-normal">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-semibold block mb-1">OUR MISSION:</span>
            "We are a community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives."
          </div>
        </div>

        {/* Courses Grid with Collapsible Modules & Poster Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACADEMY_COURSES.map((course) => {
            const isSyllabusOpen = expandedSyllabusId === course.id;

            return (
              <div
                key={course.id}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl dark:border-[#0065E1]/30 dark:bg-gradient-to-b dark:from-[#051b44] dark:to-[#031336] p-7 flex flex-col justify-between hover:border-[#0065E1]/60 dark:hover:border-[#01CF11]/60 dark:hover:shadow-2xl dark:hover:shadow-[#0065E1]/25 transition-all duration-300 relative overflow-hidden"
              >
                {/* Highlight badge if no image or top right */}
                {course.highlight && !course.image && (
                  <div className="absolute top-0 right-0 bg-[#01CF11] text-[#02102e] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md">
                    {course.highlight}
                  </div>
                )}

                <div>
                  {/* Visual Poster Banner (if available) */}
                  {course.image && (
                    <div
                      onClick={() => setSelectedCourse(course)}
                      className="relative -mx-7 -mt-7 mb-5 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/30 cursor-pointer group/poster bg-[#02102e]"
                    >
                      <img
                        src={course.image}
                        alt={`${course.title} event poster`}
                        referrerPolicy="no-referrer"
                        className="w-full h-52 object-cover object-center group-hover/poster:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02102e]/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#01CF11] text-[#02102e] text-[10px] font-bold uppercase tracking-wider shadow">
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

                  {/* Course top code & level */}
                  <div className="flex items-center gap-3 mb-4 text-xs text-slate-500 dark:text-neutral-400">
                    <span className="font-bold text-[#0065E1] dark:text-[#01CF11] px-2.5 py-0.5 rounded bg-[#0065E1]/10 dark:bg-[#0065E1]/30 border border-[#0065E1]/20 dark:border-[#0065E1]/50">
                      {course.code}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-medium">
                      {course.level}
                    </span>
                    <span>{course.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-slate-900 dark:text-white mb-2.5 tracking-wide group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed mb-4">
                    {course.tagline}
                  </p>

                  {/* Speakers preview if present */}
                  {course.speakers && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-[#0065E1]/30 mb-4 text-xs space-y-1">
                      <span className="text-[10px] font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block">
                        Featuring Speakers:
                      </span>
                      {course.speakers.map((s, idx) => (
                        <div key={idx} className="flex items-center justify-between text-slate-700 dark:text-slate-200">
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-[#0065E1] dark:text-[#01CF11] text-[11px]">{s.role}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Collapsible Syllabus Dropdown Button */}
                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={() => toggleSyllabus(course.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0065E1] dark:text-[#01CF11] hover:underline py-1 transition-colors"
                    >
                      <span>{isSyllabusOpen ? 'Hide Topics' : 'View Topics'}</span>
                      {isSyllabusOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Expandable Syllabus details */}
                    {isSyllabusOpen && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-white/5 space-y-2 animate-fadeIn text-xs">
                        <span className="font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider block text-[11px]">
                          Topics Covered:
                        </span>
                        {course.modules.map((mod, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11] mt-0.5 flex-shrink-0" />
                            <span>{mod}</span>
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
                    className="text-xs text-slate-600 hover:text-[#0065E1] dark:text-slate-200 dark:hover:text-[#01CF11] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 text-[#0065E1] dark:text-[#01CF11]" />
                  </button>

                  <button
                    id={`enroll-btn-${course.id}`}
                    onClick={() => onEnroll(course)}
                    className="px-4 py-2 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold transition-all shadow-md shadow-[#01CF11]/25 hover:scale-[1.02]"
                  >
                    Join Track
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl dark:border-[#0065E1]/50 dark:bg-[#051b44] dark:text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 z-10 p-2 rounded-lg bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedCourse.image && (
              <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-[#0065E1]/30 bg-[#02102e] flex items-center justify-center">
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
              <span className="font-bold text-[#02102e] px-2.5 py-0.5 rounded bg-[#01CF11]">
                {selectedCourse.code}
              </span>
              <span className="text-slate-500 dark:text-neutral-300 uppercase tracking-wider">{selectedCourse.level} • {selectedCourse.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 uppercase">
              {selectedCourse.title}
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-200 mb-6 italic">
              {selectedCourse.tagline}
            </p>

            {/* Complete module list */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-3">
                What You Will Learn
              </h4>
              <div className="space-y-2.5">
                {selectedCourse.modules.map((mod, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/70 dark:border-white/5 flex items-start gap-3">
                    <span className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/30 mb-6">
              <span className="text-[11px] font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block mb-1">
                What You Will Walk Away With:
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed">
                {selectedCourse.outcome}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/10">
              <span className="text-xs text-slate-500 dark:text-neutral-400">
                Registration is open
              </span>
              <button
                onClick={() => {
                  const courseToEnroll = selectedCourse;
                  setSelectedCourse(null);
                  onEnroll(courseToEnroll);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
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

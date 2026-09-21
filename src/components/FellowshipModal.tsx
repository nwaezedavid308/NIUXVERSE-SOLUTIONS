import React, { useState } from 'react';
import { UPCOMING_IMPACT_TALKS } from '../data/mockData';
import { AcademyCourse, ImpactSession } from '../types';
import { X, Calendar, Video, CheckCircle, ArrowRight, User, Mail, Send, ChevronDown } from 'lucide-react';

interface FellowshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: AcademyCourse | null;
}

export const FellowshipModal: React.FC<FellowshipModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = null,
}) => {
  const [mode, setMode] = useState<'session' | 'cohort'>(defaultCourse ? 'cohort' : 'session');
  const [selectedSessionId, setSelectedSessionId] = useState<string>(UPCOMING_IMPACT_TALKS[0].id);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [statement, setStatement] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedSession = UPCOMING_IMPACT_TALKS.find((s) => s.id === selectedSessionId) || UPCOMING_IMPACT_TALKS[0];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#0065E1]/50 dark:bg-[#051b44] dark:shadow-black/90 p-6 sm:p-8 max-h-[92vh] overflow-y-auto transition-colors">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#01CF11]/15 border border-[#01CF11]/40 flex items-center justify-center mx-auto text-[#01CF11]">
              <CheckCircle className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase">
              Request Received!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 max-w-md mx-auto leading-relaxed">
              Welcome, <span className="text-[#0065E1] dark:text-[#01CF11] font-semibold">{fullName}</span>. Your registration for{' '}
              <span className="text-slate-900 dark:text-white font-semibold">
                {mode === 'cohort' ? defaultCourse?.title || 'Academy Track' : selectedSession.topic}
              </span>{' '}
              has been recorded. The calendar invitation and Google Meet connection link have been sent to{' '}
              <span className="text-[#0065E1] dark:text-[#01CF11] font-mono text-xs font-semibold">{email}</span>.
            </p>

            <div className="pt-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#01CF11]/25"
              >
                Return to Academy
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] px-2.5 py-0.5 rounded bg-[#0065E1]/10 border border-[#0065E1]/30 dark:bg-[#0065E1]/30 dark:border-[#0065E1]/50">
                NIUXVERSE FELLOWSHIP
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-300 uppercase tracking-wider font-medium">
                Google Meet Sessions with Leading Thinkers
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase mb-1">
              Join The Niuxverse Fellowship
            </h3>

            <p className="text-sm text-[#0065E1] dark:text-[#01CF11] mb-3 font-medium">
              Connect and collaborate with fellow changemakers, thinkers, and builders.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="p-3 rounded-xl bg-green-50 border border-green-200 dark:bg-[#01CF11]/10 dark:border-[#01CF11]/30 mb-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
              <span className="text-slate-700 dark:text-slate-200">
                Want instant access on WhatsApp?
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-[11px] text-center uppercase tracking-wider"
                >
                  Join Community Group
                </a>
                <a
                  href="https://wa.me/2348110607341"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3 py-1.5 rounded-lg bg-white dark:bg-[#02102e] border border-slate-300 dark:border-[#0065E1]/40 text-slate-800 dark:text-white font-semibold text-[11px] text-center"
                >
                  Message David
                </a>
              </div>
            </div>

            {/* Mode toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-100 border border-slate-200 dark:bg-[#02102e] dark:border-[#0065E1]/40 mb-5 text-xs">
              <button
                type="button"
                onClick={() => setMode('session')}
                className={`py-2 px-3 rounded-lg font-bold transition-all ${
                  mode === 'session'
                    ? 'bg-[#01CF11] text-[#02102e] shadow'
                    : 'text-slate-600 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white'
                }`}
              >
                Google Meet Live Session
              </button>
              <button
                type="button"
                onClick={() => setMode('cohort')}
                className={`py-2 px-3 rounded-lg font-bold transition-all ${
                  mode === 'cohort'
                    ? 'bg-[#01CF11] text-[#02102e] shadow'
                    : 'text-slate-600 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-white'
                }`}
              >
                Apply for Course Cohort
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'session' ? (
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider block mb-1.5">
                    Select Upcoming Session:
                  </label>
                  <div className="relative">
                    <select
                      value={selectedSessionId}
                      onChange={(e) => setSelectedSessionId(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 dark:bg-[#02102e] dark:border-[#0065E1]/40 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#0065E1] dark:focus:border-[#01CF11] appearance-none pr-9 cursor-pointer"
                    >
                      {UPCOMING_IMPACT_TALKS.map((session) => (
                        <option key={session.id} value={session.id} className="bg-white dark:bg-[#051b44] text-slate-900 dark:text-white">
                          {session.date} — {session.topic} ({session.spotsLeft} spots)
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-500 dark:text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 dark:bg-[#02102e]/80 dark:border-[#0065E1]/30 text-xs text-slate-700 dark:text-slate-200">
                    <span className="text-[#0065E1] dark:text-[#01CF11] font-bold block mb-0.5">Session Details:</span>
                    <p className="text-slate-900 dark:text-white font-medium">{selectedSession.topic}</p>
                    <p className="text-[11px] text-slate-500 dark:text-neutral-300 mt-0.5">
                      Host: {selectedSession.host} • Format: {selectedSession.format} • {selectedSession.spotsLeft} seats available
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 dark:bg-[#0065E1]/20 dark:border-[#0065E1]/40">
                  <span className="text-[11px] text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider block font-bold">
                    Selected Academy Track:
                  </span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {defaultCourse ? `${defaultCourse.code}: ${defaultCourse.title}` : 'General Cohort Admission (Next Term)'}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-200 mt-0.5">
                    {defaultCourse ? defaultCourse.outcome : 'Includes cohort collaboration, practical projects, and community mentorship.'}
                  </p>
                </div>
              )}

              {/* Input fields */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider block mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., David or Ada"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0065E1] dark:bg-[#02102e] dark:border-[#0065E1]/40 dark:text-white dark:placeholder-neutral-400 dark:focus:border-[#01CF11] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 dark:text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0065E1] dark:bg-[#02102e] dark:border-[#0065E1]/40 dark:text-white dark:placeholder-neutral-400 dark:focus:border-[#01CF11] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-neutral-300 uppercase tracking-wider block mb-1">
                  What question or topic would you like to discuss? (Optional)
                </label>
                <textarea
                  rows={2}
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  placeholder="e.g., How can I best apply AI to my daily work or business?"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0065E1] dark:bg-[#02102e] dark:border-[#0065E1]/40 dark:text-white dark:placeholder-neutral-400 dark:focus:border-[#01CF11] text-xs leading-relaxed"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 dark:text-neutral-300">
                  Your privacy is respected • No spam
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#01CF11]/25 flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

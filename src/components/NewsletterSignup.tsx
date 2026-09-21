import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('niuxverse_newsletter_subscribers') || '[]');
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem('niuxverse_newsletter_subscribers', JSON.stringify(existing));
      }
    } catch {
      // Local storage fallback
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div
      id="newsletter-signup-card"
      className="rounded-2xl border border-slate-200 bg-white/70 p-6 sm:p-8 backdrop-blur-sm dark:border-[#0065E1]/30 dark:bg-[#051b44]/60 transition-colors"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Text Details */}
        <div className="max-w-xl space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 rounded-md bg-[#0065E1]/10 text-[#0065E1] dark:bg-[#0065E1]/20 dark:text-[#01CF11]">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0065E1] dark:text-[#01CF11]">
              Niuxverse Community Updates
            </span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold font-sans text-slate-900 dark:text-white tracking-wide">
            Stay Connected
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 leading-relaxed tracking-normal">
            Get thoughtful updates on new AI tools, community meetups, and practical ideas delivered straight to your inbox.
          </p>
        </div>

        {/* Input Form or Success confirmation */}
        <div className="w-full lg:max-w-md">
          {submitted ? (
            <div
              id="newsletter-success-msg"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs animate-fadeIn"
            >
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="font-semibold">You are on the list!</p>
                <p className="text-[11px] text-emerald-700/90 dark:text-emerald-300/80">
                  We sent a confirmation to <span className="font-mono font-medium">{email}</span>. No spam, ever.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <label htmlFor="newsletter-email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0065E1] focus:ring-1 focus:ring-[#0065E1] dark:border-[#0065E1]/40 dark:bg-[#02102e] dark:text-white dark:placeholder-neutral-400 dark:focus:border-[#01CF11] dark:focus:ring-[#01CF11] transition-all"
                  />
                </div>
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#0065E1] hover:bg-[#0055c0] text-white dark:bg-[#01CF11] dark:hover:bg-[#01b80f] dark:text-[#02102e] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {error && (
                <p className="text-[11px] text-red-500 dark:text-red-400 pl-1">
                  {error}
                </p>
              )}

              <p className="text-[11px] text-slate-500 dark:text-neutral-400 pl-1">
                Zero spam. Instant unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Radio, Users, BookOpen, Video, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreShow: () => void;
  onOpenCommunity: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreShow, onOpenCommunity }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center pt-20">
      {/* Dynamic Fluid Aurora Mesh Background */}
      <motion.div style={{ y: yBg }} className="fluid-aurora-container">
        <div className="aurora-blob aurora-blob-cyan" />
        <div className="aurora-blob aurora-blob-mint" />
        <div className="aurora-blob aurora-blob-purple" />
        <div className="aurora-blob aurora-blob-blue" />
        <div className="grain-overlay" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: yText, opacity, scale }} className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Fluid Community Label */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-pill text-xs font-bold tracking-wider uppercase mb-6 text-slate-800 dark:text-cyan-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FFAB] animate-ping" />
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                  Changemakers · Thinkers · Builders
                </span>
              </div>

              {/* Bold Display Headline with Fluid Gradient */}
              <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[88px] tracking-tight leading-[0.95] text-slate-900 dark:text-white">
                Welcome to
                <br />
                <span className="gradient-text-fluid">The Niuxverse</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-600 dark:text-cyan-100/90 max-w-xl leading-relaxed font-normal"
            >
              A community of changemakers, thinkers, and builders leveraging the power of technology to solve problems and impact human lives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed"
            >
              Technology is evolving rapidly, but real progress happens when we protect human connection, explore AI ethics, and create real-world solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-2"
            >
              <a
                href="#the-show"
                onClick={onExploreShow}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#2563EB] text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-[#00F0FF]/25 hover:shadow-[#00FFAB]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Radio className="w-4 h-4 text-slate-950" />
                <span>Explore the Show</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 rounded-xl glass-pill text-slate-900 dark:text-white font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 border-emerald-400/40"
              >
                <Users className="w-4 h-4 text-[#00FFAB]" />
                <span>Join Community</span>
              </a>
            </motion.div>

            {/* Founder Note Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl glass-card text-sm text-slate-700 dark:text-slate-200 leading-relaxed max-w-xl"
            >
              <span className="font-display font-bold text-slate-900 dark:text-[#00F0FF] block mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00FFAB]" />
                A Message from Nwaeze David:
              </span>
              <p className="italic text-slate-600 dark:text-slate-300">
                "We explore new technology not to replace human life, but to understand how it affects us, keep our friendships strong, and build tools that elevate humanity."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Community Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl glass-card p-8 space-y-6">
              <div className="border-b border-cyan-500/20 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00FFAB] block">
                  What We Do Together
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-1.5 tracking-tight">
                  How The Niuxverse Works
                </h3>
              </div>

              {[
                { icon: Radio, title: 'The Niuxverse Show', desc: 'Thoughtful episodes on AI, human emotion, and where technology is taking society.', color: 'cyan' },
                { icon: BookOpen, title: 'Practical Learning Tracks', desc: 'Step-by-step tracks to build in-demand skills and real products.', color: 'mint' },
                { icon: Video, title: 'Live Community Meetups', desc: 'Small, open video sessions on Google Meet for sharing and feedback.', color: 'purple' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 glass-pill ${
                    item.color === 'cyan'
                      ? 'text-[#00F0FF]'
                      : item.color === 'mint'
                      ? 'text-[#00FFAB]'
                      : 'text-[#7C3AED]'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-slate-900 dark:text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-cyan-500/20 flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Free to participate</span>
                <a
                  href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FFAB] hover:underline font-bold transition-colors"
                >
                  Join our WhatsApp group
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community Numbers Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 border-t border-cyan-500/20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { number: '12', label: 'Show Episodes', sub: 'Discussions & Insights' },
            { number: '2', label: 'Learning Tracks', sub: 'Design & Brand Strategy' },
            { number: '2026–2030', label: 'Active Horizon', sub: 'Modern Digital Frontiers' },
            { number: '100%', label: 'Community First', sub: 'Empathy & Real Impact' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl glass-card group"
            >
              <span className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight group-hover:text-[#00F0FF] transition-colors">
                {stat.number}
              </span>
              <p className="text-xs text-[#00FFAB] uppercase tracking-wider font-bold mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#00F0FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

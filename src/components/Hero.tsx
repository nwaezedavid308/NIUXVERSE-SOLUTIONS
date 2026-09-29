import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Radio, Users, BookOpen, Video, ChevronDown } from 'lucide-react';

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
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center">
      {/* Parallax Background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0065E1]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#01CF11]/8 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 gh-grid-pattern opacity-20 pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y: yText, opacity, scale }} className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Community Label */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0065E1]/10 border border-[#0065E1]/20 text-[#0065E1] text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#01CF11] animate-pulse" />
                <span>Changemakers · Thinkers · Builders</span>
              </div>

              {/* Bold Display Headline */}
              <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-[88px] tracking-tight text-white leading-[0.95]">
                Welcome to
                <br />
                <span className="gradient-text">The Niuxverse</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed"
            >
              A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-slate-500 max-w-lg leading-relaxed"
            >
              Technology is changing the world quickly, but real progress happens when we use it to help people. Understand futuristic technology, protect human connection, and build practical solutions.
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
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0065E1] text-white font-semibold text-sm tracking-wide shadow-xl shadow-[#0065E1]/20 hover:bg-[#0052cc] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Radio className="w-4 h-4" />
                <span>Explore the Show</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-[#01CF11] text-[#02102e] font-semibold text-sm tracking-wide shadow-xl shadow-[#01CF11]/20 hover:bg-[#00b80f] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Users className="w-4 h-4" />
                <span>Join the Community</span>
              </a>
            </motion.div>

            {/* Founder Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-xl border border-[#0065E1]/20 bg-[#051b44]/50 backdrop-blur-sm text-sm text-slate-400 leading-relaxed max-w-xl"
            >
              <span className="font-display font-semibold text-white block mb-1.5">
                A Message from Nwaeze David:
              </span>
              <p className="italic text-slate-400">
                "We explore new technology not to replace human life, but to understand how it affects us, keep our friendships and communities strong, and build things that genuinely help people thrive."
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
            <div className="rounded-2xl border border-[#0065E1]/20 bg-[#051b44]/50 backdrop-blur-sm p-8 space-y-6">
              <div className="border-b border-[#0065E1]/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#01CF11] block">
                  What We Do Together
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1.5 tracking-tight">
                  How The Niuxverse Works
                </h3>
              </div>

              {[
                { icon: Radio, title: 'The Niuxverse Show', desc: 'Thoughtful episodes on AI, human emotion, and where technology is taking society.', color: 'blue' },
                { icon: BookOpen, title: 'Practical Learning Tracks', desc: 'Step-by-step tracks to build in-demand skills and real products.', color: 'green' },
                { icon: Video, title: 'Live Community Meetups', desc: 'Small, open video sessions on Google Meet for sharing and feedback.', color: 'blue' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    item.color === 'blue'
                      ? 'bg-[#0065E1]/10 text-[#0065E1]'
                      : 'bg-[#01CF11]/10 text-[#01CF11]'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-[#0065E1]/10 flex items-center justify-between text-sm">
                <span className="text-slate-500">Free to participate</span>
                <a
                  href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#01CF11] hover:underline font-semibold"
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
          className="mt-20 pt-10 border-t border-[#0065E1]/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
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
              className="p-5 rounded-xl bg-[#051b44]/30 border border-[#0065E1]/10 hover:border-[#0065E1]/30 transition-all duration-300 group"
            >
              <span className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#0065E1] transition-colors">
                {stat.number}
              </span>
              <p className="text-xs text-[#01CF11] uppercase tracking-wider font-bold mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

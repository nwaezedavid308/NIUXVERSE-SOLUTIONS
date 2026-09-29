import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Radio, Users, ChevronDown } from 'lucide-react';

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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Typewriter effect
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'NIUXVERSE';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const communityImages = [
    '/community (1).jpg',
    '/community (2).jpg',
    '/community (3).jpg',
    '/community (4).jpg',
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background */}
      <motion.div style={{ y: yBg, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#a371f7]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#58a6ff]/6 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid pattern */}
      <div className="absolute inset-0 gh-grid-pattern opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Typewriter Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-display font-bold text-7xl sm:text-8xl lg:text-[120px] tracking-tight text-white leading-none">
            {text}
            {showCursor && <span className="typewriter-cursor" />}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#the-show"
            onClick={onExploreShow}
            className="group px-8 py-3.5 rounded-lg bg-white text-[#010409] font-semibold text-sm hover:bg-[#a371f7] hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Radio className="w-4 h-4" />
            Explore the Show
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border border-[#30363d] text-white font-semibold text-sm hover:border-[#a371f7]/50 hover:bg-[#a371f7]/5 transition-all duration-300 flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Join the Community
          </a>
        </motion.div>

        {/* Community Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
            {communityImages.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden border border-[#30363d]/30 hover:border-[#a371f7]/30 transition-all">
                <img src={img} alt={`Community ${idx + 1}`} className="w-full h-20 sm:h-24 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '12', label: 'Episodes' },
            { number: '2', label: 'Tracks' },
            { number: '2026', label: 'Horizon' },
            { number: '100%', label: 'Community' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl sm:text-4xl text-white">{stat.number}</div>
              <div className="text-xs text-[#8b949e] uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-[#8b949e]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import svgPaths from '../../imports/svg-icpv7dwvm7';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Background SVG decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 1024">
          <path d={svgPaths.bvzfpuzp6q} fill="url(#heroGradient)" />
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0084FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#104891" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Software Engineer Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span
              className="inline-block px-8 py-4 rounded-[30px] text-white text-[18px] md:text-[20px] border border-[rgba(0,125,243,0.8)]"
              style={{
                backgroundImage:
                  'linear-gradient(140deg, rgba(0, 132, 255, 0.2) 0%, rgba(16, 72, 145, 0.6) 50%, rgba(0, 0, 0, 0.3) 100%)',
                fontFamily: 'Inter',
              }}
            >
              Software Engineer
            </span>
          </motion.div>

          {/* Main Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-wide"
            style={{
              background: 'linear-gradient(96.73deg, rgba(0, 132, 255, 0.8) 0%, rgba(130, 200, 255, 0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Inter',
            }}
          >
            AMOTH ISSAC RAJ
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-base md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto italic leading-relaxed px-4"
            style={{ fontFamily: 'Inter' }}
          >
            I'm a passionate software developer who enjoys building clean, efficient, and user-friendly applications. I love
            turning ideas into real-world digital solutions using modern technologies and best coding practices. Always eager to
            learn and grow, I focus on writing scalable code and creating experiences that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => onNavigate('connect')}
              className="group flex items-center gap-3 px-8 py-4 rounded-[30px] text-white text-[18px] md:text-[20px] font-semibold border border-[rgba(0,125,243,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,125,243,0.5)]"
              style={{
                backgroundImage:
                  'linear-gradient(60deg, rgba(0, 132, 255, 0.15) 0%, rgba(16, 72, 145, 0.3) 100%)',
                fontFamily: 'Inter',
              }}
            >
              Let us build together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 rounded-[30px] text-white text-[18px] md:text-[20px] font-semibold border border-[rgba(0,125,243,0.8)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,125,243,0.5)]"
              style={{
                backgroundImage:
                  'linear-gradient(60deg, rgba(255, 255, 255, 0.05) 0%, rgba(251, 251, 251, 0.07) 100%)',
                fontFamily: 'Inter',
              }}
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[rgba(0,125,243,0.5)] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-icpv7dwvm7';

export function ExperienceSection() {
  const experiences = [
    {
      id: 'reviron',
      title: 'FULL STACK DEVELOPER INTERN',
      company: 'Reviron',
      period: '1 Month • 2025',
      description:
        'Spearheaded the development of a cutting-edge e-commerce platform serving frontier general stores. Implemented real-time inventory synchronization, secure payment processing, and seamless cross-territory delivery tracking using modern tech stack.',
      gradient: 'linear-gradient(96.5675deg, rgba(0, 132, 255, 0.06) 0.26689%, rgba(0, 0, 0, 0.2) 99.733%), linear-gradient(92.7951deg, rgba(255, 255, 255, 0.05) 29.287%, rgba(255, 255, 255, 0.07) 99.417%)',
      titleGradient: 'linear-gradient(to right, rgba(0, 132, 255, 0.2) 0%, white 100%)',
    },
    {
      id: 'zuntra',
      title: 'UI/UX DESIGNER INTERN',
      company: 'Zuntra Digital | Chennai',
      period: '3 Months • 2025',
      description:
        'Designed intuitive interfaces for frontier studio rental applications, ensuring accessibility for all young minds. Created comprehensive design systems and conducted extensive user research to optimize the customer experience.',
      gradient: 'linear-gradient(261.609deg, rgba(0, 132, 255, 0.06) 1.3372%, rgba(0, 0, 0, 0.2) 98.663%), linear-gradient(92.7951deg, rgba(255, 255, 255, 0.05) 29.287%, rgba(255, 255, 255, 0.07) 99.417%)',
      titleGradient: 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(0, 132, 255, 0.6) 41.346%)',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white"
            style={{ fontFamily: 'Inter' }}
          >
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline - Desktop */}
          <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 58 739">
              <g>
                <path d={svgPaths.pe954300} fill="url(#paint0_linear)" stroke="url(#paint1_linear)" strokeWidth="3" />
                <circle cx="29" cy="523" fill="url(#paint2_linear)" r="27.5" stroke="url(#paint3_linear)" strokeWidth="3" />
                <line stroke="url(#paint4_linear)" strokeWidth="5" x1="29.5" x2="29.5" y1="247" y2="494" />
                <line stroke="url(#paint5_linear)" strokeWidth="5" x1="29.5" x2="29.5" y1="552" y2="739" />
                <line stroke="url(#paint6_linear)" strokeOpacity="0.9" strokeWidth="5" x1="29.5" x2="29.5" y2="187" />
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="29" x2="29" y1="188" y2="247">
                  <stop stopColor="white" stopOpacity="0.05" />
                  <stop offset="1" stopColor="white" stopOpacity="0.07" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear" x1="6.08875" x2="51.9113" y1="188" y2="247">
                  <stop stopColor="#104891" stopOpacity="0.9" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear" x1="29" x2="29" y1="494" y2="552">
                  <stop stopColor="#F5F5F5" stopOpacity="0.05" />
                  <stop offset="1" stopColor="white" stopOpacity="0.07" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear" x1="10.0031" x2="47.9969" y1="494" y2="552">
                  <stop stopColor="#104891" stopOpacity="0.9" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear" x1="26.5" x2="26.5" y1="247" y2="494">
                  <stop offset="0.153439" stopColor="white" stopOpacity="0.8" />
                  <stop offset="0.342039" stopColor="#3162A0" stopOpacity="0.885995" />
                  <stop offset="0.716346" stopColor="#104891" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#999999" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear" x1="26.5" x2="26.5" y1="552" y2="739">
                  <stop stopColor="white" />
                  <stop offset="0.413462" stopColor="#104891" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear" x1="26.5" x2="26.5" y1="0" y2="187">
                  <stop stopColor="white" />
                  <stop offset="0.419124" stopColor="#104891" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timeline - Mobile */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-white/30 to-blue-500/50" />

          <div className="space-y-12 md:ml-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative"
              >
                {/* Timeline dot - Mobile */}
                <div className="md:hidden absolute -left-[19px] top-8 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-black" />

                <div
                  className="ml-8 md:ml-0 rounded-[30px] p-6 md:p-8 border-2 border-[rgba(16,72,145,0.9)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,125,243,0.3)]"
                  style={{
                    backgroundImage: exp.gradient,
                  }}
                >
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: exp.titleGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'Inter',
                    }}
                  >
                    {exp.title}
                  </h3>

                  <p
                    className="text-white italic text-base md:text-lg mb-1"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {exp.company}
                  </p>
                  <p
                    className="text-white italic text-base md:text-lg mb-6"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {exp.period}
                  </p>

                  <p
                    className="text-[#adadad] text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

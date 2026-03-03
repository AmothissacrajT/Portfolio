import { motion } from 'motion/react';
import imgProfile from 'figma:asset/310f486eb69d60e914aa31d7f74db4a3e07f4cd5.png';

export function AboutSection() {
  const skills = [
    { label: 'UI/UX', id: 'uiux' },
    { label: 'React', id: 'react' },
    { label: 'Flutter', id: 'flutter' },
    { label: 'Node.js', id: 'nodejs' },
    { label: 'Governed AI', id: 'ai' },
    { label: 'Full Stack', id: 'fullstack' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8"
            style={{ fontFamily: 'Inter' }}
          >
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 132, 255, 0.8) 0%, rgba(16, 72, 145, 0.6) 50%, rgba(0, 125, 243, 0.8) 100%)',
                }}
              >
                <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                  <img src={imgProfile} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3
                className="text-3xl md:text-4xl font-semibold text-white mb-6"
                style={{ fontFamily: 'Inter' }}
              >
                My Story
              </h3>
              <p
                className="text-[#d7d7d7] text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: 'Inter' }}
              >
                My journey into software development started with curiosity about how websites and applications work. What
                began as exploring simple code soon turned into a passion for building meaningful digital solutions. Over
                time, I've developed strong problem-solving skills and a love for creating clean, efficient, and user-focused
                applications. I'm constantly learning, improving, and challenging myself to grow as a developer.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4
                className="text-2xl md:text-3xl font-semibold text-white mb-6"
                style={{ fontFamily: 'Inter' }}
              >
                Arsenal
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-5 py-3 rounded-[25px] text-white text-[14px] border border-[rgba(0,125,243,0.8)] cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,125,243,0.4)]"
                    style={{
                      backgroundImage:
                        'linear-gradient(65deg, rgba(255, 255, 255, 0.05) 0%, rgba(251, 251, 251, 0.07) 100%)',
                      fontFamily: 'Inter',
                    }}
                  >
                    {skill.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

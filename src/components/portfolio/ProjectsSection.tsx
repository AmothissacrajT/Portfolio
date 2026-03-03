import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'smart-traffic',
      title: 'SMART AI TRAFFIC SYSTEM',
      description:
        'A credit-based traffic system frontier design system into the digital age. Features include real-time analysis of traffic, intelligent traffic light switching, and seamless flow of traffic.',
      technologies: ['Python', 'Open CV', 'Yolo'],
      gradient: 'linear-gradient(143.487deg, rgba(0, 132, 255, 0.2) 1.1749%, rgba(128, 193, 255, 0.16) 62.676%, rgba(255, 255, 255, 0.07) 98.825%)',
    },
    {
      id: 'reviron',
      title: 'REVIRON',
      description:
        'A sustainable e-commerce platform transforming e-waste into opportunity by giving unused electronics a second life. Built to connect innovators, students, and short-term users with affordable, reusable tech.',
      technologies: ['React', 'Node.js', 'Mongo DB'],
      gradient: 'linear-gradient(142.89deg, rgba(0, 132, 255, 0.2) 0.80661%, rgba(255, 255, 255, 0.07) 99.193%)',
    },
    {
      id: 'z01',
      title: 'Z01',
      description:
        'A collaborative mobile platform empowering young creators to rent studios and instruments with ease. Designed to bring musicians and artists together to learn, create, and showcase their talent.',
      technologies: ['Figma', 'Flutter', 'Frontend'],
      gradient: 'linear-gradient(140.48deg, rgba(0, 132, 255, 0.2) 1.2575%, rgba(255, 255, 255, 0.07) 98.742%)',
    },
    {
      id: 'governed-ai',
      title: 'GOVERNED AI',
      description:
        'A Responsible GenAI RAG platform that integrates document ingestion, policy evaluation, and AI governance into a unified console. Provides real-time answers with confidence metrics, hallucination detection, and source traceability',
      technologies: ['Ollama', 'RAG', 'Vector DB'],
      gradient: 'linear-gradient(143.487deg, rgba(0, 132, 255, 0.2) 1.1749%, rgba(255, 255, 255, 0.07) 98.825%)',
    },
    {
      id: 'student-analytics',
      title: 'STUDENT PERFORMANCE ANALYTICS - AI',
      description:
        'An AI-powered Learning Analytics Platform that uses Small Language Models and machine learning to interpret student behavior, detect learning patterns, and provide predictive, data-driven insights.',
      technologies: ['SML', 'Supabase', 'OLAP'],
      gradient: 'linear-gradient(143.487deg, rgba(0, 132, 255, 0.2) 1.1749%, rgba(255, 255, 255, 0.07) 98.825%)',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

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
            PROJECTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative h-[406px] rounded-[25px] border border-[rgba(255,255,255,0.8)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,125,243,0.3)]"
                style={{
                  backgroundImage: project.gradient,
                }}
              >
                <div className="p-8 h-full flex flex-col">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-6 bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(93.94deg, rgba(0, 132, 255, 0.2) 0.41566%, rgba(16, 72, 145, 0.9) 16.626%, rgba(0, 125, 243, 0.8) 99.584%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'Instrument Sans',
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#d7d7d7] text-[18px] md:text-[20px] leading-relaxed mb-6 flex-grow"
                    style={{
                      fontFamily: 'Instrument Sans',
                      fontVariationSettings: "'wdth' 100",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-[25px] text-white text-[14px] border border-[rgba(0,125,243,0.8)]"
                        style={{
                          backgroundImage:
                            'linear-gradient(65deg, rgba(255, 255, 255, 0.05) 0%, rgba(251, 251, 251, 0.07) 100%)',
                          fontFamily: 'Inter',
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

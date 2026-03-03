import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function ConnectSection() {
  const socialLinks = [
    {
      id: 'email',
      label: 'EMAIL',
      icon: Mail,
      href: 'mailto:amothissacraj@example.com',
      gradient: 'linear-gradient(117.156deg, rgba(0, 132, 255, 0.8) 66.548%, rgba(0, 132, 255, 0.2) 87.414%)',
    },
    {
      id: 'github',
      label: 'GITHUB',
      icon: Github,
      href: 'https://github.com/AmothissacrajT',
      gradient: 'linear-gradient(127.453deg, rgba(0, 132, 255, 0.8) 66.548%, rgba(0, 132, 255, 0.2) 87.414%)',
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/amoth-issac-raj-t-82b634337/',
      gradient: 'linear-gradient(130.302deg, rgba(0, 132, 255, 0.8) 66.548%, rgba(0, 132, 255, 0.2) 87.414%)',
    },
  ];

  return (
    <section id="connect" className="min-h-screen py-20 md:py-32 bg-black relative overflow-hidden flex items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(96.73deg, rgba(0, 132, 255, 0.6) 0.20895%, rgba(16, 72, 145, 0.5) 99.791%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Inter',
            }}
          >
            LET'S CONNECT
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg md:text-xl lg:text-2xl font-semibold max-w-3xl mx-auto mb-16 leading-relaxed"
            style={{ fontFamily: 'Inter' }}
          >
            Whether you need honorable solutions or bold innovations, I'm ready to ride alongside you and bring your vision
            to life.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative h-[100px] rounded-[30px] border border-[rgba(0,125,243,0.8)] overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,125,243,0.5)]"
              style={{
                backgroundImage:
                  'linear-gradient(59.9173deg, rgba(255, 255, 255, 0.05) 1.4058%, rgba(251, 251, 251, 0.07) 83.175%)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center gap-4">
                <link.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span
                  className="text-2xl font-semibold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: link.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Inter',
                  }}
                >
                  {link.label}
                </span>
              </div>

              {/* Hover effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent pointer-events-none"
              />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 text-white/60 text-sm"
          style={{ fontFamily: 'Inter' }}
        >
          <p>© 2025 Amoth Issac Raj. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}

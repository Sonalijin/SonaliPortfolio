import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 text-textPrimary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Projects & Experience
          </motion.h1>
          <motion.p 
            className="text-xl text-textSecondary mb-12 max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A showcase of my professional journey and key projects that demonstrate my expertise in web development.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover="hover"
                className="bg-tertiary p-8 rounded-xl shadow-lg border border-secondary/10"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-secondary mb-2">{project.title}</h2>
                    <div className="text-textSecondary text-lg mb-4">
                      <span className="font-semibold text-accent">{project.company}</span> | {project.period}
                    </div>
                  </motion.div>
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        variants={techBadgeVariants}
                        className="px-4 py-2 bg-primary/50 rounded-full text-sm text-secondary border border-secondary/50"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.p 
                  className="text-textSecondary text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 * index, duration: 0.5 }}
                  className="bg-primary/30 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-accent">Key Achievements</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (0.4 * index) + (0.1 * i), duration: 0.5 }}
                        className="flex items-start space-x-2"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-textSecondary">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
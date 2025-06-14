import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Projects = () => {

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

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 className="text-5xl font-bold mb-4 text-textPrimary">Products & Projects</motion.h1>
          <motion.p className="text-xl text-textSecondary mb-12 max-w-3xl">
            Explore my work as products—each card showcases a real-world solution, the tech stack, and a direct link to try or view more.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                whileHover="hover"
                className="bg-white dark:bg-tertiary rounded-2xl shadow-lg border border-secondary/10 flex flex-col overflow-hidden"
              >
                {project.image && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title + ' screenshot'}
                      className="w-full h-56 object-cover"
                    />
                  </a>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-secondary">{project.title}</h2>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 p-2 rounded-full bg-gradient-to-r from-gradientStart to-gradientEnd text-white hover:scale-110 transition-transform"
                        title="View Product"
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-textSecondary text-base mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-secondary rounded-full text-xs border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <details className="mt-auto">
                    <summary className="cursor-pointer text-accent font-semibold mb-2">Product Details</summary>
                    <ul className="list-disc list-inside text-textSecondary text-sm space-y-1 mt-2">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                    <div className="mt-2 text-xs text-textSecondary">{project.period}</div>
                  </details>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 
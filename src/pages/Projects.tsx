import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12">Projects & Experience</h1>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg shadow-lg"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h2 className="text-2xl font-bold text-secondary">{project.title}</h2>
                  <div className="text-textSecondary">
                    <span className="font-semibold">{project.company}</span> | {project.period}
                  </div>
                </div>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Key Achievements:</h3>
                  <ul className="list-disc list-inside text-textSecondary">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="mb-1">{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background rounded-full text-sm text-secondary border border-secondary"
                    >
                      {tech}
                    </span>
                  ))}
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
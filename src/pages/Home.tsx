import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-secondary">Sonali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-textSecondary mb-8">
            Senior Software Developer
          </h2>
          <p className="text-lg text-textSecondary mb-8">
            An accomplished IT professional with over 5+ years of specialized experience in React.js, possessing a strong
            proficiency in developing dynamic and interactive web applications. Demonstrated expertise in designing technical solutions,
            designing interactive user interfaces, and developing reusable components. Comprehensive experience across all phases of the
            Software Development Lifecycle (SDLC) and adept in employing Agile methodologies to deliver high-quality software systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn border border-secondary text-secondary hover:bg-secondary hover:text-primary">
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
          <div className="space-y-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="text-xl font-semibold mb-4 text-secondary">{skillGroup.category}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillGroup.items.map((skill) => (
                    <div
                      key={skill}
                      className="bg-tertiary p-4 rounded-lg text-center hover:transform hover:scale-105 transition-transform"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 
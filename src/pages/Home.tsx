import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { skills } from '../data/skills';

const Home = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div className="max-w-4xl mx-auto">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
              animate={{
                backgroundSize: ["100% 100%", "200% 100%"],
                backgroundPosition: ["0% 0%", "100% 0%"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              Hi, I'm Sonali
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl text-textSecondary mb-8 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Senior Software Developer
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="text-xl text-textSecondary mb-12 leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            An accomplished IT professional with over 5+ years of specialized experience in React.js, possessing a strong
            proficiency in developing dynamic and interactive web applications. Demonstrated expertise in designing technical solutions,
            designing interactive user interfaces, and developing reusable components.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-6 mb-16">
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <Link
                to="/projects"
                className="px-8 py-4 bg-secondary text-primary rounded-full font-bold text-lg transition-colors duration-300"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-secondary text-secondary rounded-full font-bold text-lg transition-colors duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-tertiary rounded-2xl p-8 shadow-lg border border-secondary/10"
          >
            <motion.h3
              className="text-3xl font-bold mb-8 text-center text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Technical Expertise
            </motion.h3>
            <div className="space-y-12">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  <h4 className="text-xl font-semibold mb-6 text-accent">{skillGroup.category}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skillGroup.items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        variants={skillCardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: (1.2 + index * 0.1) + (i * 0.05) }}
                        className="bg-primary/30 p-4 rounded-lg text-center backdrop-blur-sm"
                      >
                        <span className="text-textPrimary">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 
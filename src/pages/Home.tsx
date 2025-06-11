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
      <div className="container mx-auto px-8 py-12">
        <motion.div className="max-w-6xl">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-gradientStart via-gradientMiddle to-gradientEnd bg-clip-text text-transparent">
                Sonali
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl mb-8 text-secondary font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Senior Software Developer
            </motion.h2>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl text-textSecondary mb-12 leading-relaxed max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            An accomplished IT professional with over 5+ years of specialized experience in React.js, possessing a strong
            proficiency in developing dynamic and interactive web applications. Demonstrated expertise in designing technical solutions,
            designing interactive user interfaces, and developing reusable components.
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 mb-16">
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-primary rounded-full font-bold text-base transition-all duration-300 hover:shadow-lg hover:shadow-gradientEnd/20"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-gradientEnd text-gradientEnd rounded-full font-bold text-base transition-all duration-300 hover:bg-gradientEnd/10"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="rounded-2xl"
          >
            <motion.h3
              className="text-3xl font-bold mb-10 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent"
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
                  className="relative"
                >
                  <h4 className="text-2xl font-semibold mb-6 text-gradientMiddle">{skillGroup.category}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skillGroup.items.map((skill, i) => (
                      <motion.div
                        key={skill}
                        variants={skillCardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: (1.2 + index * 0.1) + (i * 0.05) }}
                        className="relative group rounded-lg overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gradientStart/5 to-gradientEnd/5 rounded-lg transform transition-transform group-hover:scale-105" />
                        <div className="relative p-4 rounded-lg">
                          <span className="text-textPrimary text-base font-medium group-hover:text-gradientEnd transition-colors">
                            {skill}
                          </span>
                        </div>
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
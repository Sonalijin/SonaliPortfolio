import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-textSecondary mb-6">
                I'm a passionate Software Developer with over 4 years of experience building dynamic, user-centric web applications. My expertise lies in modern front-end technologies including ReactJS, Redux Toolkit, TypeScript, and Tailwind CSS, with a strong focus on creating responsive and accessible interfaces.
              </p>
              <p className="text-textSecondary mb-6">
                Throughout my career, I've contributed to high-impact products such as TryEva, EvaStudio, and AkiroLabs, where I led performance optimization efforts, introduced scalable UI architectures, and integrated AI-driven features like ChatGPT. My work has directly improved product engagement, reduced development time, and enhanced user satisfaction.
              </p>
              <p className="text-textSecondary">
                I'm a strong believer in writing clean, maintainable code and following Agile principles. I enjoy turning complex problems into simple, elegant solutions and am constantly seeking opportunities to grow and innovate in the ever-evolving world of web development.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
              <div className="space-y-6">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-tertiary px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
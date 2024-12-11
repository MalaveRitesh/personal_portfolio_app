import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { id: 1, name: "Python", level: "Advanced", logo: "python.png" },
    { id: 2, name: "JavaScript", level: "Advanced", logo: "java-script.png" },
    { id: 3, name: "React", level: "Advanced", logo: "react.png" },
    { id: 4, name: "Java", level: "Basic", logo: "java.png" },
    { id: 5, name: "SQL", level: "Intermediate", logo: "sql.png" },
    { id: 6, name: "Git", level: "Basic", logo: "Git-Icon.png" },
    { id: 7, name: "Data Structures", level: "Intermediate", logo: "dsa.png" },
    { id: 8, name: "Problem Solving", level: "Intermediate", logo: "problem-solveing.png" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-left mb-6">
          <p className="text-4xl font-extrabold border-b-4 border-cyan-500 inline-block">
            Skills
          </p>
          <p className="py-6 text-lg text-white">
            These are some of my technical skills
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {skills.map(({ id, name, level, logo }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="shadow-md bg-gradient-to-r from-cyan-800 to-blue-800 rounded-lg p-6 transform transition-transform duration-300 "
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className="w-16 mx-auto mb-4 rounded-lg border-2 border-gray-200 shadow-sm"
              />
              <p className="font-bold text-lg">{name}</p>
              <p className="text-cyan-400">{level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

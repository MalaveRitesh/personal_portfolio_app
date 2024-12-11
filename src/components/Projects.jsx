import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with React and Node.js",
      tech: "React, Node.js, MongoDB, Express",
    },
    {
      id: 2,
      title: "QR Code Generator",
      description:
        "It is a user-friendly web application that allows users to create QR codes for any text or URL.",
      tech: "Python:qrcode, Flask, JavaScript, HTML, CSS",
    },
    {
      id: 3,
      title: "Machine Learning Project",
      description: "Stress detection using Ensemble Learning",
      tech: "Python, ML Algorithms",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Projects</p>
        </div>

        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map(({ id, title, description, tech }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ duration: 0.5 }}
              className="shadow-md shadow-gray-600 rounded-lg p-6 bg-gray-900 flex flex-col justify-between"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
              <p className="text-sm sm:text-base text-cyan-500">{tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

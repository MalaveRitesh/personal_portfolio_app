import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20">
      <div className="max-w-screen-lg mx-auto flex flex-col  h-full px-4 md:flex-row">

        <div className='mt-8 p-8'>
          <img
            src="/profile-pic.png" // Absolute path to public folder
            alt="Profile"
            className="pic h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 object-cover object-center rounded-full border-4 border-gray-300 shadow-lg transition-transform transform hover:scale-105 ml-4"
          />

        </div>




        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center h-full mt-4 "
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">
            Hi, I'm Ritesh
            <TypeAnimation
              sequence={[
                'Developer',
                3000,
                'Problem Solver',
                3000,
                'Tech Enthusiast',
                3000
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-cyan-500"
            />
          </h2>
          <p className="text-gray-300 py-8 max-w-md ">
            Passionate about software development and problem-solving.
            Experienced in full-stack development, algorithms, and data structures.
          </p>

          <div>
            {/* <button
              onClick={() => navigate('/projects')}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-1" />
              </span>
            </button> */}

            <a
              href="RiteshMalaveResume.pdf" // Path to the file in the public folder
              download="Ritesh_Resume.pdf" // Suggested download file name
            >
              <button className="group text-white px-6 py-3 my-2 flex items-center rounded-md border-2 border-cyan-500 cursor-pointer hover:bg-cyan-500/20 duration-300">
                Download Resume
                <span className="ml-8  group-hover:rotate-45  duration-300">
                  <FaDownload size={20} />
                </span>
              </button>
            </a>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
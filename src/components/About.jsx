import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About = () => {
    const highlights = [
        {
            id: 1,
            icon: <FaGraduationCap size={40} />,
            title: "Education",
            description: "Computer Science graduate with strong foundation in software engineering principles"
        },
        {
            id: 2,
            icon: <FaLaptopCode size={40} />,
            title: "Technical Skills",
            description: "Proficient in multiple programming languages and modern development frameworks"
        },
        {
            id: 3,
            icon: <FaRocket size={40} />,
            title: "Innovation",
            description: "Passionate about creating innovative solutions and learning new technologies"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white pt-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500">About Me</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-base sm:text-lg md:text-xl mt-8 leading-relaxed"
                >
                    <p className="mb-6">
                        I am a passionate Computer Science graduate with a strong foundation in software development
                        and a keen interest in creating innovative solutions. My journey in technology has equipped me
                        with both theoretical knowledge and practical experience in building modern applications.
                    </p>
                    <p>
                        I thrive on challenges and continuously explore new technologies to expand my skill set.
                        My goal is to contribute to meaningful projects that make a positive impact while growing
                        as a developer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                    {highlights.map(({ id, icon, title, description }) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.2 }}
                            className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-black to-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-cyan-500 mb-4">
                                {icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
                            <p className="text-sm sm:text-base text-gray-300">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;

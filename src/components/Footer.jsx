import React from "react";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const socialLinks = [
        {
            id: 1,
            title: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/MalaveRitesh",
        },
        {
            id: 2,
            title: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/ritesh-malave-44r22",
        },

    ];

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                {/* Top Row: Let's Connect and Social Links */}
                <div className="w-full flex justify-between items-center mb-4">
                    {/* Let's Connect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="text-cyan-400 hover:text-white text-lg font-bold"
                        >
                            Let's Connect ...
                        </button>
                        <p className="text-sm text-white">Feel free to reach out for collaborations or just a friendly hello</p>
                    </motion.div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map(({ id, title, icon, url }) => (
                            <motion.a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center space-x-2 text-xl hover:text-blue-400"
                            >
                                <div>{icon}</div>
                                <span className="hidden md:block">{title}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Copyright */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-sm text-white pt-8"
                >
                    © {new Date().getFullYear()} Ritesh Malave. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

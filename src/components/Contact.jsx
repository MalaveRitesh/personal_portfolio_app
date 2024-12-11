import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_eav9sif',
      'template_qgeiwyr',
      form.current,
      '2ZH8UbuoPCpb2vazR'
    )
      .then(response => {
        console.log('Success:', response);
        toast.success('Message sent successfully!');
        form.current.reset();
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 p-4 text-white pt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2 space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="user_name" className="text-sm text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="user_email" className="text-sm text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:text-cyan-900 hover:scale-110 duration-300"
            >
              Let's Connect
              <span className="ml-4">
                <FaPaperPlane />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Contact;
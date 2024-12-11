import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/about', text: 'About' },
    { id: 3, path: '/projects', text: 'Projects' },
    { id: 4, path: '/skills', text: 'Skills' },
    { id: 5, path: '/contact', text: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-2xl text-white bg-black fixed z-50">
      <div>
        <Link to="/" className="text-5xl font-signature cursor-pointer ml-2">Portfolio</Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, path, text }) => (
          <li key={id}>
            <Link
              to={path}
              className={`px-4 cursor-pointer capitalize font-medium transition-colors duration-200 ${isActive(path)
                ? 'text-cyan-500'
                : 'text-gray-300 hover:text-cyan-400'
                }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-start items-center absolute top-0 left-0 w-full h-auto bg-gradient-to-b from-black to-gray-800 p-4 space-y-4">
          {links.map(({ id, path, text }) => (
            <li key={id} className="px-4 cursor-pointer capitalize text-2xl">
              <Link
                to={path}
                onClick={() => setNav(false)}
                className={isActive(path) ? 'text-cyan-500' : 'text-gray-300'}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'py-4' : 'py-6'}`}>
      <div
        className={`w-full max-w-7xl mx-4 md:mx-6 rounded-2xl flex justify-between items-center px-6 transition-all duration-300 ${scrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-4'
          }`}
      >

        {/* Logo */}
        <div className='text-2xl font-bold font-display flex items-center gap-2 cursor-pointer group'>
          <span className='w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform'>D</span>
          <span className='tracking-tight text-slate-100 group-hover:text-primary transition-colors'>DevSquad</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='text-slate-300 hover:text-primary transition-colors font-medium text-sm relative group'
              >
                {link.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
          ))}
          <button className='btn-primary text-sm shadow-lg shadow-indigo-500/20'>
            Contact Us
          </button>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='md:hidden text-white text-2xl focus:outline-none'
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden absolute top-full left-0 right-0 mx-4 mt-2 rounded-2xl bg-surface/95 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl'
          >
            <ul className='flex flex-col p-6 gap-4'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className='block text-slate-300 hover:text-primary text-lg font-medium'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <button className='w-full btn-primary mt-4'>
                Contact Us
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

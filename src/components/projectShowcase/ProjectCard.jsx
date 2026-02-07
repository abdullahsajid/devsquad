import React from 'react'
import { motion } from "framer-motion";

const ProjectCard = ({ img, heading, link, desc, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_10px_40px_rgba(99,102,241,0.2)] transition-all duration-500 bg-surface'
    >
      {/* Background Image with Parallax-like Zoom */}
      <div className='w-full h-80 overflow-hidden'>
        <img
          src={img}
          alt={heading}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-50'
        />
      </div>

      {/* Elegant Overlay Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-background/95 via-background/60 to-transparent transition-opacity duration-300'>
        <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
          <h3 className='text-2xl font-bold font-display text-white mb-2 drop-shadow-md'>{heading}</h3>
          <p className='text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 font-light leading-relaxed max-w-[90%]'>
            {desc}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className='inline-flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 hover:gap-4'
          >
            View Project <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

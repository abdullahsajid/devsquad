import React from 'react'
import { motion } from "framer-motion";

const TeamCard = ({ userImg, position, name, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='bg-surface/30 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col items-center hover:bg-surface/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5'
    >
      <div className='relative w-40 h-40 mb-6'>
        <div className='absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500' />
        <img
          src={userImg}
          alt={name}
          className='w-full h-full object-cover rounded-full border-4 border-surface shadow-2xl group-hover:border-primary/50 relative z-10 transition-colors duration-300'
        />
        <div className="absolute bottom-2 right-2 z-20">
          <span className="flex w-6 h-6 bg-green-500 border-2 border-surface rounded-full"></span>
        </div>
      </div>

      <h3 className='text-xl font-bold font-display text-white mb-2 tracking-wide group-hover:text-primary transition-colors'>{name}</h3>
      <p className='text-slate-400 text-sm font-medium mb-6 uppercase tracking-wider'>{position}</p>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className='w-12 h-12 flex items-center justify-center rounded-full bg-background border border-white/10 text-slate-400 group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg'
      >
        <i className="fa-brands fa-linkedin-in text-lg"></i>
      </a>
    </motion.div>
  )
}

export default TeamCard

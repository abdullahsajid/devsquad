import React from 'react'
import { motion } from 'framer-motion';
import '../../../src/App.css';
const Intro = () => {

  return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] bg-background z-[100] flex flex-col justify-center items-center overflow-hidden px-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full max-w-lg flex flex-col items-center justify-center text-center'
      >
        <div className='text-5xl md:text-7xl font-bold font-display flex items-center gap-4 mb-8'>
          <span className='w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-primary to-secondary rounded-3xl flex items-center justify-center text-white font-extrabold text-4xl md:text-5xl shadow-2xl shadow-primary/30'>D</span>
          <span className='tracking-tight text-slate-100'>DevSquadHub</span>
        </div>

        <div className='w-48 h-1.5 bg-surface rounded-full overflow-hidden'>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className='h-full bg-gradient-to-r from-primary to-secondary'
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Intro

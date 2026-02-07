import React from 'react'
import { motion } from 'framer-motion';
import '../../../src/App.css';
const Intro = () => {

  return (
    <div className='fixed inset-0 bg-background z-[100] flex justify-center items-center overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='flex flex-col items-center'
      >
        <div className='text-4xl md:text-6xl font-bold font-display text-white mb-6 relative flex items-center'>
          <span className='bg-primary text-white px-4 py-2 rounded-xl mr-3 inline-block shadow-lg shadow-primary/40'>Dev</span>
          Squad
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

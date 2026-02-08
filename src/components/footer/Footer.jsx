import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='py-8 bg-background border-t border-white/5'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-2xl font-bold font-display text-white mb-6 flex justify-center items-center gap-2'>
            <span className='w-8 h-8 bg-gradient-to-tr from-primary to-secondary rounded-lg flex items-center justify-center text-white font-extrabold text-sm shadow-md'>D</span>
            <span className='tracking-tight'>DevSquadHub</span>
          </div>
          <p className='text-slate-500 text-sm'>
            &copy; {new Date().getFullYear()} <span className='text-primary font-medium'>DevSquadHub</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

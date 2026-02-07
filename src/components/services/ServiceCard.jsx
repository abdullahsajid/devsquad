import React from 'react'
import { motion } from "framer-motion";

const ServiceCard = ({ heading, desc, items, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className='group relative bg-surface/30 backdrop-blur-md border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1'
    >
      {/* Spotlight Effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      <div className='relative z-10'>
        <div className='w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-8 text-primary shadow-lg border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500'>
          <i className={`fa-solid ${icon} text-2xl drop-shadow-md`}></i>
        </div>

        <h3 className='text-2xl font-bold font-display text-white mb-4 group-hover:text-primary transition-colors'>{heading}</h3>
        <p className='text-slate-400 text-base leading-relaxed mb-8 font-light'>{desc}</p>

        <div className='flex flex-wrap gap-2 pt-4 border-t border-white/5'>
          {items.map((item, i) => (
            <span key={i} className='text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard

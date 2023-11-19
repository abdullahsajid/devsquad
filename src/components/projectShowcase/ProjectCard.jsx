import React from 'react'
import {motion,AnimatePresence} from "framer-motion";

const ProjectCard = ({img,heading,link}) => {
  return (
    <AnimatePresence>
      <motion.div 
        layout 
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        exit={{y:-30,opacity:0}}
        transition={{duration:0.7,ease:"easeInOut"}}
        className='bg-[#1D222A] p-5 rounded-xl relative overflow-hidden shadow-lg'>
          <img src={`${img}`} alt="galicia" className='rounded-xl object-cover transition-all hover:scale-95 opacity-60'/>
          <div className='text-white font-extrabold mb-2 mt-1'>{heading}</div>
          <a href={`${link}`} className='text-[#98a1b6] text-xs underline'>Get a Demo</a>
          <div>
              <img src="/pat-2.png" className='opacity-60 invert w-24 h-24 absolute right-[-48px] bottom-[-48px]'/>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectCard

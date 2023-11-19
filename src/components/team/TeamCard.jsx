import React from 'react'
import {motion,AnimatePresence} from "framer-motion";

const TeamCard = ({userImg,position,name,link}) => {
  return (
    <AnimatePresence>
      <motion.div 
        layout 
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        exit={{y:-30,opacity:0}}
        transition={{duration:0.7,ease:"easeInOut"}}
        className='bg-[#1D222A] p-5 rounded-xl relative overflow-hidden shadow-lg'>
          <div className='flex flex-col justify-center items-center'>
              <div>
                  <img src={`${userImg}`} alt="abdullah" className='relative w-[180px] h-[180px] rounded-[150px]'/>
              </div>
              <div className='text-white font-extrabold mb-2 mt-1'>{position}</div>
              <a href={`${link}`} className='text-[#98a1b6] text-xs underline' target='_blank'>{name}</a>
          </div>
          <div>
              <img src="/pat-2.png" className='opacity-60 invert w-24 h-24 absolute right-[-48px] bottom-[-48px]'/>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default TeamCard

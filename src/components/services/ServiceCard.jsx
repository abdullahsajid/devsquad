import React from 'react'
import Items from './Items'
import {motion,AnimatePresence} from "framer-motion";

const ServiceCard = ({heading,desc,items}) => {
  return (
    <AnimatePresence>
      <motion.div 
        layout 
        initial={{y:30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        exit={{y:-30,opacity:0}}
        transition={{duration:0.7,ease:"easeInOut"}}
      className='bg-[#1D222A] p-5 rounded-xl relative overflow-hidden shadow-lg'>
        <div className='text-white font-extrabold mb-2'>{heading}</div>
        <div className='flex flex-row mb-2 gap-2'>
          {items.map((item,index)=>(
              <Items key={index} val={item}/>
          ))}
        </div>
        <div className='text-[#98a1b6] text-xs'>{desc}</div>
        <div>
          <img src="/pat-2.png" className='opacity-60 invert w-24 h-24 absolute right-[-48px] bottom-[-48px]'/>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceCard

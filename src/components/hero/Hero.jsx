import React from 'react'
import {motion,AnimatePresence} from "framer-motion";

const Hero = () => {

  return (
    <div className='grid grid-cols-2 px-8 py-5 pt-20 h-fit max-sm:grid-cols-1'>
        <div className='flex flex-col justify-center max-sm:items-center'>
          <AnimatePresence >
            <motion.div
            layout 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            exit={{y:-30,opacity:0}}
            transition={{duration:0.7,ease:"backInOut"}}
            className="before:content-['Dev_Squad'] text-8xl before:font-extrabold before:absolute before:left-[10px] before:top-[20px]
             before:text-[#758BFD] before:z-[10] relative max-sm:text-5xl max-sm:w-full mb-3
             max-sm:before:top-[13px] max-sm:before:left-[39px]">
              <div className="text-8xl text-[#1D222A] font-extrabold max-sm:text-5xl max-sm:flex max-sm:justify-center">Dev Squad</div>
            </motion.div>
          </AnimatePresence>
            <div className='text-white text-2xl mt-4 font-semibold max-sm:text-xl max-md:text-center'>Elevating Businesses through Code DevSquad Crafting Web Excellence</div>
            <div className='flex gap-5 mt-5'>
                <a href='https://www.linkedin.com/in/aabdullahsajid/' target='_blank' className='shadow-2xl'><i class="fa-brands fa-linkedin text-white text-3xl"></i></a>
                <a href='https://twitter.com/aabdullahsajid' target='_blank' className='shadow-2xl'><i class="fa-brands fa-square-twitter text-white text-3xl"></i></a>
                <a href='https://www.instagram.com/ch_bilaltalib/' target='_blank' className='shadow-2xl'><i class="fa-brands fa-square-instagram text-white text-3xl"></i></a>
            </div>
            <motion.div 
               className='mt-5'>
              <a href="#" className='bg-[#1D222A] p-2 text-white rounded-xl font-semibold border border-[#758BFD]'>Contact us</a>
            </motion.div>
        </div>
        <div className='flex justify-center items-center max-sm:mt-8 max-sm:relative'>
            <motion.div
            layout 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            exit={{y:-30,opacity:0}}
            transition={{duration:0.7,ease:"easeInOut"}}
            >
              <img src="/PngItem_6812638.png" alt="" />
            </motion.div>
            <img src="/pat-2.png" className='opacity-60 invert w-24 h-24 max-sm:absolute max-sm:right-[-80px] max-sm:top-1'/>
        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import { motion } from "framer-motion";

const Hero = ({ handleForm, toggleForm }) => {
  return (
    <section className='relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-12'>
      {/* Background Gradients */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow' />
        <div className='absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow' style={{ animationDelay: '2s' }} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center z-10 w-full'>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='flex flex-col justify-center text-center lg:text-left'
        >
          <div className="mb-6 inline-block">
            <span className="py-2 px-4 rounded-full bg-surface border border-white/10 text-primary text-sm font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm">
              🚀 Web Development Agency
            </span>
          </div>

          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8 leading-[1.1]'>
            <span className='text-slate-100 drop-shadow-sm'>Dev</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary ml-2'>Squad</span>
            <span className='text-primary'>.</span>
          </h1>

          <p className='text-slate-400 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed'>
            Elevating businesses through creative code. We craft digital experiences with modern technologies, stunning aesthetics, and performance in mind.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center'>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleForm}
              className='btn-primary'
            >
              Start Project
            </motion.button>

            <div className='flex gap-4'>
              <SocialLink href='https://www.linkedin.com/in/aabdullahsajid/' icon='fa-linkedin-in' />
              <SocialLink href='https://twitter.com/aabdullahsajid' icon='fa-x-twitter' />
              <SocialLink href='https://www.instagram.com/ch_bilaltalib/' icon='fa-instagram' />
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative flex justify-center items-center'
        >
          <div className='relative z-10 w-full max-w-[500px] animate-float'>
            <div className='absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-3xl' />
            <img
              src="/PngItem_6812638.png"
              alt="DevSquad Illustration"
              className='relative z-10 w-full h-auto object-contain drop-shadow-2xl'
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target='_blank'
    rel='noreferrer'
    className='w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/5 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/50 transition-all duration-300'
  >
    <i className={`fa-brands ${icon} text-xl`}></i>
  </a>
)
export default Hero

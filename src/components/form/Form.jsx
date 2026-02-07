import React from 'react'
import { motion } from 'framer-motion';

const Form = ({ handleForm }) => {
    return (
        <div className='fixed inset-0 z-[60] flex justify-center items-center px-4'>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleForm}
                className='absolute inset-0 bg-black/60 backdrop-blur-sm'
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className='relative w-full max-w-lg bg-surface/90 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl'
            >
                <button
                    onClick={handleForm}
                    className='absolute top-4 right-4 text-slate-400 hover:text-white transition-colors'
                >
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>

                <h2 className='text-3xl font-bold font-display text-white mb-2 text-center'>
                    Let's <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Talk</span>
                </h2>
                <p className='text-slate-400 text-center mb-8'>
                    Tell us about your project and we'll get back to you shortly.
                </p>

                <form className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user_name" className='text-sm font-medium text-slate-300 ml-1'>Name</label>
                        <input
                            type="text"
                            id='user_name'
                            placeholder='John Doe'
                            className='bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user_email" className='text-sm font-medium text-slate-300 ml-1'>Email</label>
                        <input
                            type="email"
                            id='user_email'
                            placeholder='john@example.com'
                            className='bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user_message" className='text-sm font-medium text-slate-300 ml-1'>Message</label>
                        <textarea
                            name=""
                            id="user_message"
                            cols="30"
                            rows="4"
                            placeholder='Tell us about your project...'
                            className='bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none'
                        ></textarea>
                    </div>

                    <button className='mt-4 btn-primary w-full shadow-lg shadow-indigo-500/20'>
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default Form

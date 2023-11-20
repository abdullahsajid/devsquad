import React from 'react'

const Form = () => {
  return (
    <div className='fixed top-0 z-10 w-screen h-screen flex justify-center items-center'>
        <form className='flex flex-col justify-center items-center bg-[#1D222A] p-5 rounded-lg'>
            <div className='flex flex-col p-3 w-full'>
                <label htmlFor="user_name" className='text-white mb-2 font-semibold'>Name</label>
                <input type="text" id='user_name' className='border-none outline-0 bg-[#232932] text-white p-1 rounded'/>
            </div>
            <div className='flex flex-col p-3 w-full'>
                <label htmlFor="user_email" className='text-white mb-2 font-semibold'>Email</label>
                <input type="email" id='user_email' className='border-none outline-0 bg-[#232932] text-white p-1 rounded' />
            </div>
            <div className='flex flex-col p-3 w-full'>
                <label htmlFor="user_message" className='text-white mb-2 font-semibold'>Message</label>
                <textarea name="" id="user_message" className='border-none outline-0 bg-[#232932] text-white p-1 rounded' cols="30" rows="3"></textarea>
            </div>
        </form>
    </div>
  )
}

export default Form

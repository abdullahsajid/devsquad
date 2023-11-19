import React from 'react'

const Navbar = () => {
  return (
    <div className='w-screen border-b-2 border-[#1D222A] shadow'>
      <div className='flex justify-between px-8 py-5'>
        <div className='text-white font-semibold'>
          <span className='bg-white text-[#232932] p-1 rounded-md'>Dev</span> Squad
        </div>
        <div className='max-sm:hidden'>
          <ul className='flex gap-4'> 
            <li className='text-white font-semibold'>Home</li>
            <li className='text-white font-semibold'>Services</li>
            <li className='text-white font-semibold'>Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

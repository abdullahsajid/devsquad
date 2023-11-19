import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import '../../../src/App.css';
const Intro = () => {

  return (
    <div className='bg-[#232932] h-screen flex justify-center items-center translate-y-0 transition-all'>
      <div className='flex justify-center items-center flex-col'>
        <div className='text-white font-semibold'>
          <span className='bg-white text-[#232932] p-1 rounded'>Dev</span> Squad
        </div>
        <div className='mt-5 w-16'>
        <LinearProgress/>
        </div>
      </div>
    </div>
  )
}

export default Intro

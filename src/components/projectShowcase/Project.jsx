import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='px-8 py-5 pt-20'>
      <div className='flex justify-center items-center text-3xl font-extrabold text-white'>Our Projects</div>
      <div className='grid grid-cols-3 gap-4 mt-6 max-sm:grid-cols-1'>
        <ProjectCard
            img={'/galicia.png'}
            heading={'Galicia'}
            link={'https://galicia.ms/'}
        />
        <ProjectCard
            img={'/carresa.png'}
            heading={'Carresa'}
            link={'https://abdullahsajid.github.io/servicesSite/'}
        />
        <ProjectCard
            img={'/clientprofile.png'}
            heading={'Ali Sajjad portfolio'}
            link={'https://abdullahsajid.github.io/clientPortfolio/'}
        />
      </div>
      <a href="https://github.com/abdullahsajid" target='_blank' className='bg-[#1D222A] flex justify-center items-center mt-4 p-3 rounded-xl w-max max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center'>
        <div className='text-[#98a1b6]'>All projects
          <i class="fa-solid fa-arrow-up-right-from-square text-[#98a1b6] text-sm ml-2"></i>
        </div>
      </a>
    </div>
  )
}

export default Project

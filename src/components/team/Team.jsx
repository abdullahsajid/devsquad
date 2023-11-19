import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='bg-[#252B33] px-8 py-5 pt-20 relative'>
        <div className='flex justify-center items-center text-3xl font-extrabold text-white'>Squad Member</div>
        <div className='grid grid-cols-3 gap-4 mt-6 max-sm:grid-cols-1'>
            <TeamCard
                userImg={'/bilal.png'}
                position={'Manager'}
                name={"Bilal Talib"}
                link={'https://www.linkedin.com/in/bilal-talib-121ch/'}
            />
            <TeamCard
                userImg={'/abdullah.jpg'}
                position={'Frontend Developer'}
                name={"Abdullah Sajid"}
                link={'https://www.linkedin.com/in/aabdullahsajid/'}
            />
            <TeamCard
                userImg={'/hassan.jfif'}
                position={'Full Stack Developer'}
                name={"Hassan Tariq"}
                link={'https://www.linkedin.com/in/hassan-tariq-588543246/'}
            />
            <TeamCard
                userImg={'/hamza.jpg'}
                position={'Designer & Video Editor'}
                name={"Hamza Sadiq"}
                link={'https://www.linkedin.com/in/hamza-sadiq-315b56216/'}
            />
        </div>
        <div className='absolute bottom-[20px] right-[-40px] max-sm:bottom-[50%] max-sm:right-[-60px]'>
            <img src="/pat-2.png" className='opacity-60 invert w-24 h-24' alt="" />
        </div>
    </div>
  )
}

export default Team

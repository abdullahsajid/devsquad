import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='px-8 py-5 pt-20 relative'>
      <div className='flex justify-center items-center text-3xl font-extrabold text-white'>Our Services</div>
      <div className='grid grid-cols-3 gap-4 mt-6 max-sm:grid-cols-1'>
        <ServiceCard
        heading={"Full Stack Development"}
        desc={"From conceptualizing and designing user interfaces to architecting and implementing server-side logic,we offer end-to-end solutions. ensuring cohesive and integrated applications that meet your business needs comprehensively."} 
        items={['react js','integration','Node js','php','laravel']}
        />
        <ServiceCard
            heading={'Frontend Development'}
            desc={"We specialize in creating user-friendly interfaces and captivating user experiences Our focus is on designing responsive, intuitive, and visually appealing web interfaces that elevate user engagement."}
            items={['html','css','javascript','react js']}
        />
        <ServiceCard
            heading={'Backend Development'}
            desc={"We excel in building robust server-side architectures, databases, and APIs that enable seamless communication between the frontend and server We prioritize scalable, efficient, and secure backend solutions that support the smooth functioning of your digital platforms."}
            items={['node js','php','laravel']}
        />
        <ServiceCard
            heading={"Video Editing"}
            desc={"we provide professional video editing services. We specialize in transforming raw video footage into polished, engaging content.we ensure high-quality video content tailored to your specifications. "}
            items={['Adobe Premiere Pro','Filmora','Capcut']}
        />
        <div className='absolute bottom-[20px] right-[-40px] max-sm:bottom-[-90px]'>
          <img src="/pat-2.png" className='opacity-60 invert w-24 h-24' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Services

import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Pat from '../components/hero/Pat';
import Services from '../components/services/Services';
import Project from '../components/projectShowcase/Project';
import Team from '../components/team/Team';
import Footer from '../components/footer/Footer';
import Intro from '../components/Intro/Intro';
import { useState } from 'react';
const Main = () => {
    const[toggleIntro,setToggleIntro] = useState(true)
    const[toggleForm,setToggleForm] = useState(false)
    setTimeout(()=>{
        setToggleIntro(false)
    },2000)
    const handleForm = () =>  {
        setToggleForm(!toggleForm)
    }
  return (
    <div>{
      toggleIntro ? <Intro/> :
      <div className={`${toggleForm ? " bg-[#232932] overflow-hidden overflow-y-hidden":"bg-[#232932] overflow-hidden"}`}>
       <Navbar/>
       <Hero handleForm={handleForm} toggleForm={toggleForm}/>
       <Pat/>
       <Services/>
       <Project/>
       <Team/>
       <Footer/>
     </div>
    }</div>
  )
}

export default Main

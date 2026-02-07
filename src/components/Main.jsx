import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Project from '../components/projectShowcase/Project';
import Team from '../components/team/Team';
import Footer from '../components/footer/Footer';
import Intro from '../components/Intro/Intro';
import Form from '../components/form/Form';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const [toggleIntro, setToggleIntro] = useState(true)
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setToggleIntro(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleForm = () => {
    setToggleForm(!toggleForm)
  }

  return (
    <div className='bg-background min-h-screen text-slate-100 font-sans selection:bg-primary/30'>
      <AnimatePresence>
        {toggleIntro && <Intro />}
      </AnimatePresence>

      <div className={`${toggleForm ? "overflow-hidden h-[100dvh]" : ""} relative`}>
        <Navbar />
        <Hero handleForm={handleForm} toggleForm={toggleForm} />
        <Services />
        <Project />
        <Team />
        <Footer />

        <AnimatePresence>
          {toggleForm && <Form handleForm={handleForm} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Main

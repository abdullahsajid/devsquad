import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    img: '/galicia.png',
    heading: 'Galicia',
    link: 'https://galicia.ms/',
    desc: 'A comprehensive business solution website.'
  },
  {
    img: '/carresa.png',
    heading: 'Carresa',
    link: 'https://abdullahsajid.github.io/servicesSite/',
    desc: 'Digital services platform with modern UI.'
  },
  {
    img: '/clientprofile.png',
    heading: 'Ali Sajjad Portfolio',
    link: 'https://abdullahsajid.github.io/clientPortfolio/',
    desc: 'Professional portfolio showcasing skills and work.'
  }
];

const Project = () => {
  return (
    <section id="projects" className='py-24 px-6 bg-surface/30 relative overflow-hidden'>
      {/* Background shape */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none' />

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'
        >
          <div>
            <span className="py-2 px-4 rounded-full bg-surface border border-white/5 text-secondary text-sm font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm mb-4 inline-block">
              Our Work
            </span>
            <h2 className='text-4xl md:text-5xl font-bold font-display mb-4'>
              Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>Projects</span>
            </h2>
            <p className='text-slate-400 max-w-xl text-lg'>
              Explore some of our recent work and digital experiences we've crafted.
            </p>
          </div>

          <a
            href="https://github.com/abdullahsajid"
            target='_blank'
            rel="noreferrer"
            className='flex items-center gap-3 text-white hover:text-primary transition-colors group font-medium'
          >
            <span>View All Projects</span>
            <span className='w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all'>
              <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
            </span>
          </a>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project

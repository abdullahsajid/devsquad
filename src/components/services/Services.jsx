import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const servicesData = [
  {
    heading: "Full Stack Development",
    desc: "From conceptualizing and designing user interfaces to architecting and implementing server-side logic, we offer end-to-end solutions ensuring cohesive and integrated applications.",
    items: ['React.js', 'Node.js', 'Express', 'MongoDB', 'SQL'],
    icon: "fa-code"
  },
  {
    heading: "Frontend Development",
    desc: "We specialize in creating user-friendly interfaces and captivating user experiences. Our focus is on designing responsive, intuitive, and visually appealing web interfaces.",
    items: ['HTML5', 'CSS3/Tailwind', 'JavaScript', 'React.js', 'Framer Motion'],
    icon: "fa-laptop-code"
  },
  {
    heading: "Backend Development",
    desc: "We excel in building robust server-side architectures, databases, and APIs that enable seamless communication. We prioritize scalable, efficient, and secure backend solutions.",
    items: ['Node.js', 'Python', 'PHP', 'Laravel', 'AWS'],
    icon: "fa-server"
  },
  {
    heading: "Video Editing",
    desc: "We provide professional video editing services, transforming raw footage into polished, engaging content tailored to your specifications.",
    items: ['Premiere Pro', 'After Effects', 'Davinci Resolve'],
    icon: "fa-photo-film"
  }
];

const Services = () => {
  return (
    <section id="services" className='py-24 px-6 relative bg-background'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <span className="py-2 px-4 rounded-full bg-surface/50 border border-white/5 text-primary text-sm font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm mb-6 inline-block">
            What We Do
          </span>
          <h2 className='text-4xl md:text-5xl font-bold font-display mb-6'>
            Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary'>Services</span>
          </h2>
          <p className='text-slate-400 max-w-2xl mx-auto text-lg'>
            We offer a comprehensive suite of digital solutions to help your business grow and thrive in the modern era.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none' />
    </section>
  )
}

export default Services

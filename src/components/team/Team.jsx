import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const teamData = [
    {
        name: "Bilal Talib",
        position: "Manager",
        userImg: "/bilal.png",
        link: "https://www.linkedin.com/in/bilal-talib-121ch/"
    },
    {
        name: "Abdullah Sajid",
        position: "Frontend Developer",
        userImg: "/abdullah.jpg",
        link: "https://www.linkedin.com/in/aabdullahsajid/"
    },
    {
        name: "Muhammad Ali Ahmad",
        position: "Full Stack Developer",
        userImg: "/alii.jpg",
        link: "https://www.linkedin.com/in/muhammad-ali-ahmad-7a5203282/"
    },
    {
        name: "Hassan Tariq",
        position: "Full Stack Developer",
        userImg: "/hassan.jfif",
        link: "https://www.linkedin.com/in/hassan-tariq-588543246/"
    },
    {
        name: "Muhammad Umair",
        position: "Backend Developer",
        userImg: "/umair.jfif",
        link: "https://www.linkedin.com/in/muhammad-umair-b28b29227/"
    },
    {
        name: "Hamza Sadiq",
        position: "Designer & Editor",
        userImg: "/hamza.jpg",
        link: "https://www.linkedin.com/in/hamza-sadiq-315b56216/"
    }
];

const Team = () => {
    return (
        <section id="team" className='py-24 px-6 bg-background relative overflow-hidden'>
            {/* Background decorative blobs */}
            <div className='absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none' />
            <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none' />

            <div className='max-w-7xl mx-auto relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-20'
                >
                    <span className="py-2 px-4 rounded-full bg-surface/50 border border-white/5 text-accent text-sm font-semibold tracking-wide uppercase shadow-lg backdrop-blur-sm mb-6 inline-block">
                        Our Team
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold font-display mb-6'>
                        Meet The <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>SquadHub</span>
                    </h2>
                    <p className='text-slate-400 max-w-2xl mx-auto text-lg'>
                        The talented individuals behind our success and your digital transformation.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center'>
                    {teamData.map((member, index) => (
                        <TeamCard key={index} {...member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team

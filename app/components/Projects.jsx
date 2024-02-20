'use client'
import './projects.css';
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';


const projectData = [
    {   
        id: 1,
        imgOne: '/assets/portfolio-img-4.png',
        title: 'Portfolio',
        type: 'Website',
        tag: ["All", "Web"],
        description: 'Next.Js, Framer Motion',
        webUrl: '/'
    },
    {
        id: 2,
        imgOne: '/assets/elegantmob-img-2.png',
        title: 'Elegant App',
        type: 'Mobile App',
        tag: ["All", "Mobile"],
        description: 'React Native, MongoDB',
        webUrl: 'https://elegantcharms.lk'
    },
    {
        id: 3,
        imgOne: '/assets/elegantweb-img-3.png',
        title: 'Elegant Charms',
        type: 'Website',
        tag: ["All", "Web"],
        description: 'HTML, CSS, JavaScript, Bootstrap',
        webUrl: 'https://elegantcharms.lk'
    },
    {
        id: 4,
        imgOne: '/assets/taxapp-img.png',
        title: 'Tax App',
        type: 'Mobile App',
        tag: ["All", "Mobile"],
        description: 'React Native, MongoDB',
        webUrl: 'https://meezaniyyah.com'
    },
    {
        id: 5,
        imgOne: '/assets/meezaniyyah-img-3.png',
        title: 'Meezaniyyah Institute',
        type: 'Website',
        tag: ["All", "Web"],
        description: 'HTML, CSS, JavaScript, Bootstrap',
        webUrl: 'https://meezaniyyah.com'
    },
    {
        id: 6,
        imgOne: '/assets/frontier-img-3.png',
        title: 'Frontier Advisory',
        type: 'Website',
        tag: ["All", "Web"],
        description: 'HTML, CSS, JavaScript, Bootstrap',
        webUrl: 'https://frontierlk.com'
    },
]


const Projects = () => {

    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectData.filter((project) =>
        project.tag.includes(tag)
    )

    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

  return (
    <div className='project-container'>
        <h2 className='project-title'>My <span>Projects</span></h2>
        <div className='project-btn'>
            <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'}/>
            <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'}/>
            <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'}/>
        </div>
        <div ref={ref} className='project-cards-main'>
            {filteredProjects.map((project, index) => {
                return(
                    <motion.div
                    variants={cardVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                    key={project.id}>

                        <ProjectCard imgOne={project.imgOne} title={project.title} type={project.type} description={project.description} webUrl={project.webUrl}/>
                    </motion.div>
                )
            })

            }
        </div>
    </div>
  )
}

export default Projects
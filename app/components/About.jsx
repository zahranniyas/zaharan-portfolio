'use client'
import { useState, useTransition, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SkillSvg from './SkillSvg';
import './about.css';
import TabButton from './TabButton';
import EduSvg from './EduSvg';
import WorkSvgN from './WorkSvgN';

const tabData = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul>
        <li>HTML, CSS & SCSS</li>
        <li>JavaScript</li>
        <li>React, Next.js, Node.js, Express</li>
        <li>React Native</li>
        <li>MongoDB</li>
      </ul>
    ),
    sv: (
      <div className='svg-container'>
            <SkillSvg />
      </div>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>BSc. in Computer Science - Kingston University, UK (Final Year)</li>
        <li>Pearson BTEC HND in Web & App Development from AMDT</li>
        <li>Advanced Diploma in UX Design from AMDT</li>
        <li>School - Zahira College Colombo</li>
      </ul>
    ),
    sv: (
      <div className='svg-container'>
            <EduSvg />
      </div>
    )
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul>
        <li>Front-End Developer - Alpha Digital, Al Ain, UAE (2023 - Present)</li>
        <li>Senior Web Developer - Animatist (Pvt) Ltd (2021 - 2023)</li>
        <li>Head of Taxation - Frontier Advisory (Pvt) Ltd (2018 - 2021)</li>
      </ul>
    ),
    sv: (
      <div className='svg-container'>
            <WorkSvgN />
      </div>
    )
  },
]

const listVariants = {
  default: { x:-50, opacity: 0 },
  animate: { x: 0, opacity: 1 }
}

const About = () => {

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once:true });

  const aboutVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 }
  }

  return (
    <section className='about-main'>
      <motion.div
        variants={aboutVariants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.3}}
      className='about-container'
      >

        <div className="about-left">
          {tabData.find((t) => t.id === tab).sv}
        </div>

        <div ref={ref} className="about-right">
          <h1 className='about-title'>About <span>Me</span></h1>
          <p className='about-text'>I’m a Web & App Developer with a passion for creating interactive and responsive web applications. I’m a quick learner and always look to expand my knowledge and skill set. I’m a team player and I’m excited to work with others to create amazing applications</p>
          <div>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>{' '}Skills{' '}</TabButton>

            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>{' '}Education{' '}</TabButton>

            <TabButton selectTab={() => handleTabChange('experience')} active={tab === 'experience'}>{' '}Experience{' '}</TabButton>
          </div>

          <div className='about-cont'>
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
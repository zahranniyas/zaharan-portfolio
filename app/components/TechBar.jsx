'use client'
import './techbar.css';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const techData = [
    {
        id: 1,
        name: 'html',
        img: '/assets/html-logo.png'
    },
    {
        id: 2,
        name: 'react',
        img: '/assets/react-logo.png'
    },
    {
        id: 3,
        name: 'javascript',
        img: '/assets/js-logo.png'
    },
    {
        id: 4,
        name: 'nodejs',
        img: '/assets/node-logo.png'
    },
    {
        id: 5,
        name: 'css',
        img: '/assets/css-logo.png'
    },
]

const TechBar = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const techVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

  return (
    <section ref={ref} className='tech-main'>
        <motion.div
            variants={techVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='tech-container'    
        >
            {techData.map(({name, img, id}) => {
                return(
                    <div key={id}>
                        <Image className='tech-img' src={img} alt={name} width={100} height={100} />
                    </div>
                )
            })

            }
        </motion.div>
    </section>
  )
}

export default TechBar
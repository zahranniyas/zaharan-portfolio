'use client'
import './hero.css';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section className="hero-main">
        <motion.div
          initial={{ opacity:0, x: 50 }}
          animate={{ opacity:1, x: 0 }}
          transition={{ duration: 0.2 }}
        className='hero-content'>
            <div className='hero-left'>
                <h1 className='hero-title'>Hello, I&apos;m</h1>
                <TypeAnimation
                  sequence={[
                    'Zaharan Niyas',
                    1000, 
                    'Web Developer',
                    1000,
                    'App Developer',
                    1000,
                    'UI/UX Designer',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  className='anim-text'
                  repeat={Infinity}
                />
                <p className='hero-text'>I turn ideas into products by crafting scalable front-end <br />products with great user experience</p>
                <div className='hero-btn-main'>
                  <Link href={'#contact'}>
                    <motion.div href={'#contact'} whileTap={{scale:0.9}} whileHover={{backgroundColor:'#54a9d3'}} className='hero-btn'
                    >
                      Contact Me  
                    </motion.div>
                  </Link>
                  <div className='hero-ico-main'>
                    <FontAwesomeIcon className='ba-icon-hero' icon={faPhone} />
                    <FontAwesomeIcon className='ba-icon-hero' icon={faEnvelope} />
                    <FontAwesomeIcon className='ba-icon-hero' icon={faWhatsapp} />
                  </div>
                </div>
            </div>
            <div className='hero-right'>
                <Image priority className='hero-img' src={'/assets/hero-bg.png'} alt='hero-img' width={546} height={315}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero
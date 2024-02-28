'use client'
import './navbar.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import MenuOverlay from './MenuOverlay';
import { motion } from 'framer-motion';

const NavBar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
    <motion.nav
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{}}
      className='nav-main'
    >
        <div className='nav-container'>
            <Link className='nav-logo' href={'/'}><Image src={'/assets/logo-light.png'} alt='logo' width={58} height={58}/></Link>
            <div className='mobile-nav'>
              {!navbarOpen ? (
                <motion.button
                  onClick={() => setNavbarOpen(true)}
                  whileTap={{rotate:'90deg', scale:0.5}}
                >
                  <FontAwesomeIcon className='bar-icon' icon={faBars} />
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => setNavbarOpen(false)}
                  whileTap={{rotate:'90deg', scale:0.5}}
                >
                  <FontAwesomeIcon className='x-icon' icon={faXmark} />
                </motion.button>
              )}
            </div>
            <ul className='menu'>
                <li><Link href={'#about'} className='menu-item'>About</Link></li>
                <li><Link href={'#projects'} className='menu-item'>Projects</Link></li>
                <li><Link href={'#contact'} className='menu-item'>Contact</Link></li>
                <li>
                  <motion.button
                    className='cv-btn'
                    whileHover={{backgroundColor: '#f4f4f4'}}
                    whileTap={{scale: 0.9}}
                  >
                    Download CV
                  </motion.button>
                </li>
            </ul>
        </div>

    </motion.nav>
    {navbarOpen ? <MenuOverlay /> : null}
    </>
  )
}

export default NavBar
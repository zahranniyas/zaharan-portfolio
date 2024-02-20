import Link from 'next/link';
import './menuoverlay.css';
import { motion } from 'framer-motion';

const MenuOverlay = () => {
  return (
    <motion.ul
    initial={{y:-100}}
    animate={{y:0}}
    className='mobmenu'>
        <li><Link href={""} className='mobmenu-item'>About</Link></li>
        <li><Link href={""} className='mobmenu-item'>Projects</Link></li>
        <li><Link href={""} className='mobmenu-item'>Contact</Link></li>
    </motion.ul>
  )
}

export default MenuOverlay
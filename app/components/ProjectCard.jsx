import './projectcard.css'
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({imgOne, title, type, description, webUrl}) => {
  return (
    <div className='project-card-main'>
        <div className='card-img-wrap'>
            <Image src={imgOne} alt='' width={378} height={203}/>
        </div>
        <h1 className='project-card-title'>{title}</h1>
        <p className='project-card-type'>{type}</p>
        <p className='project-card-desc'>{description}</p>
        <Link href={webUrl} className='card-link'>Check it out</Link>
  </div>
  )
}

export default ProjectCard
'use client'
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


const Contact = () => {
    
    const [modal, setModal] = useState(true)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const response = await fetch('api/contact-us', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'aaplication/json',
            },
            body: JSON.stringify(formData),
        });
        
        const { success, error } = await response.json();

        if (success) {
            setModal(true)
        } else if (error) {
            console.error(error);
            alert('An error occured while submitting your message. Please contact me on my phone');
        }

        setSubmitting(false);
    }

  return (
    <section id='contact' className='contact-main'>
        <div className='contact-container'>
            <div className="contact-left">
                <h1 className='contact-title'>Contact <span>Me</span></h1>
                <h4 className='contact-subtitle'>Let&apos;s Connect</h4>
                <p className='contact-text'>My inbox is always open. Whether you have a job, project, question or just want to say hi, hit me up and I will get back to you asap!</p>
                <div className='contact-icons'>
                    <FontAwesomeIcon className='ba-icon' icon={faPhone} /><h4>+94 766 71 33 61</h4>
                </div>
                <div className='contact-icons'>
                    <FontAwesomeIcon className='ba-icon' icon={faEnvelope} /><h4>zahranniyas@gmail.com</h4>
                </div>
                <div className='contact-icons'>
                    <FontAwesomeIcon className='ba-icon' icon={faWhatsapp} /><h4>+94 766 71 33 61</h4>
                </div>
            </div>
            <div className="contact-right">
                <form onSubmit={handleSubmit} className='email-form' action="">
                    <label htmlFor="name" className='email-label'>Name</label>
                    <input onChange={handleInputChange} className='email-input' name='name' type="text" id='name' required placeholder='My Name'/>

                    <label htmlFor="email" className='email-label'>Email Address</label>
                    <input onChange={handleInputChange} className='email-input' name='email' type="email" id='email' required placeholder='example@example.com'/>

                    <label htmlFor="subject" className='email-label'>Subject</label>
                    <input onChange={handleInputChange} className='email-input' name='subject' type="text" id='subject' required placeholder='I have a question!'/>

                    <label htmlFor="message" className='email-label'>Message</label>
                    <textarea onChange={handleInputChange} required className='text-input' name="message" id="message" rows="8" placeholder='This is my message'></textarea>
                    
                    <div className='contact-btn-main'>
                        <motion.button
                            whileTap={{scale:0.9}}
                            type='submit'
                            className='contact-btn'
                        >
                            Send Message
                        </motion.button>

                        {submitting ? <motion.div
                            initial={{rotate: 0}}
                            animate={{rotate: 360}}
                            transition={{repeat: Infinity, type:'tween', duration: 1, ease:'linear'}}
                            style={{width: '30px', height: '30px'}}
                        >
                            <Image src={'/assets/loading.png'} alt='loading' width={30} height={30}/>
                        </motion.div> : null}

                        {modal ?
                        <div className='contact-modal-main'>
                            <p>Your Message has been submitted successfully. I will get back to you soon!</p>
                            <Image src={'/assets/green-tick.png'} alt='green-tick' width={30} height={30}/>
                            <button onClick={() => setModal(false)} className='contact-modal-btn'><FontAwesomeIcon className='x-icon-modal' icon={faXmark} /></button>
                        </div> : null}
                    </div>
                </form>
                
            </div>

        </div>
    </section>
  )
}

export default Contact


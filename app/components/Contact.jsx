import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className='contact-main'>
        <div className='contact-container'>
            <div className="contact-left">
                <h1 className='contact-title'>Contact <span>Me</span></h1>
                <h4 className='contact-subtitle'>Let&apos;s Connect</h4>
                <p className='contact-text'>My inbox is always open. Whether you have a job, project, question or just want to say hi, hit me up and I will get back to you asap!</p>
                <div className='contact-icons'>
                    <FontAwesomeIcon className='ba-icon' icon={faPhone} />
                    <FontAwesomeIcon className='ba-icon' icon={faEnvelope} />
                    <FontAwesomeIcon className='ba-icon' icon={faWhatsapp} />
                </div>
            </div>
            <div className="contact-right">
                <form className='email-form' action="">
                    <label htmlFor="email" className='email-label'>Email Address</label>
                    <input className='email-input' type="email" id='email' required placeholder='example@gmail.com'/>
                </form>
                <form className='email-form' action="">
                    <label htmlFor="subject" className='email-label'>Subject</label>
                    <input className='email-input' type="text" id='subject' required placeholder='I have a question!'/>
                </form>
                <form className='email-form' action="">
                    <label htmlFor="message" className='email-label'>Message</label>
                    <textarea className='text-input' name="message" id="message" rows="8"></textarea>
                </form>
                <button className='contact-btn'>Send Message</button>
            </div>
        </div>
    </section>
  )
}

export default Contact
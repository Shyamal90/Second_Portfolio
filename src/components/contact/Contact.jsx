import React from 'react'
import './contact.css'
import ContactCard from './ContactCard'
import {MdOutlineMailOutline} from 'react-icons/md'

function Contact() {
  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <ContactCard icon={<MdOutlineMailOutline className='contact__option-icon'/>} medium={"Email"} data={"shyamalsardar90@gmail.com"} link={"mailto:shyamalsardar90@gmail.com"}/>
          <ContactCard icon={<MdOutlineMailOutline className='contact__option-icon'/>} medium={"What's App"} data={"+919735627576"} link={"http://api.whatsapp.com/send?phone+919735627576"}/>
          <ContactCard icon={<MdOutlineMailOutline className='contact__option-icon'/>} medium={"Email"} data={"shyamalsardar90@gmail.com"} link={"mailto:shyamalsardar90@gmail.com"}/>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  cols="30" rows="10" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

import React, { useState } from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {FaBookReader} from 'react-icons/fa'
import {MdContactPhone} from 'react-icons/md'

const Navbar = () => {
  const [activeClass,setActiveClass] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveClass('#')} className={activeClass === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveClass('#about')} className={activeClass === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={()=>setActiveClass('#experience')} className={activeClass === '#experience' ? 'active' : ''}><FaBookReader/></a>
      <a href="#contact" onClick={()=>setActiveClass('#contact')} className={activeClass === '#contact' ? 'active' : ''}><MdContactPhone/></a>
    </nav>
  )
}

export default Navbar
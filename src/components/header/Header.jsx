import React from 'react'
import CTA from './CTA.jsx'
import HeaderSocial from './HeaderSocial.jsx'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Shyamal Sardar</h1>
        <h5 className='text-light'>Frontend Developer | React Developer</h5>

        <CTA/>

        <HeaderSocial/>

        <div className="me">
          <img src="./assets/bg-2.jpg" alt="me" width="100vw"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header



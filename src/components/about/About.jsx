import React from 'react'
import './about.css'
import Cart from './Cart'
import { FaAward } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="./assets/bg-2.jpg" alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__carts">
            <Cart icon={<FaAward />} title={"Experience"} experience={"3+ Years Working"} />
            <Cart icon={<FaUser />} title={"Clients"} experience={"200+ WorldWide"} />
            <Cart icon={<VscFolderLibrary />} title={"Projects"} experience={"80+ Complete"} />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum numquam voluptates, nisi quisquam blanditiis rerum quas voluptate molestiae. Et voluptates iusto sit. Placeat molestiae, recusandae atque autem dolorem optio.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>


      </div>
    </section>
  )
}

export default About

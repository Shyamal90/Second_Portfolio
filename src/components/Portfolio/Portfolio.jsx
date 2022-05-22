import React from 'react'
import './portfolio.css'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>
       
       <div className="container portfolio__container">
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
         <PortfolioCard image={"./assets/portfolio1.jpg"}/>
       </div>
    </section>
  )
}

export default Portfolio

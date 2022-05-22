import React from 'react'

function PortfolioCard({ image }) {
    return (
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
                <a href="http://github.com" className='btn' target="_blank">Github</a>
                <a href="http://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
        </article>
    )
}

export default PortfolioCard

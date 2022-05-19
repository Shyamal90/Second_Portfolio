import React from 'react'

function Cart({icon,title,experience}) {
  return (
    <article className='about__cart'>
      {icon}
      <h5>{title}</h5>
      <small>{experience}</small>
    </article>
  )
}

export default Cart

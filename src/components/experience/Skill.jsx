import React from 'react'

function Skill({icon,skill}) {
  return (
    <article className='experienced__details'>
      {icon}
      <small>{skill}</small>
    </article>
  )
}

export default Skill

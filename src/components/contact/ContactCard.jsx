import React from 'react'

function ContactCard({icon,medium,data,link}) {
  return (
    <article className='contact__option'>
        {icon}
      <h4>{medium}</h4>
      <h5>{data}</h5>
      <a href={link} target="_blank">Send a message</a>
    </article>
  )
}

export default ContactCard

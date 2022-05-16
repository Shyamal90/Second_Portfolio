import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'


function HeaderSocial() {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://linkedin.com" target="_blank"><BsGithub/></a>
      <a href="https://linkedin.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderSocial 

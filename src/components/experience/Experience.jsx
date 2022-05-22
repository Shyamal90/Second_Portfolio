import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Skill from './Skill'
import './experience.css'

function Experience() {
  return (
    <section>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"HTML"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"CSS"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"JavaScript"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"React"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"Material UI"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"Bootstrap"} />
          </div>
        </div>


        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"Node.JS"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"Express"} />
             <Skill icon={<BsFillPatchCheckFill className='experience_details-icon'/>} skill={"MongoDB"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

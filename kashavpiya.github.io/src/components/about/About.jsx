import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me"/>
          </div>

       </div>
       
       <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>5+ in QuadCities</small>
          </article>

          <article className='about__card'>
            <MdOutlineFolderSpecial className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed</small>
          </article>
        </div>

        <p>
        I'm a senior studying Computer Science who has always loved creating solutions and challenging technological problems. I have experience in Software Development, Web Development, Data Analytics and Game Development along with some prior research experience in IoT. In addition to attending different hackathon, and project-based program,, I enjoy learning new languages and frameworks for side projects. I’m currently building most frequently with: Python, Java and C#. I am also familiar with R, SQL, JavaScript and others. Post-graduation in May 2023, I am hoping to have the opportunity to work within tech industry as that is what I'm passionate about.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

       </div>
       

      </div>

    </section>
  )
}

export default About
import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>KASHAV PIYA</a>

      <ul className = 'permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#project'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>


      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/kashavpiya/' target='_blank'><AiFillLinkedin/></a>
        <a href='https://github.com/kashavpiya/' target='_blank'><AiFillGithub/></a>
        <a href='https://www.instagram.com/kashav_piya/?hl=en' target='_blank'><AiFillInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kashav Piya. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
// import logoSubtitle from '../../assets/images/logo_sub_shaza.png'
import logoSubtitle from '../../assets/images/logo_sub_shaza.png'

import './index.scss'
import { faGithub, faLinkedin, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
export const Sidebar = () => {
  return (
    <div className='nav-bar'>

      <Link className='logo' to='/'>
        <img src={logoS} alt='logo' />
        <img className='sub-logo' src={logoSubtitle} alt='shaza' />

      </Link>

      <nav>
        <NavLink end activevlassname='active' to='/'  >
          <FontAwesomeIcon icon={faHome} color='4d4d4e' />
        </NavLink>

        <NavLink  activevlassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='4d4d4e' />
        </NavLink>

        <NavLink  activevlassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='4d4d4e' />
        </NavLink>
      </nav>

      {/* ul links to outside links like linkein and youtube */}

      <ul>
        <li>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/shazaali/'>
            <FontAwesomeIcon icon={faLinkedin} color='4d4d4e' />

          </a>
        </li>

        <li>
          <a target='_blank' rel='noreferrer' href='https://github.com/shazaaly'>
            <FontAwesomeIcon icon={faGithub} color='4d4d4e' />

          </a>
        </li>

        <li>

          <a href="https://api.whatsapp.com/send?phone=01062794773">
            <FontAwesomeIcon icon={faWhatsapp} color='4d4d4e' />
          </a>


        </li>
    
      </ul>
      
    </div>
  )
}

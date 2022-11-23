import React from 'react'
import { navbarLinks } from '../../data/navbarLinks'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <div>
        <ul className='items-center gap-14 hidden sm:flex'>
        {navbarLinks.map(navbarLink => 
          <li key={navbarLink.name}>
            <Link to={navbarLink.link}>{navbarLink.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavbarLinks
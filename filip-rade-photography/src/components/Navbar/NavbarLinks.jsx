import React from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../../data/navbarLinks'

const NavbarLinks = () => {
  return (
    <div>
        <ul className='items-center gap-14 hidden sm:flex'>
        {navbarLinks.map(navbarLink => 
          <li className='text-sm' key={navbarLink.name}>
            <Link to={navbarLink.link}>{navbarLink.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavbarLinks
import React from 'react'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../../data/navbarLinks'

const MobileMenu = () => {
  return (
    <div className='flex flex-col gap-4 sm:hidden items-center justify-around text-white bg-black '>
        <ul className='flex flex-col gap-4 justify-around items-center text-white bg-black'>
            {navbarLinks.map(navbarLink => 
                <li key={navbarLink.name}>
                    <Link to={navbarLink.link}>{navbarLink.name}</Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default MobileMenu
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Dropdown.css'
import { imageCategories } from '../../data/imageCategories'

const NavbarLinks = () => {
  return (
    <ul className='items-center gap-16 pr-4 hidden sm:flex font-robotoSlab text-xl text-white'>
      <li className='hover:text-[#414141] transition duration-200'>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <div className="dropdown">
          <button className='italic hover:text-[#414141] transition duration-200'>Projects</button>
          <div className="dropdown-content">
            {imageCategories.map(imageCategory =>
              <Link 
                className='block py-3 px-4 text-lg hover:text-[#414141]'
                key={imageCategory.id} 
                to={`/projects/${(imageCategory.name)}`}>
                {imageCategory.name}
              </Link>
            )}
          </div>
        </div>
      </li>
      <li className='hover:text-[#414141] transition duration-200'>
        <Link to={'/about'}>About</Link>
      </li>
      <li className='hover:text-[#414141] transition duration-200'>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
  )
}

export default NavbarLinks
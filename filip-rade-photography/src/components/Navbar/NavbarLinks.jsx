import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Dropdown.css'
import { imageCategories } from '../../data/imageCategories'

const NavbarLinks = () => {
  return (
    <div>
      <ul className='items-center gap-14 hidden sm:flex'>
        <li className='text-sm'>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <div className="dropdown">
            <button className="text-white text-sm">Projects</button>
            <div className="dropdown-content">
              {imageCategories.map(imageCategory =>
                <Link 
                  key={imageCategory.id} 
                  to={`/projects/${(imageCategory.name)}`}>
                  {imageCategory.name}
                </Link>
              )}
            </div>
          </div>
        </li>
        <li className='text-sm'>
          <Link to={'/about'}>About</Link>
        </li>
        <li className='text-sm'>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarLinks
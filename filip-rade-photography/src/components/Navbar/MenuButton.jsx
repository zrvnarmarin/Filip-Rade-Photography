import React, { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import XButton from './XButton'

const MenuButton = ({onClickMenuButton}) => {
  const [isNavbarLinksShown, setIsNavbarLinksShown] = useState(false)

  const toggleNavbarLinks = () => {
    setIsNavbarLinksShown(prev => !prev)
    onClickMenuButton(isNavbarLinksShown)
  }

  return (
    <button 
        onClick={toggleNavbarLinks} 
        className='flex flex-col sm:hidden gap-1 border-white bg-black hover:bg-white p-2 border-2 cursor-pointer hover:border-black'
    >
        { !isNavbarLinksShown && <HamburgerButton /> }
        { isNavbarLinksShown && <XButton /> }
    </button>
  )
}

export default MenuButton
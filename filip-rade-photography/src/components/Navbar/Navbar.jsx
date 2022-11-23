import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import MenuButton from './MenuButton'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false)

  const menuButtonHandler = () => setIsMenuButtonClicked(prev => !prev)

  return (
    <>
      <nav className='bg-black text-white font-roboto flex items-center justify-between p-4'>
        <NavbarLogo />
        <NavbarLinks />
        <MenuButton onClickMenuButton={menuButtonHandler} />
      </nav>
      { isMenuButtonClicked && <MobileMenu /> }
    </>
  )
}

export default Navbar
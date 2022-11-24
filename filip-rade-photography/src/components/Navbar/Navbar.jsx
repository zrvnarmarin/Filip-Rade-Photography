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
      <nav className='body-gradient text-white font-robotoSlab flex flex-col items-center gap-12 p-4'>
        <NavbarLogo />
        <NavbarLinks />
        <MenuButton onClickMenuButton={menuButtonHandler} />
      </nav>
      { isMenuButtonClicked && <MobileMenu /> }
    </>
  )
}

export default Navbar
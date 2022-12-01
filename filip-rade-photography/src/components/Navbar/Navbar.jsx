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
      <nav className='bg-black sticky top-0 z-40 text-white font-robotoSlab font-normal italic flex sm:flex-wrap items-center justify-between gap-12 p-4'>
        <NavbarLogo />
        <NavbarLinks />
        <MenuButton onClickMenuButton={menuButtonHandler} />
      </nav>
      { isMenuButtonClicked && <MobileMenu /> }
    </>
  )
}

export default Navbar
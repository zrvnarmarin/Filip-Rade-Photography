import React from 'react'
import '../../styles/NavbarLogo.css'
import BrandLogo from '../../assets/Images/Author/edited.svg'

const NavbarLogo = () => {
  return (
    <a href='/' className='flex flex-row items-center justify-between gap-8 tracking-[5px] px-2 linear-wipe uppercase list-none font-bold text-xl italic text-[#dddddd]'>
      <img className='w-[45px] h-[45px] hover:bg-[#0a0a0a] transition duration-200' src={BrandLogo} />
      <p className=''>Filip Rade</p>
    </a>
  )
}

export default NavbarLogo
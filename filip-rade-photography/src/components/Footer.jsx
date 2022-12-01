import React from 'react'
import AuthorSection from './Footer/AuthorSection'
import DeveloperSection from './Footer/DeveloperSection'

const Footer = () => {
  return (
    <div className='bg-[#1f1f21] grid grid-cols-1 sm:grid-cols-2 items-center pt-24 pb-8'>
        <AuthorSection />
        <DeveloperSection />
    </div>
  )
}

export default Footer
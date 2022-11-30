import React from 'react'
import SpinningCube from './Contact/SpinningCube'
import ContactLinks from './Contact/ContactLinks'
import ContactForm from './Contact/ContactForm'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='font-robotoSlab bg-[#1f1f21]'>
      <h1 className='text-center text-white font-light text-6xl pt-8 pb-14'>Contact</h1>
      <div className='grid grod-cols-1 md:grid-cols-2 xs:px-4 sm:px-12 gap-6'>
        <SpinningCube />
        <div className='pt-32 md:pt-0'>
          <h2 className='p-2 flex flex-wrap text-3xl text-white font-medium linear-wipe'>
            Will you make your memories count?
          </h2>
          <h2 className='p-2 flex flex-wrap text-white text-lg font-normal italic'>
            For all enquires and bookings, please contact me using one of the
            following, or the form below..
          </h2>
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
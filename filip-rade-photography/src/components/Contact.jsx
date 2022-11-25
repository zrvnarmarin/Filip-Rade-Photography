import React from 'react'
import ContactImage from '../assets/contactMe.png'
import { contactInfo } from '../data/contacts'

const Contact = () => {
  return (
    <div className='font-robotoSlab bg-[#1f1f21]'>
      <h1 className='text-center text-white font-light text-6xl pt-8 pb-14'>Contact</h1>

      <div className='grid grod-cols-1 sm:grid-cols-2 xs:px-4 sm:px-12 gap-6'>
        <img className='place-self-center' src={ContactImage} />
        
        <div>
          <h2 className='p-2 flex flex-wrap text-3xl text-white font-medium linear-wipe'>Will you make your memories count?</h2>
          <h2 className='p-2 flex flex-wrap text-white text-lg font-normal italic'>For all enquires and bookings, please contact me using one of the
            following, or the form below..
          </h2>
          <div className='pt-4 pb-4'>
            <div className='px-2 py-1'>
              <span className='text-white text-lg font-medium'>Email: </span>
              <a className='text-slate-300 hover:text-slate-900 hover text-base' href=''>{contactInfo.email}</a>
            </div>
            <div className='px-2 py-1'>
              <span className='text-white text-lg font-medium'>Facebook: </span>
              <a className='text-slate-300 hover:text-slate-900 text-base' href={contactInfo.facebook}>{contactInfo.facebook}</a>
            </div>
            <div className='px-2 py-1'>
              <span className='text-white text-lg font-medium'>Instagram: </span>
              <a className='text-slate-300 hover:text-slate-900 text-base' href={contactInfo.instagram}>{contactInfo.instagram}</a>
            </div>
            <div className='px-2 py-1'>
              <span className='text-white text-lg font-medium'>Phone: </span>
              <a className='text-slate-300 hover:text-slate-900 text-base' href=''>{contactInfo.phone}</a>
            </div>
          </div>

          <form className='pt-2 border-black'>

            <div className='pb-4'>
              <label className='px-2 py-1 text-white' htmlFor="nameInput">Name*</label> <br />
              <div className='flex flex-wrap sm:flex-row gap-4 px-2 py-1'>
                <div className='flex flex-col flex-1'>
                  <input className='p-3 flex flex-1 focus:outline-none' type="text" />
                  <span className='text-sm text-slate-100 pt-1'>First name</span>
                </div>
                <div className='flex flex-col flex-1'>
                  <input className='p-3 flex flex-1 focus:outline-none'  type="text" />
                  <span className='text-sm text-slate-100 pt-1'>Last name</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1 pb-4'>
              <label className='px-2 py-1 text-white' htmlFor="emailInput">Email*</label> 
              <input className='flex flex-1 mx-2 p-3 focus:outline-none' type="text" />
            </div>

            <div className='flex flex-col gap-1'>
              <label className='px-2 py-1 text-white' htmlFor="emailInput">Message*</label> 
              <textarea className='flex flex-1 mx-2 p-3 resize-y focus:outline-none' name="message" id="messageInput" cols="30" rows="10"></textarea>
            </div>

            <div className='px-2 py-7'>
              <button className='px-12 py-6 bg-[#494949] text-white'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
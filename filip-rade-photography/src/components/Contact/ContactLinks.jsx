import React from 'react'
import { contactInfo } from '../../data/contacts'

const ContactLinks = () => {
  return (
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
            <span className='text-white text-lg font-medium'>Vero: </span>
            <a className='text-slate-300 hover:text-slate-900 text-base' href={contactInfo.vero}>{contactInfo.vero}</a>
        </div>
        <div className='px-2 py-1'>
            <span className='text-white text-lg font-medium'>Instagram: </span>
            <a className='text-slate-300 hover:text-slate-900 text-base' href={contactInfo.instagram}>{contactInfo.instagram}</a>
        </div>
        <div className='px-2 py-1'>
            <span className='text-white text-lg font-medium'>LinkedIn: </span>
            <a className='text-slate-300 hover:text-slate-900 text-base' href={contactInfo.linkedin}>{contactInfo.linkedin}</a>
        </div>
        <div className='px-2 py-1'>
            <span className='text-white text-lg font-medium'>Phone: </span>
            <a className='text-slate-300 hover:text-slate-900 text-base' href=''>{contactInfo.phone}</a>
        </div>
    </div>
  )
}

export default ContactLinks
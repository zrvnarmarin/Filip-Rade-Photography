import React from 'react'
import { socialMediaIcons } from '../data/fotterSocialMediaIcons'
import { contactInfo } from '../data/contacts'

const Footer = () => {
  return (
    <div className='bg-[#1f1f21] grid grid-cols-1 sm:grid-cols-2 items-center pt-24'>
        <div className='flex flex-col gap-6 pl-8'>
            <ul className='flex flex-row gap-8'>
                <li>
                    <a href={contactInfo.linkedin}><img className='w-[30px] h-[30px] hover:p-[2px] hover:border-black hover:rounded-full hover:border-[2px] hover:border-solid rounded-ful' src={socialMediaIcons.linkedin} alt="" /></a>
                </li>
                <li>
                    <a href={contactInfo.facebook}><img className='w-[30px] h-[30px] hover:p-[2px] hover:border-black hover:rounded-full hover:border-[2px] hover:border-solid rounded-ful' src={socialMediaIcons.facebook} alt="" /></a>
                </li>
                <li>
                    <a href={contactInfo.instagram}><img className='w-[30px] h-[30px] hover:p-[2px] hover:border-black hover:rounded-full hover:border-[2px] hover:border-solid rounded-ful' src={socialMediaIcons.instagram} alt="" /></a>
                </li>
                <li>
                    <a href={contactInfo.vero}><img className='w-[30px] h-[30px] hover:p-[2px] hover:border-black hover:rounded-full hover:border-[2px] hover:border-solid rounded-ful' src={socialMediaIcons.vero} /></a>
                </li>
            </ul>
            <div>
                <p className='text-white text-xs font-thin'>© Filip Rade 2022. All Rights Reserved</p>
            </div>
        </div>

        <div className='text-white text-xs font-thin pt-1 sm:justify-self-end pl-8 sm:pr-8'>
            <a href="https://github.com/zrvnarmarin" className='hover:text-slate-400 transition duration-100'>Made By ZrvnarDev</a>
        </div>
    </div>
  )
}

export default Footer
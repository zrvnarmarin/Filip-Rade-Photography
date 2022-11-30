import React from 'react'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm
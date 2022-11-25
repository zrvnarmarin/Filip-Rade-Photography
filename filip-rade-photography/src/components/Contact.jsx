import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className='grid grod-cols-1 sm:grid-cols-2 px-12'>
        <img className='place-self-center' src='https://www.pngkit.com/png/full/235-2355157_there-was-a-problem-submitting-your-form-contact.png' />
        
        <div className=''>
          <h2 className='bg-slate-400 p-2 flex flex-wrap'>For all enquires and bookings, please contact me using one of the
            following, or the form below..
          </h2>
          <div className='bg-slate-500'>
            <div className='px-2 py-1'>
              <span>Email: </span>
              <a href=''>76marin76@gmail.com</a>
            </div>
            <div className='px-2 py-1'>
              <span>Facebook: </span>
              <a href=''>facebook.com</a>
            </div>
            <div className='px-2 py-1'>
              <span>Instagram: </span>
              <a href=''>instagram.com</a>
            </div>
            <div className='px-2 py-1'>
              <span>Phone: </span>
              <a href=''>76marin76@gmail.com</a>
            </div>
          </div>

          <form className='border-2 border-black bg-slate-200'>

            <div className='bg-slate-400'>
              <label className='px-2 py-1' htmlFor="nameInput">Name*</label> <br />
              <div className='flex flex-wrap sm:flex-row gap-2 px-2 py-1'>
                <div className='flex flex-col flex-1'>
                  <input className='flex flex-1'  type="text" />
                  <label>First name</label>
                </div>
                <div className='flex flex-col flex-1'>
                  <input className='flex flex-1'  type="text" />
                  <label>Last name</label>
                </div>
              </div>
            </div>

            <div className='bg-slate-500 flex flex-col'>
              <label className='px-2 py-1' htmlFor="emailInput">Email*</label> <br />
              <input className='flex flex-1 mx-2' type="text" />
            </div>

            <div className='bg-slate-600 flex flex-col'>
              <label className='px-2 py-1' htmlFor="emailInput">Message*</label> <br />
              <textarea className='flex flex-1 mx-2' name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div className='bg-slate-700 px-2 py-7'>
              <button className='px-12 py-6 bg-slate-900 text-white'>Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
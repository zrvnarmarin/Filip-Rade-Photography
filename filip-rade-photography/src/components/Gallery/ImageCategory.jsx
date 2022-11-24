import React from 'react'

const ImageCategory = ({category}) => {
  return (
    <a href="/" className='cursor-pointer hover:opacity-50'>
        <div className='relative bg-slate-300'>
            <img src="../src/assets/gallery5.jpg" className='w-[100%]' />
            <div className='absolute bottom-0 right-0 bg-black bg-opacity-75 left-0 flex justify-center p-4'>
            <h3 className='uppercase text-white'>{category}</h3>
            </div>
        </div>
    </a>
  )
}

export default ImageCategory
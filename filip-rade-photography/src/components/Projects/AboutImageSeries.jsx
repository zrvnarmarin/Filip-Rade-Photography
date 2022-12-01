import React from 'react'

const AboutImageSeries = ({imageCategory, imageCategoryDescription}) => {
  return (
    <div className='bg-[#1f1f21] flex flex-col items-center justify-center'>
        <h1 className='text-center text-white font-light text-6xl pt-8 pb-4 italic'>{imageCategory}</h1>
        <p className='text-white text-lg font-normal italic tracking-wider pt-4 text-center w-full sm:w-3/4'>
            {imageCategoryDescription}
        </p>
    </div>
  )
}

export default AboutImageSeries
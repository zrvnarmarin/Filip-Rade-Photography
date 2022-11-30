import React from 'react'

const Image = ({currentImageSource}) => {
  return (
    <div className="flex shadow-3xl max-w-[90%] overflow-hidden">
        <img className='max-w-full h-auto aspect-auto object-contain' src={currentImageSource} />
    </div>
  )
}

export default Image
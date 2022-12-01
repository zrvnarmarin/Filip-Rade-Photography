import React from 'react'

const Image = ({currentImageSource}) => {
  return (
    <div className="flex shadow-3xl max-w-[80%] overflow-hidden">
        <img className='min-w-[1400px] min-h-max h-auto aspect-auto object-contain' src={currentImageSource} />
    </div>
  )
}

export default Image
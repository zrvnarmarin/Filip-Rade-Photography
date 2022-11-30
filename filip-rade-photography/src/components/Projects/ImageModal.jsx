import React from 'react'
import Image from './Image.jsx'
import '../../styles/Home.css'

const ImageModal = ({modalRef, currentImageId, numberOfImages, onCloseModal, currentImageSource, onSetPreviousImageObject, onSetNextImageObject  }) => {
  return (
    <div className="modal" ref={modalRef}>
      <div className='h-[90%] flex items-center justify-center'>
  
        <div>
          <span className='slide-number'>{currentImageId}/{numberOfImages}</span>
          <span className="close cursor" onClick={onCloseModal} >&times;</span>
        </div>
  
        <Image currentImageSource={currentImageSource} />
  
        <div>
          <a className="prev" onClick={onSetPreviousImageObject} >&#10094;</a>
          <a className="next" onClick={onSetNextImageObject}  >&#10095;</a>
        </div>

      </div>
    </div>
  )
}

export default ImageModal
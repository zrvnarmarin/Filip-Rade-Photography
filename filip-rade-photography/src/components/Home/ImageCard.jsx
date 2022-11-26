import React from 'react'
import '../../styles/ImageCard.css'

const ImageCard = ({name, source, onOpenModal}) => {
  return (
    <div className="container">
        <img src={source} className="image" onClick={onOpenModal} />
        <div className="middle">
          <div className="text-white ">+</div>
        </div>
        <div className="middle-two">
          <div className="text-white">{name}</div>
        </div>
    </div>
  )
}

export default ImageCard
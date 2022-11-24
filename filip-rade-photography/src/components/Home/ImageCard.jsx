import React from 'react'
import '../../styles/ImageCard.css'
import TestImage from '../../assets/nature.jpg'

const ImageCard = () => {
  return (
    <div className="container">
        <img src={TestImage} className="image" />
        <div className="middle">
          <div className="text-white ">+</div>
        </div>
        <div className="middle-two">
          <div className="text-white">Bok svima, ja sam opis slike</div>
        </div>
    </div>
  )
}

export default ImageCard
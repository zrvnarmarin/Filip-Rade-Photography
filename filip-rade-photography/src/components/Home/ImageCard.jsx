import React from 'react'
import '../../styles/ImageCard.css'

const ImageCard = ({id, name, source, description, onOpenModal, onSetImageObject}) => {

  const openModalAndSetImageObject = () => {
    onOpenModal()

    const imageObjectData = {
      name: name,
      id: id,
      source: source,
      description: description
    }

    onSetImageObject(imageObjectData)
  }
  return (
    <div className="container">
        <img 
          src={source} 
          className="image" 
          onClick={openModalAndSetImageObject} 
        />
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
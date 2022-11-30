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
      <div className="cross">
        <div className=" text-white text-4xl font-thin italic ">+</div>
      </div>
      <div className="text-container">
        <div className="font-robotoSlab text-white text-lg font-normal italic">{name}</div>
      </div>
    </div>
  )
}

export default ImageCard
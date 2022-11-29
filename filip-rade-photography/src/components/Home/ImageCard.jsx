import React from 'react'
import '../../styles/ImageCard.css'

const ImageCard = ({id, name, source, onOpenModal, onShowImageObject}) => {

  const openModalAndInfo = (e) => {
    onOpenModal()

    const imageObjectData = {
      name: name,
      id: id,
      source: source
    }

    onShowImageObject(imageObjectData)
  }
  return (
    <div className="container">
        <img src={source} className="image" onClick={openModalAndInfo} />
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
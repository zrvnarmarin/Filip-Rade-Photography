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
    <div className='container'>
      <div className="w-full p-1">
        <img className="block object-cover object-center sm:h-[400px] image"
          src={source} onClick={openModalAndSetImageObject}  />
           <div className="cross">
             <div className=" text-white text-4xl font-thin italic ">+</div>
           </div>
           <div className="text-container">
             <div className="font-robotoSlab text-white text-lg font-normal italic">{name}</div>
           </div>
      </div>
    </div>
  )
}

export default ImageCard
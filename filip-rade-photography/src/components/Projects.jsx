import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageCardsGrid from './Home/ImageCardsGrid'
import ImageCard from './Home/ImageCard'
import { imageCategories } from '../data/imageCategories'
import '../styles/Home.css'
import TestImage from '../assets/nature.jpg'

const Projects = () => {
  const [imageObject, setImageObject] = useState({})
  const { imageCategory } = useParams()
  const modalRef = useRef()

  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"

  const sum = imageCategories.map(category => { if (category.name === imageCategory) return category.images.length })

  const displayImageObject = (imageObject) => {
    console.log(imageObject)
    setImageObject(imageObject)
  }

  return (
    <>
      <ImageCardsGrid>
        {imageCategories.map(category => {
          if (category.name === imageCategory) {
            return category.images.map(image => 
              <ImageCard 
                key={image.id} 
                id={image.id} 
                name={image.name} 
                source={image.source} 
                onOpenModal={openModalHandler}
                onShowImageObject={displayImageObject}
              />
            )}
          }
        )}
        
        <div className="modal" ref={modalRef}>
          <span className='slide-number'>{imageObject.id}/{sum}</span>
          <span className="close cursor" onClick={closeModalHandler} >&times;</span>
          <div className="modal-content">
            <div>
              <p>{imageObject.id}</p>
              <p>{imageObject.id}</p>
              <img src={imageObject.source} />
            </div>
            
            <a className="prev" >&#10094;</a>
            <a className="next" >&#10095;</a>
          </div>
        </div>

      </ImageCardsGrid>

    </>
    )
}

export default Projects
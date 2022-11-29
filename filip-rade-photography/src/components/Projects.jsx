import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageCardsGrid from './Home/ImageCardsGrid'
import ImageCard from './Home/ImageCard'
import { imageCategories } from '../data/imageCategories'
import '../styles/Home.css'

const Projects = () => {
  const [currentImageObject, setCurrentImageObject] = useState({})
  const { imageCategory } = useParams()
  const modalRef = useRef()

  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"

  const sum = imageCategories.map(category => {
    if (category.name === imageCategory) 
      return category.images.length 
  })

  const setImageObject = imageObject => setImageObject(imageObject) 

  const setNextImageObject = () => {
    imageCategories.map(category => {
      if (category.name === imageCategory) {
        const nextImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id + 1)
        setCurrentImageObject(nextImageObject)
        console.log(nextImageObject)
      }
    })
  }

  const setPreviousImageObject = () => {
    imageCategories.map(category => {
      if (category.name === imageCategory) {
        const nextImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id - 1)
        setCurrentImageObject(nextImageObject)
        console.log(nextImageObject)
      }
    })
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
                description={image.description}
                onOpenModal={openModalHandler}
                onSetImageObject={setCurrentImageObject}
              />
            )}
          }
        )}
        
        <div className="modal" ref={modalRef}>
          <span className='slide-number'>{currentImageObject.id}/{sum}</span>
          <span className="close cursor" onClick={closeModalHandler} >&times;</span>
          <div className="modal-content">
            <div>
              <img src={currentImageObject.source} />
            </div>
            
            <a className="prev" onClick={setPreviousImageObject} >&#10094;</a>
            <a className="next" onClick={setNextImageObject}  >&#10095;</a>
          </div>
        </div>

      </ImageCardsGrid>

    </>
    )
}

export default Projects
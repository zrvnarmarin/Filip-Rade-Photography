import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageCardsGrid from './Projects/ImageCardsGrid'
import ImageCard from './Projects/ImageCard'
import { imageCategories } from '../data/imageCategories'
import '../styles/Home.css'
import ImageModal from './Projects/ImageModal'

const Projects = () => {
  const [currentImageObject, setCurrentImageObject] = useState({})
  const { imageCategory } = useParams()
  const modalRef = useRef()

  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"

  const numberOfImages = imageCategories.map(category => {
    if (category.name === imageCategory) 
      return category.images.length 
  })

  const setNextImageObject = () => {
    imageCategories.map(category => {
      if (category.name === imageCategory) {
        const nextImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id + 1)
        setCurrentImageObject(nextImageObject)

        if (nextImageObject === undefined) 
          setCurrentImageObject(category.images[0])
      }
    })
  }

  const setPreviousImageObject = () => {
    imageCategories.map(category => {
      if (category.name === imageCategory) {
        const previousImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id - 1)
        setCurrentImageObject(previousImageObject)
        
        if (previousImageObject === undefined) 
          setCurrentImageObject(category.images[category.images.length - 1])
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

        <ImageModal
          modalRef={modalRef} 
          numberOfImages={numberOfImages}  
          currentImageId={currentImageObject.id}
          currentImageSource={currentImageObject.source}
          onCloseModal={closeModalHandler}
          onSetPreviousImageObject={setPreviousImageObject}
          onSetNextImageObject={setNextImageObject}
        />

      </ImageCardsGrid>

    </>
    )
}

export default Projects
import React, {useState, useRef } from 'react'
import ImageCardsGrid from './Projects/ImageCardsGrid'
import ImageCard from './Projects/ImageCard.jsx'
import ImageModal from './Projects/ImageModal'
import { mainSeriesCategory } from '../data/imageCategories'

const Home = () => {
  const [currentImageObject, setCurrentImageObject] = useState({})
  const modalRef = useRef()

  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"

  const numberOfImages = mainSeriesCategory.map(category => category.images.length)

  const setNextImageObject = () => {
    mainSeriesCategory.map(category => {
      const nextImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id + 1)
      setCurrentImageObject(nextImageObject)

      if (nextImageObject === undefined) 
        setCurrentImageObject(category.images[0])
    })
  }

  const setPreviousImageObject = () => {
    mainSeriesCategory.map(category => {
      const previousImageObject = category.images.find(categoryImageObject => categoryImageObject.id === currentImageObject.id - 1)
      setCurrentImageObject(previousImageObject)
      
      if (previousImageObject === undefined) 
        setCurrentImageObject(category.images[category.images.length - 1])
    })
  }
  
  return (
    <ImageCardsGrid>
      {mainSeriesCategory.map(category => {
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
  )
}

export default Home
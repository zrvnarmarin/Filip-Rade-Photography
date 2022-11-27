import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'
import ImageCardsGrid from './Home/ImageCardsGrid'
import ImageCard from './Home/ImageCard'
import { imageCategories } from '../data/imageCategories'
import '../styles/Home.css'
import TestImage from '../assets/nature.jpg'

const Projects = () => {
  const { imageCategory } = useParams()
  const modalRef = useRef()
  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"
  const sum = imageCategories.map(category => { if (category.name === imageCategory) return category.images.length })
  const showImageId = (id) => {
    imageCategories.map(category => {
      category.images.find(image => image.id === id)
    })
  }
   
  

  return (
    <>
      <ImageCardsGrid>
        {imageCategories.map(category => {
          // console.log(category.name === imageCategory ? 'true' : 'false')
          if (category.name === imageCategory) {
            return category.images.map(image => 
              <ImageCard key={image.id} name={image.name} source={image.source} onOpenModal={openModalHandler} />
            )}
          }
        )}
        
        <div className="modal" ref={modalRef}>
          <span className='slide-number'>8/{sum}</span>
          <span className="close cursor" onClick={closeModalHandler} >&times;</span>
          <div className="modal-content">

            {imageCategories.map(category => {
              if (category.name === imageCategory) {
                return category.images.map(image => 
                  category.images.find(image => image.id === id)
                  // <img key={image.id} src={image.source} onClick={showImageId} />
                )}
            })}
            {/* <img src={TestImage} onClick={showImageId} /> */}
            
            <a className="prev" >&#10094;</a>
            <a className="next" >&#10095;</a>
          </div>
        </div>

      </ImageCardsGrid>

    </>
    )
}

export default Projects
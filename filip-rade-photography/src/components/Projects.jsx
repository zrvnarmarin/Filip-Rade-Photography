import React, {useRef} from 'react'
import { useParams } from 'react-router-dom'
import ImageCardsGrid from './Home/ImageCardsGrid'
import ImageCard from './Home/ImageCard'
import { imageCategories } from '../data/imageCategories'
// import TestImage from '../assets/nature.jpg'

const Projects = () => {
  const { imageCategory } = useParams()
  const modalRef = useRef()
  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"
  
  return (
    <>
      {/* <p>{imageCategory}</p> */}
      <ImageCardsGrid>
        {imageCategories.map(category => {
          // console.log(category.name === imageCategory ? 'true' : 'false')
          if (category.name === imageCategory) {
            return category.images.map(image => 
              <ImageCard key={image.id} name={image.name} source={image.source} onOpenModal={openModalHandler} />
            )}
          }
        )}
        
      </ImageCardsGrid>

      {/* <div className="modal" ref={modalRef}>
        <span className='slide-number'>8/18</span>
        <span className="close cursor" onClick={closeModalHandler} >&times;</span>
        <div className="modal-content">

          <img src={TestImage} />
          
          <a className="prev" >&#10094;</a>
          <a className="next" >&#10095;</a>
        </div>
      </div> */}

    </>
    )
}

export default Projects
import React from 'react'
import ImageCard from './Home/ImageCard'
import ImageCardsGrid from './Home/ImageCardsGrid'
import { imageCategories } from '../data/imageCategories'
import TestImage from '../assets/nature.jpg'
import '../styles/Home.css'
import { useRef } from 'react'

const Home = () => {
  const modalRef = useRef()
  const openModalHandler = () => modalRef.current.style.display = "block"
  const closeModalHandler = () => modalRef.current.style.display = "none"
  
  return (
    <>
      <ImageCardsGrid>
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
        <ImageCard onOpenModal={openModalHandler} />
      </ImageCardsGrid>

      <div className="modal" ref={modalRef}>
        <span className='slide-number'>8/18</span>
        <span className="close cursor" onClick={closeModalHandler} >&times;</span>
        <div className="modal-content">

          <img src={TestImage} />
          
          <a className="prev" >&#10094;</a>
          <a className="next" >&#10095;</a>
        </div>
      </div>

    </>
  )
}

export default Home
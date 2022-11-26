import React from 'react'
import ImageCard from './Home/ImageCard'
import ImageCardsGrid from './Home/ImageCardsGrid'

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



      <div className="row">
        <div className="column"> 
          <img src={TestImage} className="hover-shadow cursor" />
        </div>
        <div className="column">
          <img src={TestImage} className="hover-shadow cursor" />
        </div>
        <div className="column">
          <img src={TestImage}  className="hover-shadow cursor" />
        </div>
        <div className="column">
          <img src={TestImage}  className="hover-shadow cursor" />
        </div>
      </div>


      <div id="myModal" className="modal" ref={modalRef}>
        <span className="close cursor" onClick={closeModalHandler} >&times;</span>
        <div className="modal-content">

          <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src={TestImage} />
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src={TestImage} />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src={TestImage} />
          </div>
          
          <div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src={TestImage} />
          </div>
          
          <a className="prev" >&#10094;</a>
          <a className="next" >&#10095;</a>

        </div>
      </div>

    </>
  )
}

export default Home
import React from 'react'
import ImageCard from './Home/ImageCard'
import ImageCardsGrid from './Home/ImageCardsGrid'
import DropdownMenu from './Navbar/DropdownMenu'

const Home = () => {
  return (
    <ImageCardsGrid>
      <ImageCard />
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <DropdownMenu />
    </ImageCardsGrid>
  )
}

export default Home
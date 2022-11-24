import React from 'react'
import ImageCard from './Home/ImageCard'

const Home = () => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      <ImageCard />
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
      <ImageCard />      
    </section>
  )
}

export default Home
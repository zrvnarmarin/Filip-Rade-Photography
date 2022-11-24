import React from 'react'
import AuthorImage from '../assets/me.jpg'

const About = () => {
  return (
    <div className='bg-center bg-no-repeat bg-cover h-screen' style={{backgroundImage: `url(${AuthorImage})`}}>
      <div className='h-[2500px]'></div>
      
    </div>
  )
}

export default About
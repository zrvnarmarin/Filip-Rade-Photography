import React from 'react'
import AuthorImage from '../assets/me.jpg'
// import '../styles/About.css'

const About = () => {
  return (
    <section className='font-robotoSlab bg-[#1f1f21] flex flex-col gap-24 px-2'>

      <h1 className='text-center text-white font-light text-6xl pt-8 pb-14'>About</h1>

      <div className='grid grod-cols-1 sm:grid-cols-2 xs:px-4 sm:px-12 gap-6'>
        <img className='' src={AuthorImage} />
        <div>
          <h2 className='p-2 flex flex-wrap text-3xl text-white font-medium linear-wipe'>Artist statement</h2>
          <p className='text-white text-lg font-light pt-4'>
            I am a conceptual artist, who uses the photographic medium to tell complex, yet ambiguous and unconventional stories about the human condition that have an intense emotional impact on those who experience my imagery. <br /> <br />  
            I utilize a minimalistic approach in the setup of my images, which usually involves a maximum of two models, a single prop, and a non-distracting background. My tonal aesthetics incorporate a dark, muted and cinematic quality. <br /> <br />  
            The faces of the subjects in my images are frequently obscured, which alongside all of the other elements of my images gives my work a unique and somber feel that often disturbs but captures the attention of the viewer. <br /> <br />  
            Connecting with my audience on a deep level and taking them on a journey through their own emotions and experiences is my main aim with my artwork. <br /> <br />  
            Nowadays, even though we are more connected than ever, we often feel alone in our struggles and as if there is no one who understands us. <br /> <br />  
          </p>
        </div>
      </div>

      <div className='grid grod-cols-1 sm:grid-cols-2 xs:px-4 sm:px-12 gap-6'>
        <img src={AuthorImage} />
        <div>
          <h2 className='p-2 flex flex-wrap text-3xl text-white font-medium linear-wipe'>Biography</h2>
          <p className='text-white text-lg font-light pt-4'>
            I am a conceptual artist, who uses the photographic medium to tell complex, yet ambiguous and unconventional stories about the human condition that have an intense emotional impact on those who experience my imagery. <br /> <br />  
            I utilize a minimalistic approach in the setup of my images, which usually involves a maximum of two models, a single prop, and a non-distracting background. My tonal aesthetics incorporate a dark, muted and cinematic quality. <br /> <br />  
            The faces of the subjects in my images are frequently obscured, which alongside all of the other elements of my images gives my work a unique and somber feel that often disturbs but captures the attention of the viewer. <br /> <br />  
            
          </p>
        </div>
      </div>

    </section>
  )
}

export default About
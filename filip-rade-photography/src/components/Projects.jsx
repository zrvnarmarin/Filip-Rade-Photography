import React from 'react'
import { imageCategories } from '../data/imageCategories'
import ImageCategory from './Projects/ImageCategory'

const Projects = () => {
  return (
    <section className='body-gradient'>
      <div className='px-4 py-2 ss:px-6 ss:py-4 sm:px-12 sm:py-6 md:px-16 md:py-10 lg:px-20 lg:py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {imageCategories.map(imageCategory => 
            <ImageCategory key={imageCategory.id} category={imageCategory.name} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
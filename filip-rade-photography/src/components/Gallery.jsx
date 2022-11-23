import React from 'react'
import { imageCategories } from '../data/categories'
import ImageCategory from './Gallery/ImageCategory'

const Gallery = () => {
  return (
    <section className='mt-10 bg-red-200'>
      <div className=' bg-blue-200 p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          {imageCategories.map(imageCategory => 
            <ImageCategory key={imageCategory.id} category={imageCategory.name} />
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery
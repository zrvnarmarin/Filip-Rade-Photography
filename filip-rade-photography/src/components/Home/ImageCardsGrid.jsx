import React from 'react'

const ImageCardsGrid = (props) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {props.children}
    </section>
  )
}

export default ImageCardsGrid
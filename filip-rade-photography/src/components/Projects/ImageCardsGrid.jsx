import React from 'react'

const ImageCardsGrid = (props) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 pt-16 gap-2 bg-[#1f1f21]'>
      {props.children}
    </section>
  )
}

export default ImageCardsGrid
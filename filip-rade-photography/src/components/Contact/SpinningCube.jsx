import React from 'react'
import { socialMediaImages } from '../../data/socialMediaImages'

const SpinningCube = () => {
  return (
    <div className="wrapper grid place-content-center pt-24 md:pt-0">
        <div className="box-area">
        <div className="box box-front">
            <div className="test-container">
            <a href="https://www.linkedin.com"><img className="test-image" src={socialMediaImages.linkedin} /></a>
            </div>
        </div>
        <div className="box box-right">
            <div className="test-container">
            <a href="https://www.facebook.com"><img className="test-image" src={socialMediaImages.facebook} /></a>
            </div>
        </div>
        <div className="box box-back">
            <div className="test-container">
            <a href="https://www.instagram.com"><img className="test-image" src={socialMediaImages.instagram} /></a>
            </div>
        </div>
        <div className="box box-left">
            <div className="test-container">
            <a href="https://www.vero.com"><img className="vero-image" src={socialMediaImages.vero} /></a>
            </div>
        </div>
        <div className="box box-top"></div>
        <div className="box box-bottom"></div>
        </div>
    </div>
  )
}

export default SpinningCube
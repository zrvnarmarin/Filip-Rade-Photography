import React from 'react'
import VeroImage from '../../assets/Social Media Icons/vero.webp'

const SpinningCube = () => {
  return (
    <div className="wrapper grid place-content-center pt-24 md:pt-0">
        <div className="box-area">
        <div className="box box-front">
            <div className="test-container">
            <a href="https://www.linkedin.com"><img className="test-image" src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_linkedin-smi.svg" /></a>
            </div>
        </div>
        <div className="box box-right">
            <div className="test-container">
            <a href="https://www.facebook.com"><img className="test-image" src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_facebook-smi.svg" /></a>
            </div>
        </div>
        <div className="box box-back">
            <div className="test-container">
            <a href="https://www.instagram.com"><img className="test-image" src="https://www.qualitylogoproducts.com/images/_promo-university/social-media/_icon_instagram-smi.svg" /></a>
            </div>
        </div>
        <div className="box box-left">
            <div className="test-container">
            <a href="https://www.vero.com"><img className="vero-image" src={VeroImage} /></a>
            </div>
        </div>
        <div className="box box-top"></div>
        <div className="box box-bottom"></div>
        </div>
    </div>
  )
}

export default SpinningCube
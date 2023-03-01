import React, { useState } from 'react'
import "./mainThree.css"

function MainThree({main3Slider}) {
  const [image0, setImage0] = useState(0)
  const [image1, setImage1] = useState(1)
  return (
    <div>
      <div className="main_Three">
        <div className="slider">
            <div className="Slider_container">
                <div className="slider_wrapper">
                {main3Slider.map((slider, index) => {
                  return(
                    <div key={index} className={index === image0 ? "slider_card slider_card-active" : "slider_card"}>
                      <img src={slider.image} alt="images" className="sliderImage" />
                    </div>
                  )
                })}
                </div>
            </div>
            <div className="Slider_container">
                <div className="slider_wrapper">
                {main3Slider.map((slider, index) => {
                  return(
                    <div key={index} className={index === image1 ? "slider_card slider_card-active" : "slider_card"}>
                      <img src={slider.image} alt="images" className="sliderImage" />
                    </div>
                  )
                })}
                </div>
            </div>
        </div>
        <div className="main_Three-sec2">
          <h3>Our projects</h3>
            <p>We pride ourselves in offering a wide selection of our 
            design products. We have many completed project of 
            different styles and we work every days to transform 
            simple rooms onto dream homes. We always appreciate 
            working with you.
            </p>
          <div className="btn_container">l&amp;r</div>
        </div>
      </div>
    </div>
  )
}

export default MainThree
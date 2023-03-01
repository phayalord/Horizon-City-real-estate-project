import React, { useEffect, useState } from 'react'
import './imageSlider.css'

function ImageSlider({images}) {
    const [current, setcurrent] =useState(0)

    const slideRight = () => {
        setcurrent(current === images.length - 1 ? 0 : current + 1)
    }

    // const slideLeft = () => {
    //     setcurrent(current === images.length - 1 ? 0 : current + 1)
    // }

    useEffect(()=>{
        setTimeout(()=>{
            slideRight()
        },2500)
    })
  return (
    <div className="carousel">
        <div className="carousel_wrapper">
            {images.map((image, index)=> {
                return(
                    <div key={index} className={index === current ?  "carousel_card carousel_card-active" : "carousel_card"}>
                        <img src={image.image} alt="images" className="image_card" />
                    </div>
                )
            })}
        </div>
        {/* <button className="lkey" onClick={slideRight}>click me </button> */}
    </div>
  )
}

export default ImageSlider
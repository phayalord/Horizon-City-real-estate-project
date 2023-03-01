import React from 'react'
import './main.css';
import { ImageSlider, Navbar } from '../../components';
import { slideData } from '../../components/data';

function Main() {
  return (
    <div>
        <main className="main">
            <div className="hero">
                <div className="hero1">
                    <h3 className="hero-title">
                    Create Your Dream H<span>o</span>me Today!!!
                    </h3>
                    <p className="hero-paragraph">
                    Discover how to turn your dream home into reality 
                    with us. From planning the design and 
                    construction of your ideal home to choosing 
                    interior design features, we provide information  
                    on all the aspects essential to you and your 
                    family's comfort.
                    </p>
                    <div className="hero-btns">
                        <a href="#" className="shop">Shop</a>
                        <a href="#" className="startProject">Start Project</a>
                    </div>
                </div>
                <div className="hero2">
                    <div className="square"></div>
                    <div className="carousel_container">
                        <ImageSlider images={slideData} />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main;
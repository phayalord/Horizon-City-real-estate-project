import React from 'react'
import { Navbar, Main, MainTwo, MainThree, Footer } from '../../components';
import { main3Slider } from '../../components/main3ImageSliderData';


function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <MainTwo />
      <MainThree main3Slider={main3Slider}/>
      <Footer/>
    </div>
  )
}

export default Home;
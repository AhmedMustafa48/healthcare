import React from 'react'
import HeroBottom from '../HeroBottom/HeroBottom'
import Home from '../Home/Home'
import MyCards from '../Services/card'
import BtmSlider from '../Slider/BtmSlider'
import Whatsapp from '../Whatsapp/Whatsapp'

const LandingPage = () => {
  return (
    <div>
        <Home />
            <Whatsapp/>
            <HeroBottom/>
            <MyCards />
            <BtmSlider/>
    </div>
  )
}

export default LandingPage

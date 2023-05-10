import React from 'react'
import HeroBelow from '../HeroBelow/Herobelow'
import Home from '../Home/Home'
import MyCards from '../Services/card'
import BtmSlider from '../Slider/BtmSlider'
import Whatsapp from '../Whatsapp/Whatsapp'

const LandingPage = () => {
  return (
    <div>
        <Home />
            <Whatsapp/>
            <HeroBelow/>
            <MyCards />
            <BtmSlider/>
    </div>
  )
}

export default LandingPage

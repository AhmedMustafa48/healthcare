import React from 'react'
import Footer from '../Footer/Footer'
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
            <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default LandingPage

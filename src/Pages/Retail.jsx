import React from 'react'
import Hero from "./../Components/RetailMedia/Hero"
import PixlaProducts from './../Components/RetailMedia/Product'
import Shortvideo from './../Components/RetailMedia/Shortvideo'
import Livestreaming from './../Components/RetailMedia/Livestreaming'
import Pixclick from "./../Components/RetailMedia/Pixclick"
import PixlakartSection from '../Components/RetailMedia/Pixlakart'
import Faq from "./../Components/RetailMedia/Faq"

const Retail = () => {
  return (
    <div>
      <Hero/>
      <PixlaProducts/>
      <Shortvideo/>
      <Livestreaming/>
      <Pixclick/>
      <PixlakartSection/>
      <Faq/>
    </div>
  )
}

export default Retail

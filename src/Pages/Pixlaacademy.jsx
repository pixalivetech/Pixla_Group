import React from 'react'
import HeaderSection from './../Components/Products/PixlaAcademy/Header.jsx';
import HeroSection from './../Components/Products/PixlaAcademy/Hero.jsx';
import KeyFeatures from './../Components/Products/PixlaAcademy/Keyfeatures.jsx';
import Blackb from './../Components/Products/PixlaAcademy/Blackp.jsx';
import Benifites from './../Components/Products/PixlaAcademy/Benifites.jsx';
import OurPrograms from './../Components/Products/PixlaAcademy/Content.jsx';
import Products from './../Components/Products/PixlaAcademy/Apps.jsx';
import Pshare from './../Components/Products/PixlaAcademy/Share.jsx';
const Pixla = () => {
  return (
    <div>
      <HeaderSection />
       <HeroSection/>
      <KeyFeatures/>
       <Blackb/>
       <Benifites/>
       <OurPrograms/>
       <Products/>
       <Pshare/>   
      
    </div>
  )
}
 
export default Pixla
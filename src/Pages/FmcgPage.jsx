import React from 'react'
import Fmcgsec1 from '../Components/Fmcg/Fmcgsec1'
import Fmcgsec2 from '../Components/Fmcg/Fmcgsec2'
import Keyfeatures from '../Components/Fmcg/Keyfeatures'
import ProductCategories from '../Components/Fmcg/Productcategories'
import Faq from "./../Components/RetailMedia/Faq"


const FmcgPage = () => {
  return (
    <div>
      <Fmcgsec1 />
      <Fmcgsec2 />
      <Keyfeatures />
      <ProductCategories />
      <Faq/>
    </div>
  )
}

export default FmcgPage
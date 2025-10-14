import React from 'react'
import Hero from "./../Components/Home/hero";
import About from "./../Components/Home/about";
import Division from "./../Components/Home/division";
import Products from "./../Components/Home/Products";
import Keys from "./../Components/Home/Key";
import Partners from "./../Components/Home/Partner";
import Acadamy from "./../Components/Home/Acadamy";
import Review from "./../Components/Home/Review";
import Blogs from "./../Components/Home/Blog";
import Path from "./../Components/Home/Pathway"; 

const Home = () => {
  return (
    <div>
     <Hero/>
      <About/>
      <Division/>
      <Products/>
      <Keys/>
      <Partners/>
      <Acadamy/>
      <Review/>
      <Blogs />
      <Path/> 
    </div>
  )
}

export default Home

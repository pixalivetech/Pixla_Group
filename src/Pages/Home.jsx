import React from 'react'
import Hero from "./../Components/Home/Hero";
import About from "./../Components/Home/About";
import Division from "./../Components/Home/Division";
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

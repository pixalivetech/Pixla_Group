<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import AboutUs from "./Pages/AboutUs";
=======
import React from 'react'
import Retail from './Pages/Retail'

>>>>>>> origin/Mayakannan


function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />
      <Hero/>
      <Route path = "/about" element = {<AboutUs/>} />
      
      <Footer/>
    </Router>
  );
=======
    <div className='back bg-[#f2f2f2]'>
      <Retail/>
    
    </div>
  )
>>>>>>> origin/Mayakannan
}


export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
    <Router>
      <Header />
      <Hero/>
      <Route path = "/about" element = {<AboutUs/>} />
      
      <Footer/>
    </Router>
  );
}


export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import About from "./Components/Home/about";
import Division from "./Components/Home/division";
import Products from "./Components/Home/Products";
import Keys from "./Components/Home/Key";
import Partners from "./Components/Home/Partner";
import Acadamy from "./Components/Home/Acadamy";
import Review from "./Components/Home/Review";


function App() {
  return (
    <Router>
      <Header />
      <Hero/>
      <About/>
      <Division/>
      <Products/>
      <Keys/>
      <Partners/>
      <Acadamy/>
      <Review/>
      <Footer/>
    </Router>
  );
}


export default App

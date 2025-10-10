import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import About from "./Components/Home/about";
import Division from "./Components/Home/division";


function App() {
  return (
    <Router>
      <Header />
      <Hero/>
      <About/>
      <Division/>
      <Footer/>
    </Router>
  );
}


export default App

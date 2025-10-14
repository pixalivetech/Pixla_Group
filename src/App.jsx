import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import FmcgPage from './Pages/FmcgPage';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import AboutUs from "./Pages/AboutUs";
import Retail from "./Pages/Retail";
import Itservice from "./Pages/Itservice"
import Home from "./Pages/Home";
import Pixla from "./Pages/Pixla";
import Pixalive from "./Pages/Pixalive";
import Pixlakart from "./Pages/Pixlakart";
import PixlaAcademy from "./Pages/Pixlaacademy";
import Pixclick from "./Pages/Pixclick";



function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/pixla" element={<Pixla />} />
        <Route path="/pixalive" element={<Pixalive />} />
        <Route path="/pixlakart" element={<Pixlakart />} />
        <Route path="/pixlaacademy" element={<PixlaAcademy />} />
        <Route path="/pixclick" element={<Pixclick />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/fmcg" element={<FmcgPage />} />
        <Route path="/it-services" element={<Itservice />} />
      </Routes>
      <Footer />


    </Router>
  )


}

export default App;

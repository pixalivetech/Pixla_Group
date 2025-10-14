import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

// Pages
import Hero from "./Components/Home/hero";
import AboutUs from "./Pages/AboutUs";
import Retail from "./Pages/Retail";
import About from "./Components/Home/about";
import Division from "./Components/Home/division";
import Pixla from "./Pages/Pixla";
import Pixalive from "./Pages/Pixalive";
import Pixlakart from "./Pages/Pixlakart";
import PixlaAcademy from "./Pages/Pixlaacademy";
import Pixclick from "./Pages/Pixclick";
import Contact from './Components/Contact/Contact';
import FmcgPage from './Pages/FmcgPage';
import Itservice from "./Pages/Itservice";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      {/* Common Header */}
      <Header />

      {/* Page Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Division />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
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

      {/* Common Footer */}
      <Footer />
    </Router>
  );
}

export default App;

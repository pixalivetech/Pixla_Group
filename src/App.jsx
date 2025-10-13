import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import AboutUs from "./Pages/AboutUs";
import Retail from "./Pages/Retail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

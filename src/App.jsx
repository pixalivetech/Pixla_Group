import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import FmcgPage from './Pages/FmcgPage';

import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Hero from "./Components/Home/hero";
import AboutUs from "./Pages/AboutUs";
import Retail from "./Pages/Retail";
import Itservice from "./Pages/Itservice"

function App() {
  return (
    <Router>
         <Header />
       <Routes>
         <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/retail" element={<Retail />} />
        

      
           <Route path="/contact" element={<Contact />} />
          <Route  path="/fmcg" element={<FmcgPage />}/>
           <Route  path="/It services" element={<Itservice />}/>
       </Routes>
       <Footer />
    </Router>
  )
   
    
}

export default App;

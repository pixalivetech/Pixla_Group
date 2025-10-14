import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Retail from "./Pages/Retail";
import Itservice from "./Pages/Itservice";
import Contact from "./Components/Contact/Contact";
import FmcgPage from "./Pages/FmcgPage";
import Pixla from "./Pages/Pixla";
import Pixalive from "./Pages/Pixalive";
import Pixlakart from "./Pages/Pixlakart";
import PixlaAcademy from "./Pages/Pixlaacademy";
import Pixclick from "./Pages/Pixclick";

// ------------------
// Layout Component
// ------------------
const Layout = ({ children }) => {
  const location = useLocation();

  // Routes that should hide the Header
  const hideHeaderRoutes = [
    "/pixla",
    "/pixalive",
    "/pixlakart",
    "/pixlaacademy",
    "/pixclick",
  ];

  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

// ------------------
// Main App Component
// ------------------
function App() {
  return (
    <Router>
      {/* Automatically scroll to top on page change */}
      <ScrollToTop />

      {/* Main container with max width */}
      <div className="w-full max-w-[1440px] mx-auto">
        <Layout>
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
        </Layout>
      </div>
    </Router>
  );
}

export default App;

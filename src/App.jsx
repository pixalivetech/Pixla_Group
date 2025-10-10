import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact'
import FmcgPage from './Pages/FmcgPage';

const App = () => {
  return (
    <Router>
       <Routes>
           <Route path="/contact" element={<Contact />} />
          <Route  path="/fmcg" element={<FmcgPage />}/>
           
       </Routes>
    </Router>
  )
}

export default App

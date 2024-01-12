import React,{useEffect} from 'react';
import './App.css';
import Adorama from './Adorama';
import Bny from './Bny'
import Airpaz from './Airpaz';
import AOS from 'aos';
import 'aos/dist/aos.css';




import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []); 
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adorama" element={<Adorama />} />
          <Route path="/Bny" element={<Bny />} />
          <Route path="/Airpaz" element={<Airpaz />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

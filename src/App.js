import './App.css';
import "./Components/css/Header.css"
import "./Components/css/About.css"
import "./Components/css/OurDepartment.css"
import "./Components/css/Gallery.css"
import "./Components/css/Conatct.css"
import "./Components/css/Facility.css"





import TopNav from './Components/Header/TopNav';
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from './Components/Header/Navbarr';
import LogoNav from './Components/Header/LogoNav';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About';
import OurDepartment from './Components/OurDepartment';
import Gallery from './Components/Gallery';
import Contactus from './Components/Contactus';
import Facilities from './Components/Facilities';


function App() {
  return (
    <>
    
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <TopNav/>
      <LogoNav/>
      <Navbarr/>


      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/our_department" element={<OurDepartment/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contactus/>} />
          <Route path="/facility" element={<Facilities/>} />






      </Routes>
      <Footer/>
    </BrowserRouter>


    </div>
    
    
    
    
    </>
  );
}

export default App;

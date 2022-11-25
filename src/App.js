import './App.css';
import "./Components/css/Header.css"
import TopNav from './Components/Header/TopNav';
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarr from './Components/Header/Navbarr';
import LogoNav from './Components/Header/LogoNav';
import Home from './Components/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    
    <div>
      <BrowserRouter>
      <ScrollToTop/>
      <TopNav/>
      <LogoNav/>
      <Navbarr/>
      <Home/>


      <Routes>
          {/* <Route path="/" element={<Home />} /> */}


      </Routes>
      <Footer/>
    </BrowserRouter>


    </div>
    
    
    
    
    </>
  );
}

export default App;

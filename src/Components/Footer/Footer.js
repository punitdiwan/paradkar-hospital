import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";


const Footer = () => {
  return (
    <>
      <TopFooter />

      <div className="footercontent">
        <div className="fotterleft">
          <div className="footertop">
            <h6>Our Departments</h6>
          </div>
          <div className="footerbt fftp">
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">ORTHOPAEDICS</Link>
                </li>
                <li>
                
                  <Link to="/our_department">CARDIOLOGIST</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                
                  <Link to="/our_department">GYNECOLOGY</Link>
                </li>
                <li>
                 
                  <Link to="/our_department"> SONOLOGIST</Link>
                </li>
              </ul>
            </div>

            <div className="footerbtone">
              <ul type="square">
                <li>
                  
                  <Link to="/our_department">MEDICAL SPECIALIST</Link>
                </li>
                <li>
                
                  <Link to="/our_department">LAPAROSCOPY</Link>
                </li>
              </ul>
            </div>

           
          </div>
        </div>
        

        <div className="fotterright fffbt">
          <div className="footertop">
            <h6>QUICK NAVIGATIONS</h6>
          </div>
          <div className="footerbt">
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">ORTHOPAEDICS</Link>
                </li>
                <li>
                 
                  <Link to="/our_department">CARDIOLOGIST</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">GYNECOLOGY</Link>
                </li>
                <li>
                
                  <Link to="/our_department"> SONOLOGIST</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">MEDICAL SPECIALIST</Link>
                </li>
                <li>
                  
                  <Link to="/our_department">LAPAROSCOPY</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BottomFooter />
    </>
  );
};

export default Footer;

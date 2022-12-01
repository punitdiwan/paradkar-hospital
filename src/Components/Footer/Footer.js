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
                 
                  <Link to="/our_department">RADIOLOGY</Link>
                </li>
                <li>
                 
                 <Link to="/our_department">PAEDIATRICS</Link>
               </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                  <Link to="/our_department">GENERAL SURGERY</Link>
                </li>
                <li>
                
                  <Link to="/our_department">GENERAL MEDICINE</Link>
                </li>
                <li>
                 <Link to="/our_department">OBSTETRICS & GYNAECOLOGY</Link>
               </li>
              </ul>
            </div>
            {/* <div className="footerbtone">
              <ul type="square">
              <li>
                 <Link to="/our_department">OBSTETRICS</Link>
               </li>
                <li>
                <Link to="/our_department">GYNAECOLOGY</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        

        {/* <div className="fotterright fffbt">
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
                 
                  <Link to="/our_department">RADIOLOGY</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                  <Link to="/our_department">GENERAL SURGERY</Link>
                </li>
                <li>
                
                  <Link to="/our_department">GENERAL MEDICINE</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">PAEDIATRICS</Link>
                </li>
                <li>
                  
                  <Link to="/our_department">GYNAECOLOGY</Link>
                </li>
              </ul>
            </div>
            <div className="footerbtone">
              <ul type="square">
                <li>
                 
                  <Link to="/our_department">OBSTETRICS</Link>
                </li>
                <li>
                 <Link to="/our_department"></Link>
               </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      <BottomFooter />
    </>
  );
};

export default Footer;

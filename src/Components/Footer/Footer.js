import React from 'react'
import "../css/Footer.css"
import BottomFooter from './BottomFooter'
import TopFooter from './TopFooter'

const Footer = () => {
  return (
    <>
    <TopFooter/>
    
    <div className="footercontent">
        <div className="fotterleft">
            <div className="footertop">
                    <h6>Our Departments</h6>
            </div>
            <div className="footerbt fftp">
            <div className="footerbtone">
                      <ul type="square">
                        <li> <a href="">ORTHOPAEDICS</a> </li>
                        <li> <a href="">CARDIOLOGIST</a> </li>
                        <li> <a href="">MEDICAL SPECIALIST</a> </li>
                        
                      </ul>
                    </div>
                    <div className="footerbtone">
                    <ul type="square">
                        <li> <a href="">GYNECOLOGY</a> </li>
                        <li> <a href=""> SONOLOGIST</a> </li>
                        <li> <a href="">LAPAROSCOPY</a> </li>
                      </ul>
                    </div>
                      {/* <div className="footerbtone">
                      <ul type="square">
                          <li> <a href="">PEDIATRIC SURGERY</a> </li>
                          <li> <a href="">GENERAL SURGERY</a> </li>
                          <li> <a href="">CARDIOLOGY</a> </li>
                          <li> <a href="">NEPHROLOGY</a> </li>
                          <li> <a href="">NEPHROLOGY</a> </li>
                        </ul>
                      </div> */}

            </div>
        </div>
        <div className="fotterright fffbt">
        <div className="footertop">
                    <h6>QUICK NAVIGATIONS</h6>
            </div>
            <div className="footerbt">
                    <div className="footerbtone">
                    <ul type="square">
                        <li> <a href="">ORTHOPAEDICS</a> </li>
                        <li> <a href="">CARDIOLOGIST</a> </li>
                        <li> <a href="">MEDICAL SPECIALIST</a> </li>
                        
                      </ul>
                    </div>
                    <div className="footerbtone">
                    <ul type="square">
                        <li> <a href="">GYNECOLOGY</a> </li>
                        <li> <a href=""> SONOLOGIST</a> </li>
                        <li> <a href="">LAPAROSCOPY</a> </li>
                      </ul>
                    </div>
                    

            </div>
        </div>

    </div>
    
    <BottomFooter/>
    
    
    
    </>
  )
}

export default Footer
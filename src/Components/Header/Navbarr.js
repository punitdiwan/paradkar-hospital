import React from "react";
import "../css/style.css"
import { Link } from "react-router-dom";



const Navbarr = () => {
  return (
    <>
      
      <div class="menu-bar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about">
              ABOUT US
            </Link>
          
          </li>

          <li>
            <Link to="/our_department">OUR DEPARTMENTS</Link>
          </li>

         
          <li>
            <Link to="/facility">FACILITIES WE PROVIDE</Link>
          </li>
         

        
         
          
         
          <li>
            <Link to="/gallery">
              GALLERY
            </Link>

            
          </li>

       

        
          <li>
            <Link to="/contact">
              CONTACT US
            </Link>

           
          </li>

         

        </ul>
      </div>



    </>
  );
};

export default Navbarr;

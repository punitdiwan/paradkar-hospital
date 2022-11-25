import React from 'react'
import './css/Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';


const Specialities = (props) => {
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 310;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 310;
    }
  return (
   <>
   
   <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card text-center" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                {/* <p className="slider-card-title">{slide.title}</p> */}
                                <p className="slider-card-description mt-2">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
   
   </>
  )
}

export default Specialities
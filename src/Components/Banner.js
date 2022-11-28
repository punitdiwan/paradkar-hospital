import React from "react";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner jaimataran">
        <div class="carousel-item active" data-bs-interval="6000">
            <img src="./images/aka1.jpeg" class="d-block w-100" alt="..." />
          </div>

          <div class="carousel-item" data-bs-interval="4000">
            <img src="./images/aa1.jpeg" class="d-block" style={{width:"100%"}} alt="..." />
            <div className="carousel-con-1">
              <h2>Best in</h2>
             <h1>HEALTH CARE</h1>  
            </div>             
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src="./images/aaa.jpeg" class="d-block" style={{width:"100%"}} alt="..." />
            <div className="carousel-con">
             <h1>MULTISPECIALITY</h1> 
             <h2>HOSPITAL</h2> 
            </div> 
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src="./images/abab.jpeg" class="d-block w-100" alt="..." />
          </div>
        
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <span class="visually-hidden">Previous</span>
        </button> 
       <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;

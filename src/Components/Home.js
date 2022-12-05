import React from 'react'
import Banner from './Banner'
import Roleimages from './Roleimages';
import Specialities from './Specialities';
import Carousel from 'react-bootstrap/Carousel';
import Welcome from './Welcome'
import AboutDoctors from './AboutDoctors';

const Home = () => {
  const sliderClick = (slider) => {};

  const slides = [
    {
      image: "./images/orthopedics.jpg",
      title: "This is a title",
      description: "ORTHOPAEDICS",
      clickEvent: sliderClick,
    },
    {
      image: "./images/ARTHROSCOPY.jpeg",
      title: "This is a second title",
      description: "ARHTOSCOPTY AND JOINT REPLACEMENT",
      clickEvent: sliderClick,
    },
    {
      image: "./images/surg.jpeg",
      title: "This is a third title",
      description: "GENERAL SURGERY",
      clickEvent: sliderClick,
    },
    {
      image: "./images/IVF.jpeg",
      title: "This is a fourth title",
      description: "IVF & TEST TUBE BABY CENTRE",
      clickEvent: sliderClick,
    },
    // {
    //   image: "./images/plastic-surgery.jpg",
    //   title: "This is a fifth title",
    //   description: "Plastic Surgery",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: "./images/paediatric-surgery.jpg",
    //   title: "This is a sixth title",
    //   description: "Paediatric Surgery",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: "./images/neurosurgery.jpg",
    //   title: "This is a seventh title",
    //   description: "Neuro Surgery",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: "./images/nephrology.jpg",
    //   title: "This is a seventh title",
    //   description: "Nephrology",
    //   clickEvent: sliderClick,
    // },
    // {
    //   image: "./images/maxillofacial-surgery.jpg",
    //   title: "This is a seventh title",
    //   description: "Maxillofacial",
    //   clickEvent: sliderClick,
    // },
    {
      image: "./images/ULTRASONOGRAPHY.jpeg",
      title: "This is a seventh title",
      description: "ADAVANCED ULTRASONOGRAPHY SERVICES",
      clickEvent: sliderClick,
    },
    {
      image: "./images/gynecology.jpg",
      title: "This is a seventh title",
      description: "OBSTETRICS & GYNAECOLOGY",
      clickEvent: sliderClick,
    },
  ];
  return (
    <>
    <Banner/>
    
    <Welcome/>



    <div className="cardslidersetup">
      <div className="spcialitiesContent text-center">
        <h5>OUR SPECIALITIES </h5>
        <hr width="50" align-center style={{height:"5px", background:"green",border:"none", margin:"auto", borderRadius:"5px"}}/>
        <p style={{marginTop:"10px"}}>Carrers meets cure choose form a pool of high skilled renowned and credible doctors</p>
        <p>Individual quality care that meets the total need of patient</p>
      </div>

    <Specialities slides={slides}  />




{/* optional */}

    <Carousel className='jkl'>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/orthopedics.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ORTHOPAEDICS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/ARTHROSCOPY.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>ARHTOSCOPTY AND JOINT REPLACEMENT</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/surg.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>GENERAL SURGERY</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/IVF.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>IVF & TEST TUBE BABY CENTRE</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block"
          src="./images/gynecology.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>OBSTETRICS & GYNAECOLOGY </h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block"
          src="./images/ULTRASONOGRAPHY.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>ADAVANCED ULTRASONOGRAPHY SERVICES</h3>
          
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

    <div className="readbtnsecond">
        <button>Read More</button>
    </div>
    </div>




    <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner secondbanner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="./images/kok.jpg" class="d-block" style={{width:"100%"}} alt="..." />
            
          </div>
         
          
        </div>
       
       
      </div>
    

    



<Roleimages/>


<Carousel className='jkl'>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/2.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dr. Mangala Paradkar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/3.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dr. Parag Paradkar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./images/4.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dr. L. N Paradkar</h3>
          
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block"
          src="./images/1.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dr. Pranjal Paradka</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>


    <AboutDoctors/>



    </>
  )
}

export default Home
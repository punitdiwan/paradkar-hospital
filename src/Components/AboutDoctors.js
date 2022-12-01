import React from "react";
import "./css/AbouD.css";
import Carousel from "react-bootstrap/Carousel";

const AboutDoctors = () => {
  return (
    <>
      <div className="aboutdoctor">
        <div className="aboutdinner">
          <div className="aboutdoctorone">
            <Carousel className="hjkl">
              <Carousel.Item className="aboutctt">
                <div className="photoimg">
                  <img src="./images/user.png" alt="" />
                </div>
                <div className="contentofphoto">
                  <p>
                    I was a patient for Heart, wherein I got the opportunity to
                    know the functioning of the hospital in detail. The hospital
                    management is excellent. The staff and their treatment
                    procedure is remarkable and I am sure in the coming years,
                    this hospital will be unparalleled in terms of patient care
                    and treatment.
                  </p>
                  <h5>Hey, I am Rohan</h5>
                </div>
              </Carousel.Item>
              <Carousel.Item className="aboutctt">
                <div className="photoimg">
                  <img src="./images/user.png" alt="" />
                </div>
                <div className="contentofphoto">
                  <p>
                    I was a patient for Heart, wherein I got the opportunity to
                    know the functioning of the hospital in detail. The hospital
                    management is excellent. The staff and their treatment
                    procedure is remarkable and I am sure in the coming years,
                    this hospital will be unparalleled in terms of patient care
                    and treatment.
                  </p>
                  <h5>Hey, I am Shalini</h5>
                </div>
              </Carousel.Item>

              <Carousel.Item className="aboutctt">
                <div className="photoimg">
                  <img src="./images/user.png" alt="" />
                </div>
                <div className="contentofphoto">
                  <p>
                    I was a patient for Bone Fracture, wherein I got the opportunity to
                    know the functioning of the hospital in detail. The hospital
                    management is excellent. The staff and their treatment
                    procedure is remarkable and I am sure in the coming years,
                    this hospital will be unparalleled in terms of patient care
                    and treatment.
                  </p>
                  <h5>Hey, I am Rahul</h5>
                </div>
              </Carousel.Item>

              <Carousel.Item className="aboutctt">
                <div className="photoimg">
                  <img src="./images/user.png" alt="" />
                </div>
                <div className="contentofphoto">
                  <p>
                    I was a patient for Heart Surgery, wherein I got the opportunity to
                    know the functioning of the hospital in detail. The hospital
                    management is excellent. The staff and their treatment
                    procedure is remarkable and I am sure in the coming years,
                    this hospital will be unparalleled in terms of patient care
                    and treatment.
                  </p>
                  <h5>Hey, I am Akash</h5>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="aboutdoctorone">
            <div className="aboutdoctorinnerone">
              <div className="headerdoctorone">
                <h5>We care About Your Life</h5>
                <hr
                  width="50px"
                  style={{
                    height: "3px",
                    border: "none",
                    backgroundColor: "white",
                  }}
                />
              </div>

              <div className="headerdoctoroneContent">
                <i class="ri-hospital-fill"></i>
                <h5>Unit I</h5>
                <p>
                  Bedded multi speciality unit with best in class facilities
                  is dedicated for advanced ortho, intensive and critical care,
                  accident and super specialised fields like : ORTHOPAEDICS
                  SURGEONS, ARTHROSCOPY & JOINT REPLACEMENT SERVICES , GENERAL SURGERY. We are also well
                  allied with world-class amenities and are 24x7 super
                  specialized in the fields of - Internal Medicine, Maternity
                  and GYNAECOLOGY & OBSTETRICS, IVF & TEST TUBE BABY CENTRE, ADAVANCED ULTRASONOGRAPHY SERVICES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDoctors;

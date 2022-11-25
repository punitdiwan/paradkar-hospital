import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="welcomemain">
        <div className="wecomeone">
          <div className="content">
            <h6>Welcome to the</h6>
            <h2>Hospital you can trust</h2>
            <p>
              Being providers of comprehensive, seamless and integrated
              world-class healthcare, we have a team of leading doctors with
              robust expertise who are committed to providing highest standards
              of medical excellence at a fraction of international costs.
              Centrally located in the city, PARADKAR HOSPITAL is a
              one-of-a-kind institute which offers all multi-speciality services
              under one roof constantly working towards redefining the concept
              of medical care.
            </p>
          </div>
          <div className="readbtn">
            <button>Read More</button>
          </div>
        </div>
        <div className="wecomtwo">
          <h6>I am looking for :</h6>
          <div className="boxx">
            <div className="boxone">
              <i class="ri-arrow-right-circle-line"></i>HOSPITAL ADMISSION
              PROCCESS
            </div>
            <div className="boxone">
              <i class="ri-arrow-right-circle-line"></i>HOSPITAL BILLING PAYMENT
            </div>
            <div className="boxone">
              <i class="ri-arrow-right-circle-line"></i>PATIENT GUIDE & VISITOR
              PLOICY
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

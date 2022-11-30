import React from "react";

const OurDepartment = () => {
  return (
    <>
      <div className="ourdep">
        <div className="ourdepone">
          <h2>Departments</h2>
          <p id="ppp">
            CENTER OF EXCELLENCE FOR SEVERAL KEY SPECIALTIES AND SUPERSPECIALTIE
          </p>
          <div className="para">
            <p>
              We are unique and our state of the art facilities spread across
              our hospital location and each Centre of Excellence stands out as
              a citadel of excellence. At <b>PARADKAR HOSPITAL</b> , we consider it our prime
              responsibility to provide high quality clinical care to all our
              patients. Putting the patient at the core of our operations, we
              have developed robust quality standards, used expert diagnoses and
              treatment plans and enhanced infection and safety protocols to
              render them the most appropriate treatment.
            </p>
          </div>
        </div>
        <div className="ourdeptwo">
          <div className="ourdepcards">
            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/orthopedics.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Orthopaedics</h5>
                <p>
                  Orthopedic surgery or orthopaedics is the branch of surgery
                  concerned with conditions involving the musculoskeletal system
                </p>
              </div>
            </div>

            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/cardiology.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Cardiologist</h5>
                <p>
                  Cardiology deals with the disorders of the heart & some parts
                  of the circulatory system. This includes the diagnosis &
                  treatment of heart defects.
                </p>
              </div>
            </div>

            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/trauma-care.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Medical Specialist</h5>
                <p>
                  There are three medical specialties: internal medicine, family
                  medicine, and pediatrics. Within each of these, specialists
                  may choose to focus
                </p>
              </div>
            </div>
          </div>
          {/* <div className="ourdepcards">
            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/ob-sonology-top.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Sonologist</h5>
                <p>
                  Sonology is a neologism used to describe the study of sound in
                  a variety of disciplines. In medicine, the term is used in the
                  field of [imaging] to describe .
                </p>
              </div>
            </div>

            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/laproscopy.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Laproscopy</h5>
                <p>
                  This operation is performed in the abdomen or pelvis with the
                  assistance of a camera. The laparoscope supports diagnosis or
                  therapeutic interventions.
                </p>
              </div>
            </div>

            <div className="cardone">
              <div className="cardepimg">
                <div className="cardiggdep">
                  <img src="./images/gynecology.jpg" alt="" />
                </div>
              </div>
              <div className="cadcontt">
                <h5>Gynecology</h5>
                <p>
                  Gynecology is the care of women-specific disorders and the
                  problems related to female reproductive organs.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default OurDepartment;

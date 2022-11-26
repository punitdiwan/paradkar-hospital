import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="Aboutuspage">
        <div className="aboutonep">
          <h2>Contact us</h2>
          <p id="ppp">WE ARE HERE TO ANSWER ALL YOUR HEALTH QUERRIES.</p>
          <div className="para">
            <p>
              We are always looking forward to hearing from you. Feel free to
              reach out for any queries. Give us a call or drop by anytime, we
              endeavour to answer all enquiries and serve you better.
            </p>

            <div className="boxcontact">
              <div className="conton">
                <div className="mg">
                  <img src="./images/location.png" alt="" />
                </div>
                <p>We're here for you! Just visit us in case of any help.</p>
                <p>Address - Khairi Naka Narsinghpur (M.P)</p>
              </div>
              <div className="conton">
                <div className="mg">
                  <img src="./images/mail-box.png" alt="" />
                </div>
                <p>
                  Have any question! Feel free to reach us by phone or mail.
                </p>
                <p>T : +91 - 942 516 8701</p>
                <p>E : paragparadkar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutonep cmmap">
          <div className="apmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.968491753318!2d79.18934409311487!3d22.94883805155849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397f9ccf0cbccdeb%3A0xcf9eb6d4b39139b6!2sPARADKAR%20HOSPITAL%20(old)!5e0!3m2!1sen!2sin!4v1669455783937!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;

import React from "react";
import "./Opportunities.css";
import Certificate from "../../assets/certificate-new.png";
import StarIcon2 from "../../Icons/StarIcon2";
import Internship from "../../assets/internship.png";

const Opportunities = () => {
  return (
    <div className="opportunities-main">
      <div className="opportunities-head">
        Unlock 6 Certificates & Internship Opportunities!
      </div>
      <div className="opportunities-container">
        <div className="certificate-box">
          <div className="certificate-head">
            Get 6 Industry Recognized Certificates!
          </div>
          <div>
            <img src={Certificate} alt="certificate" className="certificate-img" />
          </div>
          <div className="certificate-features">
            <div className="feature">
                
              <div className="hero-feature-icon">
                {" "}
                <StarIcon2 />{" "}
              </div>
              <div> Official and Verified </div>
            </div>

            <div className="feature">
              <div className="hero-feature-icon">
                {" "}
                <StarIcon2 />{" "}
              </div>
              <div> Enhances Credibility </div>
            </div>
          </div>
        </div>
        <div className="internship-box">
          <div className="internship-head">
            <div className="internship-head-1">
              Bag Internship Opportunities!
            </div>
            <div className="internship-head-2">
              With every course, we make you not only industry-ready but also
              help you crack your first internship.
            </div>
          </div>
          <div>
            <img src={Internship} alt="internship" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

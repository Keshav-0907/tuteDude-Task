import React from "react";
import "./Opportunities.css";
import Certificate from "../../assets/certificate-new.png";
import StarIcon2 from "../../Icons/StarIcon2";
import Internship from "../../assets/internship.png";

const Opportunities = () => {
  return (
    <div className="opportunities-main">
      <div className="opportunities-head">
        Unlock{" "}
        <span className="opportunities-head-highlight"> 6 Certificates </span> &{" "}
        <span className="opportunities-head-highlight">
          {" "}
          Internship Opportunities!{" "}
        </span>
      </div>
      <div className="opportunities-container">
        <div className="certificate-box">
          <div className="certificate-head">
            Get 6 Industry Recognized Certificates!
          </div>
          <div className="image">
            <img
              src={Certificate}
              alt="certificate"
              className="certificate-img"
            />
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
          <div className="image">
            <img src={Internship} alt="internship" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

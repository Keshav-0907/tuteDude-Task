import React from "react";
import "./Internship.css";
import InternShipIcon from "../../assets/internship-icon.png";

const InternShipData = [
  "Learn from our structured pre recorded courses made by experts to meet industry needs",
  "Personal mentors to guide and help you throughout your journey as a friend",
  "Get guaranteed paid internships after completion of the program along with course completion certificates",
];

const InternShipData2 = [
    "1:1 live doubt solving support available throughout the day to clear your doubts instantly ",
    "Build major projects which makes your resume stand apart ",
  ];

const Internship = () => {
  return (
    <div className="internship-main">
      <div className="internship-heading">
        How does the Internship Program works ?
      </div>
      <div className="work-points">
        <div className="line"></div>
        <div className="upper">
          {InternShipData.map((data, index) => {
            return (
              <div className="upper-point" key={index}>
                <img src={InternShipIcon} alt="icon" className="icon" />
                <div> {data} </div>
              </div>
            );
          })}
        </div>
        <div className="lower">
          {InternShipData2.map((data, index) => {
            return (
              <div className="lower-point" key={index}>
                <img src={InternShipIcon} alt="icon" className="icon" />
                <div> {data} </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="apply-now">
        <div className="apply-now-btn"> Apply now for ₹ 2999 </div>
      </div>
    </div>
  );
};

export default Internship;

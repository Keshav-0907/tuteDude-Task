import React, { useState, useEffect, useRef } from "react";
import "./Refund.css";
import ClockIcon from "../../Icons/ClockIcon";
import Step1 from "../../assets/step1.png";
import ArrowIcon from "../../Icons/ArrowIcon";

const initialTime = 786400;

const Refund = () => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setTimeLeft(newValue);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  const getBackgroundSize = () => {
    const percentage = (timeLeft / initialTime) * 100;
    return `linear-gradient(to right, yellow 0%, yellow ${percentage}%, #d3d3d3 ${percentage}%, #d3d3d3 100%)`;
  };

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs < 10 ? "0" : ""}${secs}s`;
  };

  return (
    <div className="refund-main">
      <div className="refund-heading">
        Don't miss out on this limited-time opportunity to learn for Free!
      </div>

      <div className="refund-offer-cont">
        <div className="refund-offer-main">
          <div className="refund-offer-top">100% Refund Offer 😎</div>

          <div>
            <span> 20 Seats Left</span>
            <div className="arrow-icon"> 
            {/* TODO */}
              <ArrowIcon /> 
            </div>
            <div className="range">
              <input
                type="range"
                min="0"
                max={initialTime}
                value={timeLeft}
                disabled
                onChange={handleRangeChange}
                className="range-input"
                style={{ background: getBackgroundSize() }}
              />
            </div>
          </div>
          <div className="refund-bottom">
            <ClockIcon /> <span> Offer ends in {formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      <div className="how-it-works-main">
        <div className="how-it-works-head">How Does it Work?</div>

        <div className="how-it-works-body">
          <div>Upar wali cheez</div>
          <div className="steps">
            <div className="step">
              <div className="step-title">
                Step 1 : Enroll into your favorite course for only ₹1,499
              </div>
              <div className="step-img">
                <img src={Step1} alt="err" />
              </div>
              <div className="step-bottom">
                Start Learning with Lifetime Course Access.
              </div>
            </div>
            <div className="step">
              <div className="step-title">
                Step 2: Complete Course & Assignments within 2 Years!
              </div>
              <div className="step-middle">
                <div className="step-middle-num"> 2 </div>
                <div className="step-middle-text">
                  {" "}
                  years time from the date of enrollment{" "}
                </div>
              </div>
              <div className="step-bottom">
                Finish the course within 2 Years to Qualify for Refund.
              </div>
            </div>
            <div className="step">
              <div className="step-title">
                Step 3: Receive 100% Refund upon completion{" "}
              </div>
              <div className="step-middle">
                <div className="step-middle-num"> 100% </div>
                <div className="step-middle-text">
                  Enrollment Fee is refunded
                </div>
              </div>
              <div className="step-bottom">
                Upon Course Completion within 2 Years, Get Your ₹1,499 Back.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;

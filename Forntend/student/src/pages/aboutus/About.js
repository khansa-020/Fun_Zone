import React from "react";
import projAnimation from "../../animations/man-working.json";
import Lottie from "react-lottie";
import "./about.css";
import Navbar from "../../components/Nav";
const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      color: "red",
    },
  };
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="aboutcontent">
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginBottom: "2%",
            }}
          >
            FunZone GDDAZ CUI WAH
          </h1>
          <div className="abouttext">
            This Web-Application is a learning management tool specifically for
            gaming and digital arts. It helps students to learn and share their task and communicate with their supervisor virtually. Our platform
            will keep the records of all the students of GDDAZ along with their
            courses. We designed ‘FunZone’ in a social media style to give an
            interactive and attractive environment to the students of all organizations.
          </div>
        </div>
        <div className="aboutimg">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import AboutMeCard from "./AboutMeCard";
const AboutMe = () => {
  return (
    <>
      <div className="text-center" id="projects-title">
        About Me
      </div>
      <div className="AboutMeContainer">
        <div className="PitchBox">
          <div className="AboutImgBox">Image</div>
          <div className="AboutDescriptionBox">Description</div>
        </div>
        <div className="EducationBox">
          <AboutMeCard img="..." altDescription="..." description="..." />
          <AboutMeCard img="..." altDescription="..." description="..." />
          <AboutMeCard img="..." altDescription="..." description="..." />
        </div>
      </div>
    </>
  );
};

export default AboutMe;

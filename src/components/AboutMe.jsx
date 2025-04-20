import React from "react";
import AboutMeCard from "./AboutMeCard";
import myImg from "../assets/me.jpg";
import pierceImg from "../assets/pierce.png";
import socesImg from "../assets/soces.jpg";
import uciImg from "../assets/UCI.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="text-center" id="projects-title">
        About Me
      </div>
      <div className="AboutMeContainer">
        <div className="PitchBox">
          <div className="AboutImgBox">
            <img
              className="about-me-img"
              src={myImg}
              alt={"Me and my friends"}
            />
          </div>
          <div className="AboutDescriptionBox">
            <p className="AboutDescription">
              Hi, I’m Joe Hoshina — a Software Engineering student at UC Irvine
              with a strong foundation in object-oriented programming and
              hands-on experience in Python, JavaScript, Assembly, and more.
              <br />
              <br />
              I love bringing ideas to life through visually engaging projects,
              which has made working with React especially exciting. Recently,
              I’ve been diving into databases and APIs to build more dynamic,
              full-stack applications.
              <br />
              <br />
              Outside of tech, I’m passionate about fitness and have been
              dedicated to resistance training for over three years. Whether I’m
              solving bugs or hitting the gym, I bring consistency, curiosity,
              and drive to everything I do.
            </p>
          </div>
        </div>
        <div className="EducationBox">
          <AboutMeCard
            img={socesImg}
            altDescription="Soces Varsity Tennis Team Photo"
            description="Sherman Oaks Center for Enriched Studies"
            description2="Attended: Aug. 2018 - Jun. 2022"
            description3="Degree: High School Diploma"
          />
          <AboutMeCard
            img={pierceImg}
            altDescription="Me in a physics lab"
            description="Los Angeles Pierce College"
            description2="Attended: Aug. 2022 - May 2024"
            description3="2024 Degree: A.S. for Transfer"
          />
          <AboutMeCard
            img={uciImg}
            altDescription="Me with Peter"
            description="University of California, Irvine"
            description2="Attended: Sep. 2024 - current"
            description3="Degree: B.S. Software Engineering"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;

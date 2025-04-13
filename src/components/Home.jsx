import React from "react";
import Card from "./Card.jsx";
import bondingImg from "../assets/bonding.png";
import movieImg from "../assets/movie.png";

function Home() {
  return (
    <>
      <h1 className="text-center" id="projects-title">
        My Projects
      </h1>
      <div className="projectContainer">
        <Card projectName="Bonding Game" img={bondingImg} />
        <Card projectName="Movie Search App" img={movieImg} />
      </div>
    </>
  );
}

export default Home;

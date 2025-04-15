import React from "react";
import Card from "./Card.jsx";
import bondingImg from "../assets/bonding.png";
import movieImg from "../assets/movie.png";

function Home({ onCardClick }) {
  return (
    <>
      <h1 className="text-center" id="main-projects-title">
        My Projects
      </h1>
      <div className="projectContainer">
        <Card
          projectName="Bonding Game"
          img={bondingImg}
          clicked={() => onCardClick("bonding")}
        />
        <Card
          projectName="Movie Search App"
          img={movieImg}
          clicked={() => onCardClick("movie")}
        />
      </div>
    </>
  );
}

export default Home;

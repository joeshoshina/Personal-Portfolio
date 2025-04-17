import React from "react";
import movieVideo from "../assets/MovieSearchApp.mp4";
const MovieSearchApp = () => {
  return (
    <>
      <div className="text-center" id="projects-title">
        Movie Search App
      </div>
      <div className="ProjectDescriptionContainer">
        <video className="responsive-video" autoPlay loop>
          <source src={movieVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ProjectTextBox">
          <div className="TopBox">
            <div className="TopOutline">
              <div className="top-paragraphs">
                <span className="SpanTitle"> Project Description</span>
                <p className="TopDescription">
                  Movie Search App is a web application designed to showcase
                  smart search capabilities and display the top 50 trending
                  movies based on the current date. By integrating the TMDB API,
                  the app ensures the trending list is always up to date. This
                  project was built as a learning experience to deepen my
                  understanding of working with APIs, while also focusing on
                  creating a clean user interface and implementing smart,
                  user-friendly functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="BottomBox">
            <div className="BottomOutline">
              <div className="bottom-paragraphs">
                <span className="SpanTitle">Things I learned</span>
                <p className="BottomDescription">
                  This project helped me reinforce my skills in React, Vite, and
                  JSX, while also learning Tailwind CSS and how its
                  utility-first approach differs from Bootstrap. I gained
                  practical experience working with the TMDB API, which helped
                  me understand APIs as structured interfaces for accessing
                  databases. I also implemented useDebounce to optimize the
                  search function by reducing unnecessary API calls, improving
                  overall performance.
                </p>
              </div>
            </div>
            <div className="BottomOutline">
              <div className="bottom-paragraphs">
                <span className="SpanTitle">Future Features</span>
                <p className="BottomDescription">
                  <ul>
                    <li>
                      Top 5 Searched Movies: I plan to add a backend with a
                      database to track how many times each movie has been
                      searched. This will allow me to display the top 5 most
                      searched movies based on real user data.
                    </li>
                    <li>
                      Detailed Movie View: I want to enhance the search results
                      by allowing users to interact with a movie thumbnail to
                      view all available details provided by the TMDB API.
                      Currently, only the thumbnail and basic info like the
                      rating are shown.
                    </li>
                    <li>
                      Search History or Recent Searches: Let users see a list of
                      their recent searches for convenience and quicker
                      navigation.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSearchApp;

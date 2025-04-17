import React from "react";
import bondingVideo from "../assets/BondingGame.mp4";

const BondingGame = () => {
  return (
    <>
      <div className="text-center" id="projects-title">
        Bonding Game
      </div>
      <div className="ProjectDescriptionContainer">
        <video className="responsive-video" autoPlay loop>
          <source src={bondingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ProjectTextBox">
          <div className="TopBox">
            <div className="TopOutline">
              <div className="top-paragraphs">
                <span className="SpanTitle"> Project Description</span>
                <p className="TopDescription">
                  Bonding Game is designed to help couples ask bold and
                  meaningful questions without feeling vulnerable—using the card
                  format as a lighthearted excuse to explore deeper topics. The
                  game encourages connection, strengthens relationships, and
                  makes getting to know each other fun and exciting. It features
                  three themes: Perception, Connection, and Reflection. Each
                  theme includes 30 unique questions that are shuffled and
                  presented as a randomized stack.
                </p>
              </div>
            </div>
          </div>
          <div className="BottomBox">
            <div className="BottomOutline">
              <div className="bottom-paragraphs">
                <span className="SpanTitle">Things I learned</span>
                <p className="BottomDescription">
                  This project was a significant learning experience, where I
                  gained skills in the React ecosystem (React, Vite, JSX) and
                  best practices for component structure and state management
                  using hooks like useState and useEffect. I learned to
                  structure and update objects in state efficiently and how to
                  implement data structures like stacks in a React-friendly way.
                  Additionally, I gained confidence in using Git for version
                  control, styling with CSS and TailwindCSS, and breaking down
                  tasks into smaller, manageable steps to build scalable
                  solutions.
                </p>
              </div>
            </div>
            <div className="BottomOutline">
              <div className="bottom-paragraphs">
                <span className="SpanTitle">Future Features</span>
                <p className="BottomDescription">
                  <ul>
                    <li>
                      User-Generated Prompts: Allow users to add their own
                      prompts into the card stack.
                    </li>
                    <li>
                      Card Stack Visualization: Display a stack of cards,
                      similar to a physical deck, with cards decreasing as they
                      are used.
                    </li>
                    <li>
                      Friend-Specific Card Decks: Add functionality to switch
                      between card decks tailored for couples or friends,
                      ensuring questions are appropriate for each group.
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

export default BondingGame;

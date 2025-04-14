import React from "react";
import bondingVideo from "../assets/BondingGame.mp4";

const BondingGame = () => {
  return (
    <>
      <span className="BG">
        <div className="text-center" id="projects-title">
          BondingGame
        </div>
        <div className="BondingGameContainer">
          <video className="responsive-video" autoPlay loop>
            <source src={bondingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="ProjectTextBox">
            <div className="top-paragraphs">
              <span> Project Description</span>
              <p className="BondingGameDescription">
                Bonding Game is designed to help couples ask bold and meaningful
                questions without feeling vulnerable—using the card format as a
                lighthearted excuse to explore deeper topics. The game
                encourages connection, strengthens relationships, and makes
                getting to know each other fun and exciting. It features three
                themes: Perception, Connection, and Reflection. Each theme
                includes 30 unique questions that are shuffled and presented as
                a randomized stack.
              </p>
            </div>
            <div className="bottom-paragraphs">
              <div className="box">
                <span>Things I learned</span>
                <p>
                  This is bottom left d excuse to explore deeper topics. The
                  game encourages connection, strengthens relationships, and
                  makes getting to know each other fun ad excuse to explore
                  deeper topics. The game encourages connection, strengthens
                  relationships, and makes getting to know each other fun and
                  exciting. It features three themes: Perception, Connection,
                  and Reflection. Each theme includes 30 unique questions that
                  are shuffled and presented as a randomized stack.nd exciting.
                  It features three themes: Perception, Connection, and
                  Reflection. Each theme includes 30 unique questions that are
                  shuffled and presented as a randomized stack.
                </p>
              </div>
              <div className="box">
                <span>Future Features</span>
                <p>
                  This is bottom right d excuse to explore deeper topics. The
                  game encourages connection, strengthens relationships, and
                  makes getting to know each other fun and exciting. It features
                  three themes: Perception, Connection, and Reflection. Each
                  theme includes 30 unique questions that are shud excuse to
                  explore deeper topics. The game encourages connection,
                  strengthens relationships, and makes getting to know each
                  other fun and exciting. It features three themes: Perception,
                  Connection, and Reflection. Each theme includes 30 unique
                  questions that are shuffled and presented as a randomized
                  stack.ffled and presented as a randomized stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    </>
  );
};

export default BondingGame;

import React from "react";

const AboutMeCard = ({ description, img, altDescription }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={altDescription} />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutMeCard;

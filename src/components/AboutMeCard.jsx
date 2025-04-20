import React from "react";

const AboutMeCard = ({
  description,
  description2,
  description3,
  img,
  altDescription,
}) => {
  return (
    <>
      <div className="customCard" style={{ width: "18rem" }}>
        <div className="custom-card-img-top-container">
          <img src={img} className="custom-card-img-top" alt={altDescription} />
        </div>
        <div className="custom-card-body">
          <p className="custom-card-text TextTitle">{description}</p>
          <p className="custom-card-text">{description2}</p>
          <p className="custom-card-text">{description3}</p>
        </div>
      </div>
    </>
  );
};

export default AboutMeCard;

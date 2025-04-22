import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_HM_API_KEY;

const TestAPICall = () => {
  const [imageUrls, setImageUrls] = useState([]);
  // Grabs 2 random image objects from the Harvard Museum API
  const getImage = () => {
    axios
      .get(
        `https://api.harvardartmuseums.org/image?apikey=${API_KEY}&size=2&sort=random`
      )
      .then((res) => {
        const urls = res.data.records.map((record) => record.baseimageurl);
        setImageUrls(urls);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="center-box">
        <div className="text-center" id="projects-title">
          Harvard Art Museum
        </div>
        <div className="api-container mx-auto">
          <div className="img-container">
            <div className="img-box">
              <img
                className="img-fluid object-fit-cover w-100 h-100"
                src={imageUrls[0]}
                alt="Art piece from Harvard Museum"
              />
            </div>
            <div className="img-box">
              <img
                className="img-fluid object-fit-cover w-100 h-100"
                src={imageUrls[1]}
                alt="Art piece from Harvard Museum"
              />
            </div>
          </div>
          <button className="mt-4 mx-auto mb-2 img-button" onClick={getImage}>
            Find More Art Pieces!
          </button>
        </div>
      </div>
    </>
  );
};

export default TestAPICall;

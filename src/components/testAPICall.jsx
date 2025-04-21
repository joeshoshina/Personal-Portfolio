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
      <div className="testbutton">Test API Call</div>
      <button onClick={getImage}>Get Images</button>
      <img src={imageUrls[0]} />
    </>
  );
};

export default TestAPICall;

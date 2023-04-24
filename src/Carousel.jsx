import React, { useEffect, useState } from "react";
import axios from "axios";

export const Carousel = ({ width, height }) => {
  const [counter, setCounter] = useState(0);
  const [images, setImages] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [left, setLeft] = useState(0);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((response) => {
        console.log(response.data);
        setImages(response.data);
        setImageUrl(images[counter].download_url);
      })
      .then()
      .catch((error) => console.log(error));
  }, []);

  const nextImage = () => {
    setLeft(left - width);
  };

  const prevImage = () => {
    setLeft(left + width);
  };

  return (
    <div>
      <div
        className="image-container"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: "flex",
          flexDirection: "row",
          overflow: "hidden"
        }}
      >
        {images &&
          images.map((image, index) => (
            <div>
              {console.log(left)}
              <img
                className="image"
                src={images[index].download_url}
                alt="abcd"
                style={{
                  width: `${width}px`,
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  left: `${left}px`,
                  transition: "all 0.5s ease-in-out"
                }}
              />
            </div>
          ))}
      </div>
      <button onClick={prevImage}>Back</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

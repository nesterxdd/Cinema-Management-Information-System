import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

function CinemaFilm({ images, onClick, wrapperName = "posters-section", type }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/${type}/${index + 1}`);
  };

  return (
    <div className="cinema-film">
      <div className="vector">
        <div className="sq-wrapper">
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="square"></div>
          ))}
        </div>
      </div>
      <div className={`${wrapperName} img-wrapper`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cinema ${index + 1}`}
            className="cinema-image"
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="vector">
        <div className="sq-wrapper">
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="square"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CinemaFilm;

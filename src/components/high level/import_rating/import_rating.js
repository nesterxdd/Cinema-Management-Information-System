import "./import_rating.scss"; 
import React, { useState } from 'react';
import PrimaryButton from "../../low level/PrimaryButton";
import SecondaryButton from "../../low level/SecondaryButton";

function ImportRating() {
  const [rating, setRating] = useState(null); 
  const [isImported, setIsImported] = useState(false); 

  const handleAccept = () => {
  };

  const handleCancel = () => {
  };

  const handleImport = () => {
    setRating('5/5');
    setIsImported(true); 
  };

  return (
    <div className="import-rating">
      <h1>Movie Rating</h1>

      <div className="movie-details">
        <p><strong>Movie Name:</strong> Guardians of The Galaxy</p>
        {rating && <p><strong>Rating:</strong> {rating}</p>} {}
      </div>

      {!isImported && (
        <PrimaryButton onClick={handleImport}>Import</PrimaryButton>
      )}

      {isImported && (
        <div className="action-buttons">
          <PrimaryButton onClick={handleAccept}>Accept</PrimaryButton> {}
          <SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
        </div>
      )}
    </div>
  );
}

export default ImportRating;

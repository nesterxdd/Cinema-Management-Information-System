// CommentForm.js
import React, { useState } from "react";
import PrimaryButton from "../../low level/PrimaryButton";

function CommentForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment, rating); // Pass the comment and rating to the parent
    setComment(""); // Clear the comment
    setRating(0); // Reset rating
  };

  return (
    <form id="add-comment" onSubmit={handleSubmit}>
      <div className="rating">
        <label>Rating: </label>
        <div className="stars">☆☆☆☆☆</div>
      </div>

      <textarea
        className="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your review here..."
        rows="5"
      ></textarea>

      <PrimaryButton>Submit Comment</PrimaryButton>
    </form>
  );
}

export default CommentForm;

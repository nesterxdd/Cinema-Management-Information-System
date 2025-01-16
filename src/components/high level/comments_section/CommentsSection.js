// CommentsSection.js
import React, { useState } from "react";
import { initialComments } from "./data";
import PrimaryButton from "../../low level/PrimaryButton";
import CommentForm from "./CommentForm";
import Comment from "./SingleComment"; // Import the new Comment component
import "./styles.scss";

function CommentsSection() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [nickname, setNickname] = useState("");
  const [comments, setComments] = useState(initialComments);
  const [replyText, setReplyText] = useState("");
  const [loggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (comment, rating) => {
    const newComment = {
      id: Date.now(),
      nickname,
      comment,
      timestamp: new Date(),
      likes: 0,
      replies: [],
    };
    setComments([newComment, ...comments]);
    setRating(0);
    setNickname(""); // Reset nickname or handle as needed
  };

  const handleLike = (id) => {
    setComments(
      comments.map((commentObj) =>
        commentObj.id === id
          ? { ...commentObj, likes: commentObj.likes + 1 }
          : commentObj
      )
    );
  };

  const handleReply = (id, replyNickname, replyText) => {
    setComments(
      comments.map((commentObj) =>
        commentObj.id === id
          ? {
              ...commentObj,
              replies: [
                ...commentObj.replies,
                {
                  id: Date.now(),
                  nickname: replyNickname,
                  reply: replyText,
                  timestamp: new Date(),
                },
              ],
            }
          : commentObj
      )
    );
  };

  return (
    <div className="comments-section">
      <div className="section-header">{comments.length} comments</div>
      {loggedIn && (
        <CommentForm onSubmit={handleSubmitComment} />
      )}

      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((commentObj) => (
            <Comment
              key={commentObj.id}
              commentObj={commentObj}
              onLike={handleLike}
              onReply={handleReply}
              loggedIn={loggedIn}
            />
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default CommentsSection;

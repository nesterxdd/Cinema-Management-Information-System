// Comment.js (New file)

import React, { useState } from "react";
import Hexagon from "../../../assets/icons/hexagon-geometrical-shape-outline.svg";
import PrimaryButton from "../../low level/PrimaryButton";

function Comment({ commentObj, onLike, onReply, loggedIn }) {
  const [replyText, setReplyText] = useState("");
  const [replyNickname, setReplyNickname] = useState("");

  const handleReplyNicknameChange = (e) => {
    setReplyNickname(e.target.value);
  };

  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleSubmitReply = () => {
    if (replyText.trim() && replyNickname.trim()) {
      onReply(commentObj.id, replyNickname, replyText);
      setReplyText("");
      setReplyNickname("");
    }
  };

  return (
    <div key={commentObj.id} className="comment-item">
      <div className="comment-card">
        <img src={Hexagon} />
        <div className="comment-body">
          <div className="comment-header">
            <span className="nickname"> {commentObj.nickname} </span>
            <span className="timestamp">
              • {new Date(commentObj.timestamp).toLocaleString()} •
            </span>
          </div>
          <div className="comment-text">{commentObj.comment}</div>
          <div className="comment-rating">Rating: ★★★☆☆</div>
          <div className="actions">
            <div onClick={() => onLike(commentObj.id)}>
              👍 {commentObj.likes}
            </div>
            {loggedIn && (
              <div className="reply-input">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const replyBox = document.getElementById(
                      `reply-box-${commentObj.id}`
                    );
                    replyBox.style.display =
                      replyBox.style.display === "block" ? "none" : "block";
                  }}
                >
                  Reply
                </a>

                <div
                  id={`reply-box-${commentObj.id}`}
                  style={{ display: "none" }}
                  className="reply-box"
                >
                  <textarea
                    value={replyText}
                    onChange={handleReplyTextChange}
                    placeholder="Write your reply..."
                  ></textarea>
                  <PrimaryButton onClick={handleSubmitReply}>
                    Submit
                  </PrimaryButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="replies">
        {commentObj.replies.length > 0 && (
          <div className="replies-list">
            {commentObj.replies.map((reply) => (
              <div key={reply.id} className="comment-card">
                <img src={Hexagon} />
                <div className="comment-body">
                  <div className="comment-header">
                    <span className="nickname">{reply.nickname}</span>
                    <span className="timestamp">
                      {new Date(reply.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p>{reply.comment}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;

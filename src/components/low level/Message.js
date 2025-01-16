import React from "react";
import "./styles.scss";

function Message({ type, text, time }) {
  return (
    <div className={`dialog-message ${type}`}>
      <div className="dialog-header">
        <span className="user-name">{type === "me" ? "You" : "Friend"}</span>
        <span className="timestamp">{time}</span>
      </div>
      <div className="dialog-content">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Message;

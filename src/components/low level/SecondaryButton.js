import React from "react";
import "./styles.scss";

function SecondaryButton({ children, onClick }) {
  return (
    <button className="secondary" onClick={onClick}>
      {children}
    </button>
  );
}

export default SecondaryButton;

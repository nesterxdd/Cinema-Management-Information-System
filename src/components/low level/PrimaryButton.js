import React from "react";
import "./styles.scss";

function PrimaryButton({ children, onClick, type = "button" }) {
  return (
    <button className="primary" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;

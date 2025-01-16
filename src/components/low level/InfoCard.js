import React from "react";
import "./styles.scss";

function InfoCard({ header, value }) {
  return (
    <div className="info-card">
      <div className="header">{header}</div>
      <div className="location">{value}</div>
    </div>
  );
}

export default InfoCard;

import React from "react";

function PurchaseCard({ icon, text, children }) {
  return (
    <div className="purchase-card">
      <div className="purchase-card-icon">
        {icon && <img src={icon} alt="icon" />}
        {text && <span>{text}</span>}
      </div>
      <div className="purchase-card-text">{children}</div>{" "}
    </div>
  );
}

export default PurchaseCard;

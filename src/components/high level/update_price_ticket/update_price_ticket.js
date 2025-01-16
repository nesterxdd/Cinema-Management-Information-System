import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./update_price_ticket.scss";
import PrimaryButton from "../../low level/PrimaryButton";

function UpdatePriceTicket() {
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/update-ticket');
  };

  return (
    <div className="update-price-ticket">
      <h1>Update Ticket Price</h1>
      <div className="ticket-details">
        <p>Ticket ID: 101</p>
        <p>Old Price: $12.00</p>
      </div>

      <div className="price-input">
        <h2>Enter New Price:</h2>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          step="0.01"
          placeholder="Enter new price"
        />
      </div>

      <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
    </div>
  );
}

export default UpdatePriceTicket;

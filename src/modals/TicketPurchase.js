import React, { useState } from "react";
import PurchaseCard from "../components/low level/PurchaseCard";
import PrimaryButton from "../components/low level/PrimaryButton";
import SecondaryButton from "../components/low level/SecondaryButton";

import Clock from "../assets/icons/clock.svg";
import Bookmark from "../assets/icons/bookmark.svg";
import Price from "../assets/icons/tag.svg";
import GeoPin from "../assets/icons/geo-alt.svg";
import Email from "../assets/icons/envelope.svg";
import Ticket from "../assets/icons/ticket.svg";
import Number from "../assets/icons/123.svg";
import User from "../assets/icons/person-exclamation.svg";

const sessionDetails = {
  time: "16:00",
  title: "Django",
  cinemaName: "Lavina IMAX Laser",
  price: "$15",
  type: "SDH",
};

function TicketPurchase({
  closeModal,
  handleLoginRedirect,
  handleRegisterRedirect,
}) {
  const [numTickets, setNumTickets] = useState(1);
  const [ticketType, setTicketType] = useState("Standard");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePayment = () => {
    if (!isLoggedIn && !email) {
      alert("Please log in or provide an email address.");
      return;
    }
    window.location.href = "https://www.paysera.com/en-GB/transfer";
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const calculateTotalPrice = () => {
    let pricePerTicket = ticketType === "VIP" ? 20 : 15;
    return (pricePerTicket * numTickets).toFixed(2);
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        id="ticket-purchase"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">Confirm Your Purchase</div>

        <div className="purchase-wrapper">
          <div className="purchase-details">
            <PurchaseCard icon={Bookmark}>
              <div className="text">{sessionDetails.title}</div>
            </PurchaseCard>
            <PurchaseCard icon={Clock}>
              <div className="text">{sessionDetails.time}</div>
            </PurchaseCard>
            <PurchaseCard icon={GeoPin}>
              <div className="text">
                {`${sessionDetails.cinemaName}, ${sessionDetails.type}`}
              </div>
            </PurchaseCard>
            <PurchaseCard icon={Price}>
              <div className="text">{sessionDetails.price}</div>
            </PurchaseCard>
          </div>

          <div className="options-wrapper">
            <PurchaseCard icon={Number}>
              <input
                type="number"
                value={numTickets}
                onChange={(e) =>
                  setNumTickets(Math.min(Math.max(e.target.value, 1), 10))
                }
              />
            </PurchaseCard>

            <PurchaseCard icon={Ticket}>
              <select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option value="Standard">Standard</option>
                <option value="VIP">VIP</option>
              </select>
            </PurchaseCard>

            <PurchaseCard icon={Email}>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
            </PurchaseCard>

            {!isLoggedIn && (
              <PurchaseCard icon={User}>
                <div className="text">
                  Not logged in?
                  <span className="link" onClick={handleLoginRedirect}>
                    Log in
                  </span>{" "}
                  or
                  <span className="link" onClick={handleRegisterRedirect}>
                    {" "}
                    Register
                  </span>
                </div>
              </PurchaseCard>
            )}
          </div>
        </div>

        <div className="actions">
          <div className="text">Total: EUR{calculateTotalPrice()}</div>
          <div className="actions">
            <PrimaryButton onClick={handlePayment}>
              Proceed to Payment
            </PrimaryButton>
            <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketPurchase;

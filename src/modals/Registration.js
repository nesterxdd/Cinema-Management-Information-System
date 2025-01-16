import React from "react";
import PrimaryButton from "../components/low level/PrimaryButton";
import SecondaryButton from "../components/low level/SecondaryButton";

import "./styles.scss";

function RegisterModal({ closeModal, handleLoginRedirect }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">Register</div>
        <p>Sign up to access exclusive features and manage your bookings.</p>
        <form id="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="actions">
            <PrimaryButton type="submit">Register</PrimaryButton>
            <SecondaryButton type="button" onClick={closeModal}>
              Cancel
            </SecondaryButton>
          </div>
        </form>
        <div className="footer">
          <p>
            Already have an account?{" "}
            <span className="link" onClick={handleLoginRedirect}>
              Log in here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;

import React from "react";
import PrimaryButton from "../components/low level/PrimaryButton";
import SecondaryButton from "../components/low level/SecondaryButton";

function LoginModal({ closeModal, handleRegisterRedirect, onLoginSuccess }) {
  const handleSubmit = (event) => {
    //event.preventDefault();
    // Handle login submit logic here
    onLoginSuccess();
    closeModal();
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">Login</div>
        <p>Log in to manage your bookings and explore the latest movies.</p>
        <form id="login-form" onSubmit={handleSubmit}>
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

          <div className="actions">
            <PrimaryButton type="submit">Log In</PrimaryButton>
            <SecondaryButton type="button" onClick={closeModal}>
              Cancel
            </SecondaryButton>
          </div>
        </form>
        <div className="footer">
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={handleRegisterRedirect}>
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;

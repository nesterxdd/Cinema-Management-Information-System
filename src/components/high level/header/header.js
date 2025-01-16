import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Logo from "../../../assets/icons/FC_logo_1.png";
import PrimaryButton from "../../low level/PrimaryButton";
import SecondaryButton from "../../low level/SecondaryButton";

import LoginModal from "../../../modals/Login";
import RegisterModal from "../../../modals/Registration";

import "./styles.scss";

function Header() {
  const navigate = useNavigate();


  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  });

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true)); // Store in localStorage
    window.location.reload();
  };

  const handleRegisterRedirect = () => {
    closeLoginModal();
    openRegisterModal();
  };

  const handleLoginRedirect = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false)); // Update localStorage
    navigate('/');
  };

  const tempUserRedirect = () => navigate('/user');

  return (
    <header className="App-header">
      <nav>
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
        {!isLoggedIn && (
          <div className="auth">
          <SecondaryButton onClick={openRegisterModal}>
            Register
          </SecondaryButton>
          <PrimaryButton onClick={openLoginModal}>Log In</PrimaryButton>
        </div>
        )}
        {isLoggedIn && (
          <div className="auth">
          <SecondaryButton onClick={tempUserRedirect}>
            User profile
          </SecondaryButton>
          <PrimaryButton onClick={handleLogOut}>Log Out</PrimaryButton>
        </div>
        )}
      </nav>

      {showLoginModal && (
        <LoginModal
          closeModal={closeLoginModal}
          handleRegisterRedirect={handleRegisterRedirect}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          closeModal={closeRegisterModal}
          handleLoginRedirect={handleLoginRedirect}
        />
      )}
    </header>
  );
}

export default Header;

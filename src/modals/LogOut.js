import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/low level/PrimaryButton";
import SecondaryButton from "../components/low level/SecondaryButton";
import "./styles.scss";

function LogoutModal({ closeModal, confirmLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    confirmLogout(); 
    navigate("/"); 
  };

  const closeWithoutLoggingOut = (e) => {
    e.stopPropagation(); 
    closeModal(); 
  };

  return (
    <div className="modal-overlay" onClick={closeWithoutLoggingOut}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="header">Log Out</div>
        <p className="text">Are you sure you want to log out?</p>
        <div className="button-group">
          <PrimaryButton onClick={handleLogout}>Yes, Log Out</PrimaryButton>
          <SecondaryButton onClick={closeWithoutLoggingOut}>Cancel</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;

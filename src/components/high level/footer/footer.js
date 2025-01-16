import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "../../../assets/icons/FC_logo_1.png";
import "./styles.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-description">
          <p>
            This website is a cinema management system created as a pet project
            by students. It allows users to explore a curated selection of
            films, manage showtimes, and book tickets, providing a unique cinema
            experience. This project is intended for learning and demonstration
            purposes only.
          </p>
          <p className="footer-disclaimer">
            DISCLAIMER: This project is for educational purposes only and is not
            intended for commercial or production use.
          </p>
        </div>
        <div className="footer-team">
          <div className="footer-header">Project Team</div>
          <div>
            <div>Anastasiia Ivanchenko</div>
            <div>Mykola Isaev</div>
            <div>Danylo Kost</div>
            <div>Yehor Nesterenko</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

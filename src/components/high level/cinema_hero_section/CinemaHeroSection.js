import React, { useState } from "react";
import Poster from "../../../assets/cinema_images/1.jpg";
import Metadata from "./Metadata";
import TicketPurchase from "../../../modals/TicketPurchase";
import LoginModal from "../../../modals/Login";
import RegisterModal from "../../../modals/Registration";

import { staticSchedule } from "./data";

import "./styles.scss";

function MovieHeroSection() {
  const [schedule, setSchedule] = useState(staticSchedule);
  const [selectedDay, setSelectedDay] = useState(schedule[0].date);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const [showModal, setShowModal] = useState(false);

  const openPurchaseModal = () => setShowModal(true);
  const closePurchaseModal = () => setShowModal(false);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);

  const handleRegisterRedirect = () => {
    closeLoginModal();
    closePurchaseModal();
    openRegisterModal();
  };

  const handleLoginRedirect = () => {
    closeRegisterModal();
    closePurchaseModal();
    openLoginModal();
  };

  const [selectedDate, setSelectedDate] = useState(staticSchedule[0].date); // Default to the first date

  const selectedSchedule = staticSchedule.find(
    (schedule) => schedule.date === selectedDate
  );

  return (
    <div className="cinema-hero">
      <div className="sidebar">
        <img src={Poster} alt="Poster" />
        <Metadata />
      </div>

      <div className="main-bar">
        <div className="header">Lavina IMAX Laser</div>
        <div className="schedule">
          <div className="date-selector">
            <label htmlFor="date-select" className="cinema-title">
              Select Date:
            </label>
            <select
              id="date-select"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              {staticSchedule.map((schedule) => (
                <option key={schedule.date} value={schedule.date}>
                  {schedule.date}
                </option>
              ))}
            </select>
          </div>

          <div className="cinema">
            {selectedSchedule.movies.map((movie) => (
              <div key={movie.title} className="movie-wrapper">
                <div className="cinema-title">{movie.title}</div>
                <div className="sessions">
                  {movie.sessions.map((session, index) => (
                    <div
                      key={index}
                      className="session"
                      onClick={openPurchaseModal}
                    >
                      <span className="session-time">{session.time}</span>
                      <span className="session-type">{session.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <TicketPurchase
          closeModal={closePurchaseModal}
          handleLoginRedirect={handleLoginRedirect}
          handleRegisterRedirect={handleRegisterRedirect}
        />
      )}
      {showLoginModal && (
        <LoginModal
          closeModal={closeLoginModal}
          handleRegisterRedirect={handleRegisterRedirect}
        />
      )}
      {showRegisterModal && (
        <RegisterModal
          closeModal={closeRegisterModal}
          handleLoginRedirect={handleLoginRedirect}
        />
      )}
    </div>
  );
}

export default MovieHeroSection;

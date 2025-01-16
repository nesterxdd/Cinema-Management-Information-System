import React, { useState } from "react";
import SecondaryButton from "../../low level/SecondaryButton";
import Poster from "../../../assets/movie_posters/2.jpg";
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

  const selectedSchedule = schedule.find((item) => item.date === selectedDay);

  return (
    <div className="movie-hero">
      <div className="sidebar">
        <img src={Poster} alt="Poster" />
        <SecondaryButton>Watch trailer</SecondaryButton>
      </div>
      <Metadata />
      <div className="schedule">
        <div className="header">Movie Schedule</div>
        <select onChange={handleDayChange} value={selectedDay}>
          {schedule.map((item, index) => (
            <option key={index} value={item.date}>
              {item.date}
            </option>
          ))}
        </select>

        {selectedSchedule.cinemas.length > 0 ? (
          selectedSchedule.cinemas.map((cinema, index) => (
            <div key={index} className="cinema-schedule">
              <h4>{cinema.name}</h4>
              <div className="sessions">
                {cinema.sessions.length > 0 ? (
                  cinema.sessions.map((session, index) => (
                    <div
                      key={index}
                      className="session"
                      onClick={openPurchaseModal}
                    >
                      <span>{session.time}</span>
                      <span>{session.type}</span>
                    </div>
                  ))
                ) : (
                  <p>No sessions available</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No cinemas available for this day</p>
        )}
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

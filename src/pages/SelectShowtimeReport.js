// src/pages/SelectShowtimeReport.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import '../components/high level/create_report_section/SelectShowtimeReport.scss';

const SelectShowtimeReport = () => {
  const navigate = useNavigate();

  const handleSelectShowtime = (showtimeId) => {
    console.log(`Selected Showtime ID: ${showtimeId}`);
    navigate('/report/1'); 
  };

  // Sample showtimes (you will replace this with real data from the DB)
  const showtimes = [
    { id: 1, date: '2024-11-11 14:30', movie: 'Movie 1' },
    { id: 2, date: '2024-11-11 16:30', movie: 'Movie 2' },
    { id: 3, date: '2024-11-12 18:00', movie: 'Movie 3' },
  ];

  const isLoggedIn = true;  
  const isAdmin = true;     

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="select-showtime-report-page">
        <h1>Select Showtime for Report</h1>

        {/* Table displaying showtimes */}
        <table className="showtime-table">
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Movie</th>
            </tr>
          </thead>
          <tbody>
            {showtimes.map((showtime) => (
              <tr key={showtime.id} onClick={() => handleSelectShowtime(showtime.id)}>
                <td>{showtime.date}</td>
                <td>{showtime.movie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default SelectShowtimeReport;

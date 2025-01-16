// src/pages/CreateReportType.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/low level/PrimaryButton';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import '../components/high level/create_report_section/CreateReportType.scss';

const CreateReportType = () => {
  const navigate = useNavigate();

  const handleSelectShowtimeReport = () => {
    navigate('/select-showtime-report');
  };

  const handleSelectMovieReport = () => {
    navigate('/select-movie-report');
  };
  const isLoggedIn = true;  
  const isAdmin = true;     

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="create-report-type-page">
        <h1>Select Report Type</h1>
        <p>Please choose the type of report you would like to create:</p>

        <div className="report-type-actions">
          <PrimaryButton onClick={handleSelectShowtimeReport}>
            Create Showtime Report
          </PrimaryButton>
          <PrimaryButton onClick={handleSelectMovieReport}>
            Create Movie Report
          </PrimaryButton>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateReportType;

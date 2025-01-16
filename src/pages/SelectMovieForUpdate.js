import React from 'react';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import SelectMovieReport from '../components/high level/create_report_section/SelectMovieReport';


const SelectMovieForUpdate = () => {
  const isLoggedIn = true;  
  const isAdmin = true;     
  return (
    
    <>
    
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="select-movie-for-update-page">
        <SelectMovieReport actionType="update-movie" />
      </div>
      <Footer />
    </>
  );
};

export default SelectMovieForUpdate;

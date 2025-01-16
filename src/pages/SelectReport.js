// src/pages/SelectReport.js

import SelectReport from "../HighLevel";

const SelectReportPage = () => {
  const isLoggedIn = true;  
  const isAdmin = true;     
  return (
    <>
       <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="page">
        <SelectReport />
      </div>
      <Footer />
    </>
  );
};

export default SelectReportPage;

import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../low level/PrimaryButton";
import Header from '../header/header';
import Footer from '../footer/footer';
import "./SelectReport.scss";

const SelectReport = () => {
  const navigate = useNavigate();

  const handleSelectShowtime = () => {
    navigate('/select-showtime-report');
  };

  const handleSelectMovie = () => {
    navigate('/select-movie-report');
  };

  const handleReportClick = (reportId) => {
    navigate(`/report/${reportId}`);
  };

  const isLoggedIn = true;
  const isAdmin = true;

  const reports = [
    { id: 1, showtime: '2024-11-11 14:30', movie: 'Movie 1', ticketsSold: 120 },
    { id: 2, showtime: '2024-11-11 16:30', movie: 'Movie 2', ticketsSold: 85 },
    { id: 3, showtime: '2024-11-12 18:00', movie: 'Movie 3', ticketsSold: 200 },
  ];

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="select-report-page">
        <div className="page-title">
          <h1>Select Report</h1>
        </div>

        <div className="report-actions">
          <PrimaryButton onClick={handleSelectShowtime}>Select Showtime</PrimaryButton>
          <PrimaryButton onClick={handleSelectMovie}>Select Movie</PrimaryButton>
        </div>

        <table className="reports-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Showtime</th>
              <th>Movie</th>
              <th>Tickets Sold</th>
              <th>Actions</th> {/* New column for the export button */}
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.showtime}</td>
                <td>{report.movie}</td>
                <td>{report.ticketsSold}</td>
                <td>
                  <button className="export-btn">Export to CSV</button> {/* Button added here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default SelectReport;

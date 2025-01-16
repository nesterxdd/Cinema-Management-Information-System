import { useParams } from 'react-router-dom';
import Header from "../components/high level/header/header";
import Footer from "../components/high level/footer/footer";
import InfoCard from "../components/low level/InfoCard";
import "../components/high level/report_section/ReportPage.scss";

function Report() {
  const { reportId } = useParams();

  const isLoggedIn = true;  
  const isAdmin = true;     

  const reportDetails = {
    id: reportId,
    tickets: [
      { ticketId: "001", seat: "A1", clientName: "John", clientSurname: "Doe", phone: "(123) 456-7890", price: "$10.00" },
      { ticketId: "002", seat: "A2", clientName: "Jane", clientSurname: "Smith", phone: "(987) 654-3210", price: "$12.00" },
    ],
    totalTickets: 2,
    totalRevenue: "$22.00",
    mostRecentClient: "Jane Smith"
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="pagereport">
        <div className="report-header">
          <h1 className="report-title">Report Details</h1>
          <p className="report-description">
            Below are the details for the selected report.
          </p>
        </div>

        <div className="report-table-wrapper">
          <table className="report-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Seat Number</th>
                <th>Client Name</th>
                <th>Client Surname</th>
                <th>Phone</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {reportDetails.tickets.map((ticket) => (
                <tr key={ticket.ticketId}>
                  <td>{ticket.ticketId}</td>
                  <td>{ticket.seat}</td>
                  <td>{ticket.clientName}</td>
                  <td>{ticket.clientSurname}</td>
                  <td>{ticket.phone}</td>
                  <td>{ticket.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="report-summary">
          <div className="section-header">Summary</div>
          <div className="summary-cards">
            <InfoCard header="Total Tickets" value={reportDetails.totalTickets} />
            <InfoCard header="Total Revenue" value={reportDetails.totalRevenue} />
            <InfoCard header="Most Recent Client" value={reportDetails.mostRecentClient} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Report;
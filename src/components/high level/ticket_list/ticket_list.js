import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../low level/PrimaryButton";
import Header from '../header/header';
import Footer from '../footer/footer';
import "./ticket_list.scss";

const TicketList = ({ viewTicketDetailsRoute }) => {
  const navigate = useNavigate();

  const tickets = [
    { ticket_id: 101, date: "2024-11-11", price: "$12.00" },
    { ticket_id: 102, date: "2024-11-12", price: "$15.50" },
    { ticket_id: 103, date: "2024-11-13", price: "$10.75" },
  ];

  const handleViewDetails = (ticketId) => {
    navigate(`${viewTicketDetailsRoute}/${ticketId}`);
  };

  return (
    <>
      <Header />
      <div className="ticket-list-page">
        <div className="page-title">
          <h1>Ticket List</h1>
        </div>

        <table className="ticket-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticket_id}>
                <td>{ticket.ticket_id}</td>
                <td>{ticket.date}</td>
                <td>{ticket.price}</td>
                <td className="ticket-actions">
                  <PrimaryButton onClick={() => handleViewDetails(ticket.ticket_id)}>View Details</PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default TicketList;

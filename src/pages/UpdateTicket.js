import Footer from "../components/high level/footer/footer";
import Header from "../components/high level/header/header";
import TicketList from "../components/high level/ticket_list/ticket_list";

const viewTicketDetailsRoute = "/update-ticket";

function UpdateTicket() {
  return (
    <>
    <Header />

      <div className="page">
      <TicketList viewTicketDetailsRoute={viewTicketDetailsRoute} />
      </div>

    </>
  );
}
  
export default UpdateTicket;
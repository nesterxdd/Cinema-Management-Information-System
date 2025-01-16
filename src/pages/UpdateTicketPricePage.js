import Footer from "../components/high level/footer/footer";
import Header from "../components/high level/header/header";
import UpdatePriceTicket from "../components/high level/update_price_ticket/update_price_ticket";


function UpdateTicketPricePage() {
  return (
    <>
    <Header />

      <div className="page">
      <UpdatePriceTicket/>
      </div>

    <Footer />
    </>
  );
}
  
export default UpdateTicketPricePage;
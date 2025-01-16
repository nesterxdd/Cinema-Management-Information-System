import Header from "../components/high level/header/header"
import Footer from "../components/high level/footer/footer";
import Action from "../components/low level/Action.js";
import "../components/high level/ticket_agent_menu/ticket_agent_menu.scss";

import img1 from "../assets/ticket_agent_subsystem_icons/update_schedule.png";
import img2 from "../assets/ticket_agent_subsystem_icons/verify_ticket.png";
import img3 from "../assets/ticket_agent_subsystem_icons/verify_feedback.png";
import img4 from "../assets/ticket_agent_subsystem_icons/import_rating.png";

const functions = [
    { 
        name: "Update Schedule", 
        logo: img1, 
        description: "Update schedule for selected movies.", 
        link: "/update-schedule" 
      },
      { 
        name: "Verify Ticket", 
        logo: img2, 
        description: "Scan ticket to verify.", 
        link: "/verify-ticket" 
      },
    { 
        name: "Verify Feedback", 
        logo: img3, 
        description: "Verify selected feedbacks.", 
        link: "/verify-feedback" 
      },
      { 
        name: "Import Rating", 
        logo: img4, 
        description: "Import rating for selected movies from IMDb service.", 
        link: "/import-rating" 
      },
  ];

function TicketAgentMenu() {
  return (
    <>
      <Header />
      <div className="page">

      <div className="actions-list">
          <Action functions={functions} />
        </div>

      <Footer />
      </div>
    </>
  );
}
  
export default TicketAgentMenu;
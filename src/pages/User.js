import { Outlet } from "react-router-dom";
import Header from "../components/high level/header/header";
import Footer from "../components/high level/footer/footer";

import UserData from "../components/high level/user_data/UserData";
import UserTickets from "../components/high level/user_tickets/UserTickets";

function User() {
    return (
      <>
        <Header />
        <div className="page">
          <UserData />
          <UserTickets />
          <Footer />
        </div>
        <Outlet />
      </>
    );
  }
  
  export default User;
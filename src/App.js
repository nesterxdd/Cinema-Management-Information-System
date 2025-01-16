import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cinema from "./pages/Cinema";
import Movie from "./pages/Movie";
import PurchaseModal from "./modals/TicketPurchase";
import Report from "./pages/Report";
import SelectReport from "./components/high level/select_report_section/SelectReport";
import UserList from "./pages/UserLists";
import ManagePermissions from "./pages/ManagePermissions";
import LogoutModal from "./modals/LogOut";
import CreateReportType from './pages/CreateReportType'; 
import SelectShowtimeReport from './pages/SelectShowtimeReport'; 
import SelectMovieReportPage from './pages/SelectMovieReportPage'; 
import AdminPanel from "./pages/AdminPanel";
import UpdateMovieMetadata from "./pages/UpdateMovieMetadata";
import SelectMovieForUpdate from "./pages/SelectMovieForUpdate";
import LoginModal from "./modals/Login";
import RegisterModal from "./modals/Registration";
import User from "./pages/User";
import LoginModal from "./modals/Login";
import RegisterModal from "./modals/Registration";
import TicketAgentMenu from "./pages/TicketAgentMenu";
import VerifyFeedback from "./pages/VerifyFeedback";
import VerifyTicket from "./pages/VerifyTicket";
import UpdateSchedule from "./pages/UpdateSchedule";
import UpdateScheduleMoviePage from './pages/UpdateScheduleMoviePage';
import ImportRatingPage from "./pages/ImportRatingPage";
import UpdateTicket from "./pages/UpdateTicket";
import UpdateTicketPricePage from "./pages/UpdateTicketPricePage";
import CreateCinema from "./pages/CreateCinema";
import TicketEdit from "./modals/TicketEdit";
import TicketRefund from "./modals/TicketRefund";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cinema/1" element={<Cinema />} />
          <Route path="/movie/2" element={<Movie />}>
          <Route path="logout-modal" element = {<LogoutModal />} />
          <Route path="login-modal" element={<LoginModal />} />
          <Route path="register-modal" element={<RegisterModal />} />

            <Route
              path="purchase/:time/:cinemaName/:sessionId"
              element={<PurchaseModal />}
            />
          </Route>
          <Route path="/single-cinema" element={<Cinema />} />
          <Route path="/movie/2" element={<Movie />} />
          <Route path="/report/:reportId" element={<Report />} /> 
          <Route path="/select-report" element={<SelectReport />} />  
          <Route path="/user-list" element={<UserList />} />
          <Route path="/manage-permissions/:client_id" element={<ManagePermissions />} />
          <Route path="/create-report-type" element={<CreateReportType />} /> 
          <Route path="/select-showtime-report" element={<SelectShowtimeReport />} /> 
          <Route path="/select-movie-report" element={<SelectMovieReportPage />} /> 
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/update-movie-metadata/:movieId" element={<UpdateMovieMetadata />} />
          <Route path="/select-movie" element={<SelectMovieForUpdate />} />


          <Route path="/user" element={<User />} />
          <Route path="/ticket-edit" element={<TicketEdit />} />
          <Route path="/ticket-refund" element={<TicketRefund />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

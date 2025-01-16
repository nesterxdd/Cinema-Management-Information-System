import Footer from "../components/high level/footer/footer";
import Header from "../components/high level/header/header";
import UpdateScheduleMovie from "../components/high level/update_schedule_movie/update_schedule_movie";


function UpdateScheduleMoviePage() {
  return (
    <>
    <Header />

      <div className="page">
      <UpdateScheduleMovie/>
      </div>

    <Footer />
    </>
  );
}
  
export default UpdateScheduleMoviePage;
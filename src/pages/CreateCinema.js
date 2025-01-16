import CinemaForm from "../components/high level/cinema_form/cinema_form";
import Header from "../components/high level/header/header";
import Footer from "../components/high level/footer/footer";

function CreateCinema() {
  return (
    <>
      <Header />
      <div className="page">

      <CinemaForm />

      <Footer />
      </div>
    </>
  );
}
  
export default CreateCinema;
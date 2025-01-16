import Header from "../components/high level/header/header";
import CinemaHeroSection from "../components/high level/cinema_hero_section/CinemaHeroSection";

function Cinema() {
  return (
    <>
      <Header />
      <div className="page">
        <CinemaHeroSection />
      </div>
    </>
  );
}

export default Cinema;

import { Outlet } from "react-router-dom";
import Header from "../components/high level/header/header";
import CinemaFilm from "../components/low level/CinemaFilm";
import Footer from "../components/high level/footer/footer";
import InfoCard from "../components/low level/InfoCard";

import HeroSection from "../components/high level/hero_section/HeroSection";
import Blog from "../components/high level/blog_section/Blog";

import img1 from "../assets/cinema_images/1.jpg";
import img2 from "../assets/cinema_images/2.jpg";
import img3 from "../assets/cinema_images/3.jpg";
import img4 from "../assets/cinema_images/4.jpg";

import fimg1 from "../assets/movie_posters/1.jpg";
import fimg2 from "../assets/movie_posters/2.jpg";
import fimg4 from "../assets/movie_posters/4.jpeg";
import fimg5 from "../assets/movie_posters/5.jpg";
import fimg6 from "../assets/movie_posters/6.jpg";

const cinemaImages = [img1, img2, img3, img4];

const moviePosters = [fimg1, fimg2, fimg4, fimg5, fimg6];

function Home() {
  return (
    <>
      <Header />
      <div className="page">
        <HeroSection />

        <div className="movie-section">
          <div className="section-header">Select movies</div>
          <CinemaFilm images={moviePosters} type={"movie"} />
        </div>

        <Blog />

        <div className="cinemas-section">
          <div className="section-header">Select places</div>
          <CinemaFilm
            images={cinemaImages}
            wrapperName={"cinema-wrapper"}
            type={"cinema"}
          />
        </div>

        <div className="statistics-section">
          <InfoCard header="Cinemas in Total" value="110+" />
          <InfoCard header="Total Movies Shown" value="154" />
          <InfoCard header="Registered Users" value="5,000+" />
          <InfoCard header="Tickets Sold" value="25,000+" />
        </div>

        <Footer />
      </div>
      <Outlet />
    </>
  );
}

export default Home;

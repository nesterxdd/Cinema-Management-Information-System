import DoubleArraowIcon from "../../../assets/icons/double_arroew_downsvg.png";
import "./styles.scss";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-slogan">
        <p>
          Discover Cinema <br /> Like Never Before
        </p>
      </div>
      <div className="hero-description">
        <div className="description">
          <p>
            Our cinema management system provides a unique experience, allowing
            you to explore a curated selection of films, manage showtimes, and
            book tickets effortlessly. Experience the magic of cinema, crafted
            by storytellers across the globe.
          </p>
        </div>
        <div className="scroll-prompt">
          <p>Explore Now</p>
          <img
            className="scroll-arrow"
            src={DoubleArraowIcon}
            alt="Arrow Down"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

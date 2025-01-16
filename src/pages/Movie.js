import Header from "../components/high level/header/header";
import MovieHeroSection from "../components/high level/movie_hero_section/MoviewHeroSection";
import CommentsSection from "../components/high level/comments_section/CommentsSection";

function Movie() {
  return (
    <>
      <Header />
      <div className="page">
        <MovieHeroSection />
      </div>
      <CommentsSection />
    </>
  );
}

export default Movie;

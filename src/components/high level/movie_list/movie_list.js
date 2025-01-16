import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../../low level/PrimaryButton";
import Header from '../header/header';
import Footer from '../footer/footer';
import "./movie_list.scss";

const MovieList = ({ verifyTicketRoute }) => {
  const navigate = useNavigate();

  const movies = [
    { id: 1, name: "Star Wars", cinema: "Cinema 1", hall: "Hall A", time: "2024-11-11 15:00" },
    { id: 2, name: "Inception", cinema: "Cinema 2", hall: "Hall B", time: "2024-11-11 17:00" },
    { id: 3, name: "The Matrix", cinema: "Cinema 3", hall: "Hall C", time: "2024-11-11 19:00" },
  ];

  const handleManage = (movieId) => {
    navigate(`${verifyTicketRoute}/${movieId}`);
  };

  return (
    <>
      <Header />
      <div className="movie-list-page">
        <div className="page-title">
          <h1>Available Movies</h1>
        </div>

        <table className="movie-table">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Cinema</th>
              <th>Hall</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.name}</td>
                <td>{movie.cinema}</td>
                <td>{movie.hall}</td>
                <td>{movie.time}</td>
                <td className="movie-actions">
                  <PrimaryButton onClick={() => handleManage(movie.id)}>Manage</PrimaryButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MovieList;

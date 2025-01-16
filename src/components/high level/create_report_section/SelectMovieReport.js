import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectMovieReport.scss';

const SelectMovieReport = ({ actionType }) => {
  const navigate = useNavigate();

  const handleMovieSelect = (movieId) => {
    if (actionType === "update-movie") {
      navigate(`/update-movie-metadata/${movieId}`);
    } else if (actionType === "create-report") {
      navigate(`/report/${movieId}`);
    }
  };

  return (
    <div className="select-movie-report">
      <h2>Select Movie</h2>
      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, title: 'Movie 1', releaseDate: '2024-01-01' },
            { id: 2, title: 'Movie 2', releaseDate: '2024-02-01' }
          ].map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>
                <button className="select-button" onClick={() => handleMovieSelect(movie.id)}>
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectMovieReport;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/high level/header/header';
import Footer from '../components/high level/footer/footer';
import '../components/high level/update_movie_metadata/UpdateMovieMetadata.scss'

const UpdateMovieMetadata = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const isLoggedIn = true;  
  const isAdmin = true;     


  // Initialize state with empty fields
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    ageRestriction: '',
    duration: '',
    startRental: '',
    endRental: ''
  });

  useEffect(() => {
    // Mock API call to fetch movie data by movieId
    const fetchMovieData = () => {
      const mockMovieData = {
        title: 'Movie 1',
        description: 'A thrilling adventure movie.',
        ageRestriction: 'PG-13',
        duration: '120 mins',
        startRental: '2024-11-01',
        endRental: '2024-11-30',
      };
      setMovie(mockMovieData); // Populate form with mock data
    };

    fetchMovieData();
  }, [movieId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Movie Metadata:', movie);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <div className="update-movie-metadata">
        <h1>Update Movie Metadata</h1>
        <form onSubmit={handleSubmit} className="movie-metadata-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={movie.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={movie.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ageRestriction">Age Restriction</label>
            <input
              type="text"
              id="ageRestriction"
              name="ageRestriction"
              value={movie.ageRestriction}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="startRental">Start Rental Date</label>
            <input
              type="date"
              id="startRental"
              name="startRental"
              value={movie.startRental}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endRental">End Rental Date</label>
            <input
              type="date"
              id="endRental"
              name="endRental"
              value={movie.endRental}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Update Movie</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateMovieMetadata;

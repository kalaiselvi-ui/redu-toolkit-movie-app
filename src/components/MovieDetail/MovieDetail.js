import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams(); // Extract imdbID from the route

  // Select the movie data from Redux store
  const movie = useSelector((state) =>
    state.movies.movies.find((movie) => movie.imdbID === imdbID)
  );

  if (!movie) {
    return <div>Movie not found!</div>; // Show error message if the movie is not found
  }

  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieDetail;

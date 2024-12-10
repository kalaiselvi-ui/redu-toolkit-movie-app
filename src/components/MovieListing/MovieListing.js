import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlics";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  console.log("Movies in MovieListing:", movies); // Debug Redux state

  let renderMovies = "";

  renderMovies =
    movies && movies.length > 0 ? (
      movies.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-err">
        <h3>No movies found.</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;

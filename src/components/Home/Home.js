import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/apis/movieApi";
import APIkey from "../../common/apis/movieApikey";
import { addMovies } from "../../features/movies/movieSlics";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;

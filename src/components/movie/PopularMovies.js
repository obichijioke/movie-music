import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCardwithButton from "./MovieCardwithButton";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1"
      );
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full mt-5">
      <p className="my-4 font-bold text-lg">Popular Movies</p>
      <div className="flex flex-wrap justify-between">
        {movies != null &&
          movies.map((item, i) => {
            return (
              <div key={i} className="w-[15%] mb-3">
                <MovieCard
                  showOverview
                  title={item.title}
                  poster={item.poster_path}
                  vote={item.vote_average}
                  vote_count={item.vote_count}
                  overview={item.overview}
                  id={item.id}
                  release_date={item.release_date}
                  link={`/movie/${item.id}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PopularMovies;

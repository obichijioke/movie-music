import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCardwithButton from "./MovieCardwithButton";
const NowPlaying = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1"
      );
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <p className="my-3 font-bold text-lg">Now Playing</p>
      <div className="flex flex-wrap justify-between">
        {movies != null &&
          movies.map((item, i) => {
            if (i < 3) {
              return (
                <div key={i} className="w-[32%] mb-2">
                  <MovieCardwithButton
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
            }
          })}
      </div>
    </div>
  );
};

export default NowPlaying;

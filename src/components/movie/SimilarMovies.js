import React, { useEffect } from "react";
import axios from "axios";
import MovieCardwithButton from "./MovieCardwithButton";
import { useState } from "react";

const SimilarMovies = ({ id, limit }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (id != undefined) {
      getSimilarMovies(id);
    }
  }, [id]);

  const getSimilarMovies = async (id) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US&page=1`
      );
      setMovies(res.data.results);
    } catch (error) {}
  };
  return (
    <div className="flex gap-1">
      {movies &&
        movies.map((item, i) => {
          if (i < limit) {
            return (
              <MovieCardwithButton
                key={i}
                showOverview
                title={item.title}
                poster={item.poster_path}
                vote={item.vote_average}
                vote_count={item.vote_count}
                id={item.id}
                release_date={item.release_date}
                playButton="Watch"
                link={`/movie/${item.id}`}
              />
            );
          }
        })}
    </div>
  );
};

SimilarMovies.defaultProps = {
  limit: 2,
};

export default SimilarMovies;

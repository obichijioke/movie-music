import React from "react";
import WithNavs from "../components/layout/WithNavs";
import PopularMovies from "../components/movie/PopularMovies";
import NowPlaying from "../components/movie/NowPlaying";

const Movie = () => {
  return (
    <div className="text-white flex">
      <div className="w-1/5 p-3 h-[200px]">
        <div className="bg-[#ffffff0a] w-full h-full rounded-lg"></div>
      </div>
      <div className="w-4/5 p-3">
        <NowPlaying />
        <PopularMovies />
      </div>
    </div>
  );
};

export default WithNavs(Movie);

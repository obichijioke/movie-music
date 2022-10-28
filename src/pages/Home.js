import React from "react";
import WithNavs from "../components/layout/WithNavs";
import WatchButton from "../components/movie/WatchButton";
import MovieCardwithButton from "../components/movie/MovieCardwithButton";
import MovieCard from "../components/movie/MovieCard";
import MusicPlayer from "../components/music/MusicPlayer/MusicPlayer";

const Home = () => {
  return (
    <div className="relative">
      <WatchButton />
      <MovieCardwithButton />
      <MovieCard />
      <MusicPlayer />
    </div>
  );
};

export default WithNavs(Home);

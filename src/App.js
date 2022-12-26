import "./App.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import {
  Movie,
  Home,
  Music,
  TV,
  MovieDetails,
  Playlist,
  Album,
  Song,
  Artist,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/music" element={<Music />} />
      <Route exact path="/music/song" element={<Song />} />
      <Route exact path="/music/album" element={<Album />} />
      <Route exact path="/music/playlist" element={<Playlist />} />
      <Route exact path="/music/artist" element={<Artist />} />
      <Route exact path="/movies" element={<Movie />} />
      <Route exact path="/movie/:id" element={<MovieDetails />} />
      <Route exact path="/tv" element={<TV />} />
    </Routes>
  );
}

export default App;

import "./App.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import { Movie, Home, Music, TV, MovieDetails } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/music" element={<Music />} />
      <Route exact path="/movies" element={<Movie />} />
      <Route exact path="/movie/:id" element={<MovieDetails />} />
      <Route exact path="/tv" element={<TV />} />
    </Routes>
  );
}

export default App;

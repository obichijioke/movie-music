import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WithNavs from "../components/layout/WithNavs";
import ReactStars from "react-rating-stars-component";
import SimilarMovies from "../components/movie/SimilarMovies";
import Credits from "../components/movie/Credits";
import CastList from "../components/movie/CastList";
import { Tab } from "@headlessui/react";
import VideoPlayer from "../components/movie/VideoPlayer";
import MovieImages from "../components/movie/MovieImages";

const MovieDetails = () => {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getMovieDetails(params.id);
  }, [params.id]);

  const getMovieDetails = async (id) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
      );
      setMovieDetails(res.data);
    } catch (error) {}
  };
  return (
    <>
      {movieDetails && (
        <div className="w-full h-screen hideScroll relative">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
            alt=""
            className="absolute w-full top-0 left-0 z-10"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-[#191a1e59] z-20"></div>
          <div className="w-full h-full absolute top-80 left-0 rounded-t-xl bg-[#191a1e] z-30"></div>
          <div className="w-full flex px-16">
            <div className="z-40 pt-20 w-3/4">
              <div className="flex relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
                  alt=""
                  className="h-[500px] rounded-lg shadow-2xl"
                />
                <div className="pl-10 ">
                  <p className="text-lg font-semibold text-gray-200 drop-shadow mb-2">
                    2017
                  </p>
                  <p className="text-5xl font-bold text-gray-200 drop-shadow">
                    {movieDetails?.title}
                  </p>
                  <p className=" text-lg font-semibold text-gray-200 drop-shadow my-5">
                    Adventure, Drama{" "}
                  </p>
                  <p className="text-lg font-semibold text-gray-200 drop-shadow mb-2">
                    TMDB
                  </p>
                  <div className="flex items-center text-gray-500">
                    {movieDetails != null && (
                      <ReactStars
                        edit={false}
                        isHalf={true}
                        count={5}
                        value={movieDetails?.vote_average / 2}
                        size={20}
                        activeColor="#f34e18"
                      />
                    )}
                    <p className="ml-3 text-lg text-gray-200 drop-shadow">{` ${(
                      movieDetails?.vote_average / 2
                    ).toFixed(1)} (${movieDetails?.vote_count})`}</p>
                  </div>
                  <p className="text-lg font-bold text-gray-200 drop-shadow mb-2 mt-12">{`About ${movieDetails?.title}`}</p>
                  <p className="text-gray-400">{movieDetails?.overview}</p>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="w-1/4 pr-5">
                  <p className="text-white font-semibold text-xl mb-5">
                    Movie Cast
                  </p>
                  <ul>
                    <CastList id={movieDetails?.id} />
                  </ul>
                </div>
                <div className="w-3/4 pl-10">
                  <p className="text-white font-semibold text-xl mb-5">
                    Similar Movies
                  </p>
                  <SimilarMovies id={movieDetails?.id} />
                </div>
              </div>
              <div className="my-8">
                <VideoPlayer />
              </div>
            </div>
            <div className="w-1/4 z-40 pl-12 relative top-[360px]">
              <Tab.Group>
                <Tab.List>
                  <Tab>
                    <p className="px-8 py-2 bg-[#25262b] rounded-full mr-4 text-white font-semibold hover:bg-orange-700 mb-3 outline-none">
                      Tab 1
                    </p>
                  </Tab>
                  <Tab>
                    <p className="px-8 py-2 bg-[#25262b] rounded-full mr-4 text-white font-semibold hover:bg-orange-700 mb-3">
                      Tab 2
                    </p>
                  </Tab>
                  <Tab>
                    <p className="px-8 py-2 bg-[#25262b] rounded-full mr-4 text-white font-semibold hover:bg-orange-700 mb-3">
                      Tab 3
                    </p>
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="">
                      <MovieImages id={movieDetails?.id} />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>Content 2</Tab.Panel>
                  <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
              <div className="my-8">
                <CastList id={movieDetails?.id} image={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WithNavs(MovieDetails);

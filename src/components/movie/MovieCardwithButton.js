import React from "react";
import WatchButton from "./WatchButton";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCardwithButton = ({
  showOverview,
  title,
  poster,
  vote,
  vote_count,
  overview,
  id,
  release_date,
  playButton,
  link,
}) => {
  return (
    <div className="flex p-3 bg-[#ffffff0a] w-full rounded-lg">
      <div className="w-1/3">
        <Link to={`${link && link}`}>
          <img
            className="rounded w-full object-cover h-auto cursor-pointer"
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt="poster-card"
          />
        </Link>
      </div>

      <div className="w-2/3 flex flex-col justify-between px-3 md:px-6 h-auto pb-2 pt-2">
        <div>
          <Link to={`${link && link}`}>
            <p className="text-white font-bold text-lg">{title && title}</p>
          </Link>
          <div className="flex items-center text-gray-500 text-sm font-medium mt-3 mb-2">
            <p className="">{release_date && release_date.slice(0, 4)} </p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
            </svg>
            <p className="">Adventure, Drama </p>
          </div>
        </div>

        {showOverview && (
          <p className="text-gray-400 text-xs">
            {overview && overview.length > 70
              ? overview.slice(0, 70) + "..."
              : overview}
          </p>
        )}
        <div>
          <div className="flex items-center text-gray-500">
            <ReactStars
              edit={false}
              isHalf={true}
              count={5}
              value={vote / 2}
              size={20}
              activeColor="#f34e18"
            />
            <p className="ml-3">{` ${(vote / 2).toFixed(
              1
            )} (${vote_count})`}</p>
          </div>
        </div>
        <div className="md:w-3/4  mt-2">
          <Link to={`${link && link}`}>
            <WatchButton title={playButton && playButton} />
          </Link>
        </div>
      </div>
    </div>
  );
};

MovieCardwithButton.defaultProps = {
  showOverview: false,
};

export default MovieCardwithButton;

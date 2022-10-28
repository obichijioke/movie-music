import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({
  showOverview,
  title,
  poster,
  vote,
  vote_count,
  id,
  release_date,
  link,
}) => {
  return (
    <Link to={`${link}`}>
      <div className="relative rounded-lg overflow-hidden cursor-pointer">
        {poster && (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title && title}
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-2 black-grad w-full">
          <p className="text-white font-medium">{title && title}</p>
          <div className="flex items-center justify-between text-gray-500">
            <ReactStars
              edit={false}
              isHalf={true}
              count={5}
              value={vote && vote / 2}
              size={20}
              activeColor="#f34e18"
            />
            <p className="ml-3">{` ${(vote && vote / 2).toFixed(1)} (${
              vote_count && vote_count
            })`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

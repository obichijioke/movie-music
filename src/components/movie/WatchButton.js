import React from "react";

const WatchButton = ({ title }) => {
  return (
    <div className="relative rounded-full pl-5 pr-12 lg:pr-14 text-white bg-[#fbfbfb24] inline-block cursor-pointer hover:bg-orange-600">
      <p className="py-2 text-xs lg:text-base">{title ? title : "Watch Now"}</p>
      <div className="absolute p-2 bg-[#ffffff12] rounded-full -top-3 lg:-top-2 -right-2">
        <div className="h-10 w-10 hover:bg-white bg-[#a09fa4] rounded-full flex items-center justify-center hover:text-orange-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WatchButton;

import React, { useState, useRef } from "react";
import PlayPause from "./PlayPause";
import Slider from "@mui/material/Slider";
import ReactPlayer from "react-player";
import { styled, useTheme } from "@mui/material/styles";
import Duration from "./Duration";

const MusicPlayer = () => {
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const [duration, setDuration] = useState(400);
  const playerRef = useRef(null);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=F8bZVnynDdc");

  const handleposition = (value) => {
    if (!seeking) {
      setPosition(value.playedSeconds);
    }
  };

  const handleSeeking = (value) => {
    setSeeking(true);
    playerRef.current.seekTo(parseFloat(value));
  };
  return (
    <>
      <ReactPlayer
        ref={playerRef}
        playing={isPlaying}
        onProgress={(progress) => handleposition(progress)}
        onDuration={(duration) => setDuration(duration)}
        onEnded={() => setIsplaying(false)}
        volume={0.753}
        height="0px"
        width="0px"
        url={url}
      />
      <div className="fixed bg-[#232429] rounded p-3 w-[90%] flex justify-between items-center bottom-5 right-5">
        <div className="flex items-center">
          <img
            src="https://image.tmdb.org/t/p/w500//fenNPxVF5ERy0CSyVruuEg959Hg.jpg"
            alt=""
            className="h-[90px] w-[90px] object-cover rounded-lg mr-5"
          />
          <div className="">
            <p className="font-bold text-white cursor-pointer">
              Chance The Rapper
            </p>
            <p className="text-gray-500 font-medium">Pop King</p>
          </div>
        </div>
        <div className="w-3/5">
          <div className="flex items-center gap-5 text-gray-400 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
              />
            </svg>
            <PlayPause
              isPlaying={isPlaying}
              onClick={() => setIsplaying(!isPlaying)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </div>
          <div className="flex items-center gap-5 text-gray-500 text-xs font-medium mt-2 justify-center w-full">
            <p>
              <Duration seconds={position} />
            </p>
            <Slider
              aria-label="time-indicator"
              size="small"
              value={position}
              min={0}
              step={1}
              max={duration}
              onChange={(_, value) => handleSeeking(value)}
              onChangeCommitted={() => setSeeking(false)}
              sx={{
                color: "#fe400c",
                height: 4,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&:before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible": {
                    boxShadow: `0px 0px 0px 8px ${
                      theme.palette.mode === "dark"
                        ? "rgb(255 255 255 / 16%)"
                        : "rgb(0 0 0 / 16%)"
                    }`,
                  },
                  "&.Mui-active": {
                    width: 20,
                    height: 20,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <p>
              <Duration seconds={duration} />
            </p>
          </div>
        </div>
        <div className="h-[90px] w-[110px] object-cover rounded-lg mr-5 bg-[#272a31] p-2 flex justify-center items-center cursor-pointer">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-xs">Up next</p>
            <p className="font-medium text-sm text-white">Beliver</p>
            <p className="text-gray-400 text-xs">Flume</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

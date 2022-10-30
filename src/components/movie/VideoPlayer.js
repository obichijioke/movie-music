import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import Slider from "@mui/material/Slider";
import { styled, useTheme } from "@mui/material/styles";
import Duration from "../music/MusicPlayer/Duration";
import Volume from "./Volume";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";

const VideoPlayer = ({ height, width, videopath }) => {
  const videoPlayerRef = useRef(null);
  const newRef = useRef(null);
  const theme = useTheme();
  const [position, setPosition] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);
  const [duration, setDuration] = useState(400);
  const [volume, setVolume] = useState(0.5);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=F8bZVnynDdc");

  const handleposition = (value) => {
    if (!seeking) {
      setPosition(value.playedSeconds);
    }
  };

  const handleClickFullscreen = () => {
    screenfull.toggle(findDOMNode(newRef.current));
  };

  const handleSeeking = (value) => {
    setSeeking(true);
    videoPlayerRef.current.seekTo(parseFloat(value));
  };
  return (
    <div
      className="relative rounded-lg overflow-hidden w-full h-[600px]"
      ref={newRef}
    >
      <ReactPlayer
        ref={videoPlayerRef}
        playing={isPlaying}
        onProgress={(progress) => handleposition(progress)}
        onDuration={(duration) => setDuration(duration)}
        onEnded={() => setIsplaying(false)}
        volume={volume}
        height={height}
        width={width}
        url={url}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[#00000061]">
        <div className="w-full h-full relative">
          <div className="absolute flex items-center justify-between w-full bottom-3 left-0 px-10 pb-5">
            <div className="flex items-center text-gray-400 gap-3">
              <div
                className=" cursor-pointer"
                onClick={() => setIsplaying(!isPlaying)}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                )}
              </div>
              <Volume setValue={setVolume} />
            </div>
            <div className="flex items-center text-gray-400 gap-3 w-2/3">
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
            <div className="flex items-center text-gray-400 gap-3">
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
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 cursor-pointer"
                onClick={handleClickFullscreen}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.defaultProps = {
  height: "100%",
  width: "100%",
};
export default VideoPlayer;

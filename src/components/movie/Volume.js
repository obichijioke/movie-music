import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Volume = ({ setValue }) => {
  const [showSlider, setShowSlider] = useState(false);

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }
  return (
    <div
      className="relative cursor-pointer text-center"
      onMouseEnter={() => setShowSlider(true)}
    >
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
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>

      <div
        className={`absolute h-28 bottom-0 -left-1 flex justify-center pb-6 ${
          !showSlider && "hidden"
        } `}
        onMouseEnter={() => setShowSlider(true)}
        onMouseLeave={() => setShowSlider(false)}
      >
        <Slider
          size="small"
          color="secondary"
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
            color: "#fe400c",
          }}
          orientation="vertical"
          defaultValue={50}
          aria-label="Volume"
          valueLabelDisplay="auto"
          onKeyDown={preventHorizontalKeyboardNavigation}
          onChange={(_, value) => setValue(value / 100)}
        />
      </div>
    </div>
  );
};

Volume.defaultProps = {
  value: 0.5,
};

export default Volume;

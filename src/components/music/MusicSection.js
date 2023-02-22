import React from "react";
import Slider from "react-slick";
import MusicCard from "./MusicCard";

const MusicSection = ({ data, display }) => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="px-10 my-10 w-full">
      {data && (
        <p className="text-gray-200 text-2xl font-semibold mb-5">
          {data.title}
        </p>
      )}
      {data && (
        <Slider {...settings}>
          {data.contents.map((item, i) => (
            <MusicCard key={i} data={item} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MusicSection;

import React from "react";
import Slider from "react-slick";

const MusicSliderCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <div className="w-[500px]">
      {" "}
      <Slider {...settings}>
        <div className="h-[250px] w-[250px] bg-green-500">
          <h3>1</h3>
        </div>
        <div className="h-[250px] w-[250px] bg-blue-500">
          <h3>2</h3>
        </div>
        <div className="h-[250px] w-[250px] bg-blue-700">
          <h3>3</h3>
        </div>
        <div className="h-[250px] w-[250px] bg-blue-900">
          <h3>4</h3>
        </div>
        <div className="h-[250px] w-[250px] bg-pink-900">
          <h3>5</h3>
        </div>
        <div className="h-[250px] w-[250px] bg-orange-900">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MusicSliderCarousel;

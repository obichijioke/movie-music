import React from "react";
import { Carousel } from "3d-react-carousal";
//import "./style.css";

const Carousel3D = () => {
  let slides = [
    <img src="https://picsum.photos/600/500/?random" alt="1" />,
    <img src="https://picsum.photos/600/500/?random" alt="2" />,
    <img src="https://picsum.photos/600/500/?random" alt="3" />,
    <img src="https://picsum.photos/600/500/?random" alt="4" />,
    <img src="https://picsum.photos/600/500/?random" alt="5" />,
  ];

  const callback = function (index) {
    console.log("callback", index);
  };
  return (
    <div className="w-full h-[500px]">
      <Carousel
        slides={slides}
        //autoplay={true}
        //interval={8000}
        onSlideChange={callback}
      />
    </div>
    // <div className="gallery">
    //   <div className="gallery-container">
    //     <div className="gallery-item gallery-item-1 bg-slate-300">Item 1</div>
    //     <div className="gallery-item gallery-item-2 bg-black">Item 2</div>
    //     <div className="gallery-item gallery-item-3 bg-red-600">Item 3</div>
    //     <div className="gallery-item gallery-item-4 bg-slate-700">Item 4</div>
    //     <div className="gallery-item gallery-item-5 bg-orange-800">Item 5</div>
    //   </div>
    //   <div className="gallery-controls"></div>
    // </div>
  );
};

export default Carousel3D;

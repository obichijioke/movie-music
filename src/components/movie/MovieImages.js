import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";

const MovieImages = ({ id }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [backDrops, setBackDrops] = useState([]);
  useEffect(() => {
    getImages(id);
  }, [id]);
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4,
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3,
    },
  ];

  const generateRandomNumber = (max, min) => {
    const number = Math.floor(Math.random() * max + min);
    console.log(number);
    return number;
  };

  const processImages = (images) => {
    let arr = [];
    images.map((item, i) => {
      arr.push({
        src: `https://www.themoviedb.org/t/p/original${item.file_path}`,
        width: generateRandomNumber(4, 1),
        height: generateRandomNumber(4, 1),
      });
    });
    setBackDrops(arr);
  };

  const getImages = async (id) => {
    try {
      if (id) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=5a8d140617ee0ca7ca93b93e2c039a50`
        );
        processImages(res.data.backdrops);
      }
    } catch (error) {}
  };

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div className="h-[350px] overflow-y-scroll custom-scroll-bar">
      <Gallery photos={backDrops} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={backDrops.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default MovieImages;

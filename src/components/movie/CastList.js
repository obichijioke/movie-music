import React, { useEffect, useState } from "react";
import axios from "axios";

const CastList = ({ id, image }) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    getCredits(id);
  }, [id]);
  const getCredits = async (id) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a8d140617ee0ca7ca93b93e2c039a50&language=en-US`
      );
      setCredits(res.data.cast);
    } catch (error) {}
  };
  return (
    <div className="w-full">
      {!image && (
        <div>
          {credits != null &&
            credits.map((item, i) => {
              if (i < 8) {
                return (
                  <li className="flex justify-between text-sm my-2" key={i}>
                    <p className="text-gray-200">{item.character}</p>
                    <p className="text-gray-400">{item.name}</p>
                  </li>
                );
              }
            })}
        </div>
      )}
      {image && (
        <div>
          <p className="text-gray-300 text-3xl my-3">Cast</p>
          <div className=" h-96 overflow-y-scroll custom-scroll-bar">
            {credits != null &&
              credits.map((item, i) => {
                if (i < 8) {
                  return (
                    <li className="flex text-sm my-2 items-center" key={i}>
                      {item?.profile_path != null && (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
                          alt=""
                          className="rounded-lg w-2/5 h-28 object-cover mr-5"
                        />
                      )}
                      {item?.profile_path == null && (
                        <svg
                          id="glyphicons-basic"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="rounded-lg w-2/5 h-28 object-cover mr-5 bg-gray-700"
                        >
                          <path
                            fill="#b5b5b5"
                            id="user"
                            d="M27,24.23669V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V24.23669a1.57806,1.57806,0,0,1,.93115-1.36462L10.0672,20.167A5.02379,5.02379,0,0,0,14.55273,23h1.89454a5.02336,5.02336,0,0,0,4.48535-2.83313l5.13623,2.7052A1.57806,1.57806,0,0,1,27,24.23669ZM9.64478,14.12573a2.99143,2.99143,0,0,0,1.31073,1.462l.66583,3.05176A2.99994,2.99994,0,0,0,14.55237,21h1.89526a2.99994,2.99994,0,0,0,2.931-2.36047l.66583-3.05176a2.99115,2.99115,0,0,0,1.31073-1.462l.28-.75146A1.2749,1.2749,0,0,0,21,11.62988V9c0-3-2-5-5.5-5S10,6,10,9v2.62988a1.2749,1.2749,0,0,0-.63519,1.74439Z"
                          />
                        </svg>
                      )}
                      <div>
                        <p className="text-gray-200 text-lg font-semibold my-1">
                          {item.name}
                        </p>
                        <p className="text-gray-400 ">{item.character}</p>
                      </div>
                    </li>
                  );
                }
              })}
          </div>
        </div>
      )}
    </div>
  );
};

CastList.defaultProps = {
  image: false,
};

export default CastList;

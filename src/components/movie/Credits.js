import React, { useEffect, useState } from "react";
import axios from "axios";

const Credits = ({ id }) => {
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
  );
};

export default Credits;

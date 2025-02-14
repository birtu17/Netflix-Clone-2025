import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import style from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <div
      className={style.banner}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className={style.bannerContents}>
        <h1 className={style.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className={`${style.bannerButton} ${style.play}`}>
            play
          </button>
          <button className={style.bannerButton}>My List</button>
        </div>
        <h1 className={style.bannerDescription}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={style.bannerFadeButton} />
    </div>
  );
};

export default Banner;

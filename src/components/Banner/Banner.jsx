import React from "react";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import banner from "./Banner.module.css";

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
      className={banner.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className={banner.bannerContents}>
        <h1 className={banner.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={banner.bannerButton}>
          <button className={`${banner.bannerButton} ${banner.play}`}>
            play
          </button>
          <button className={banner.bannerButton}>My List</button>
        </div>
        <h1 className={banner.bannerDescription}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={banner.bannerFadeButton} />
    </div>
  );
};

export default Banner;

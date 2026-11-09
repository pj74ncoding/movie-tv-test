import { useEffect } from "react";

//** Home Component API's */

export const ProjectApis = () => {
  const topRatedMovieFetchData = async () => {
    try {
      //** apikey to use through vercel */

      // const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      // const movieResponse = await fetch(
      //   `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
      // );
      const movieResponse = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const movieDataResult = await movieResponse.json();

      localStorage.setItem(
        "home-hero-movie-data",
        JSON.stringify(movieDataResult.results),
      );
    } catch (error) {
      console.warn("the popularMovieFetchData error is: ", error);
    }
  };

  const topRatedTVFetchData = async () => {
    try {
      const TvResponse = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );

      const tvDataResult = await TvResponse.json();
      localStorage.setItem(
        "home-hero-tv-data",
        JSON.stringify(tvDataResult.results),
      );
    } catch (error) {
      console.warn("The topRatedTVFetchData error is: ", error);
    }
  };

  const movieTrendingFetchData = async () => {
    try {
      const movieResponse = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const movieDataResult = await movieResponse.json();
      localStorage.setItem(
        "home-trending-movies-data",
        JSON.stringify(movieDataResult.results),
      );
    } catch (error) {
      console.warn("The movieTrendingFetchData is: ", error);
    }
  };

  const tvTrendingFetchData = async () => {
    try {
      const movieResponse = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?api_key=5a1dbe02eaed7aed89976013dcbc8aef",
      );
      const tvDataResult = await movieResponse.json();
      localStorage.setItem(
        "home-trending-tv-data",
        JSON.stringify(tvDataResult.results),
      );
    } catch (error) {
      console.warn("The movieTrendingFetchData is: ", error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("home-hero-movie-data")) {
      localStorage.setItem("home-hero-movie-data", JSON.stringify([]));
    }

    if (!localStorage.getItem("home-hero-tv-data")) {
      localStorage.setItem("home-hero-tv-data", JSON.stringify([]));
    }

    if (!localStorage.getItem("home-trending-movies-data")) {
      localStorage.setItem("home-trending-movies-data", JSON.stringify([]));
    }

    if (!localStorage.getItem("home-trending-tv-data")) {
      localStorage.setItem("home-trending-tv-data", JSON.stringify([]));
    }

    topRatedMovieFetchData();
    topRatedTVFetchData();
    movieTrendingFetchData();
    tvTrendingFetchData();
  }, []);

  return <></>;
};

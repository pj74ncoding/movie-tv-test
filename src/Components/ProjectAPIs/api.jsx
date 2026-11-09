import { useEffect } from "react";

//** Home Component API's */

const heroMovieDataArray = [];
if (localStorage.getItem("home-hero-movie-data") == null) {
  localStorage.setItem("home-hero-movie-data", heroMovieDataArray);
}

const heroTvDataArray = [];
if (localStorage.getItem("home-hero-tv-data") == null) {
  localStorage.setItem("home-hero-tv-data", heroTvDataArray);
}

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

  useEffect(() => {
    topRatedMovieFetchData();
    topRatedTVFetchData();
  }, []);

  return (<></>);
};

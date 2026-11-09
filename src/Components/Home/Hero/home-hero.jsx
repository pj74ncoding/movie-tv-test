import { useEffect, useMemo, useState, createContext } from "react";
import { HeroCard } from "./home-hero-card";

export const indexContext = createContext();
export const HomeHero = () => {
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);
  const [topRatedTvData, setTopRatedTvData] = useState([]);
  const [trendingMovieData, setTrendingMovieData] = useState([]);
  const [trendingTvData, setTrendingTvData] = useState([]);
  const [slicedData, setSlicedData] = useState([]);
  const [mixedData, setMixedData] = useState([]);

  useEffect(() => {
    // const storedHeroMovie = JSON.parse(
    //   localStorage.getItem("home-hero-movie-data") || "[]",
    // );

    const storedHeroMovie = JSON.parse(
      localStorage.getItem("home-hero-movie-data") || "[]",
    );
    const storedHeroTv = JSON.parse(
      localStorage.getItem("home-hero-tv-data") || "[]",
    );

    const storedTrendingMovie = JSON.parse(
      localStorage.getItem("home-trending-movies-data") || "[]",
    );

    const storedTrendingTv = JSON.parse(
      localStorage.getItem("home-trending-tv-data") || "[]",
    );
    setTopRatedMovieData(storedHeroMovie);
    setTopRatedTvData(storedHeroTv);
    setTrendingMovieData(storedTrendingMovie);
    setTrendingTvData(storedTrendingTv);
  }, []);
  console.log("trendingTvData", trendingTvData);
  //**================================= */

  const slicedTopRatedTV = useMemo(
    () => topRatedTvData.slice(0, 4),
    [topRatedTvData],
  );
  const slicedTopRatedMovie = useMemo(
    () => topRatedMovieData.slice(0, 4),
    [topRatedMovieData],
  );

  useEffect(() => {
    setSlicedData([...slicedTopRatedMovie, ...slicedTopRatedTV]);
  }, [slicedTopRatedMovie, slicedTopRatedTV]);

  //**================================= */

  const flatMappedData = useMemo(() => {
    const newArray = slicedData.slice();
    return newArray
      .slice(0, newArray.length / 2)
      .flatMap((x, i) => [x, newArray[i + newArray.length / 2]]);
  }, [slicedData]);

  useEffect(() => {
    setMixedData(flatMappedData);
  }, [flatMappedData]);

  //**================================= */

  const [index, setIndex] = useState(0);

  let slideShow;
  const nextSlide = () => {
    if (index == 7) {
      setIndex(0);
    } else {
      setIndex((current) => current + 1);
    }
  };

  const prevSlide = () => {
    if (index == 0) {
      setIndex(7);
    } else {
      setIndex((current) => current - 1);
    }
  };

  useEffect(() => {
    slideShow = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideShow);
  }, [index]);

  //** ==================================================== */

  return (
    <>
      <main className="hero-main-container">
        <indexContext.Provider value={{ index, setIndex }}>
          <HeroCard mixedData={mixedData} contextValues={{ index, setIndex }} />
        </indexContext.Provider>
      </main>
    </>
  );
};

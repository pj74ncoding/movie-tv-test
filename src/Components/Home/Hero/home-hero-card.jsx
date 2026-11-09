import { useContext } from "react";
import { HomeSlideMarker } from "./hero-slide-markers";
import { indexContext } from "./home-hero";
export const HeroCard = ({ mixedData }) => {
  const { index, setIndex } = useContext(indexContext);
  return (
    <>
      <section className="hero-card-container">
        <img
          className="hero-image"
          src={`https://image.tmdb.org/t/p/w500${mixedData[index]?.poster_path}`}
          alt="Poster of Movie or Tv show"
        />

        <div className="hero-overview-main-container">
          {mixedData[index]?.name ? (
            <p className="hero-media-type">Tv Series </p>
          ) : (
            <p className="hero-media-type">Movie</p>
          )}

          <div className="hero-overview-container">

            <div className="hero-name-or-title-container">
              {mixedData[index]?.name ? (
                <p className="hero-name-or-title"> {mixedData[index]?.name} </p>
              ) : (
                <p className="hero-name-or-title">{mixedData[index]?.title} </p>
              )}
            </div>

            <div className="hero-date-and-rating-container">
              {mixedData[index]?.first_air_date ? (
                <p>{mixedData[index]?.first_air_date}</p>
              ) : (
                <p>{mixedData[index]?.release_date}</p>
              )}
              <div className="hero-star-and-rating-container">
                <span className="material-symbols-outlined">star</span>
                <p>{mixedData[index]?.vote_average.toFixed(1)}</p>
              </div>
            </div>

            <div className="hero-overview-description-container">
              <p className="hero-overview">
                {mixedData[index]?.overview}
              </p>
            </div>
            
          </div>
          <HomeSlideMarker />
        </div>
      </section>
    </>
  );
};

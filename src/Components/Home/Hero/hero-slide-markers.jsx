import { useContext } from "react";
import { indexContext } from "./home-hero";
import "../../../App.css";

export const HomeSlideMarker = () => {
  const { index, setIndex } = useContext(indexContext);
  return (
    <section className="slide-markers-container center-alignment">
      <div
        className={index == 0 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(0)}
      ></div>
      <div
        className={index == 1 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(1)}
      ></div>
      <div
        className={index == 2 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(2)}
      ></div>
      <div
        className={index == 3 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(3)}
      ></div>
      <div
        className={index == 4 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(4)}
      ></div>
      <div
        className={index == 5 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(5)}
      ></div>
      <div
        className={index == 6 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(6)}
      ></div>
      <div
        className={index == 7 ? "selected-slide-marker" : "slide-marker"}
        onClick={() => setIndex(7)}
      ></div>
    </section>
  );
};

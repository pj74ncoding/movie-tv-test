import { NavSection } from "../Nav/NavSection";
import { HomeHero } from "./Hero/home-hero";
import { Footer } from "../Footer";

export const Home = () => {
  return (
    <>
      <div className="home-component-container">

        <NavSection page="home" />
        <HomeHero />

        <div className="footer-component-container">
          <Footer page="home" />
        </div>
      </div>
    </>
  );
};

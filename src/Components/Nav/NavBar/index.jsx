import { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import foxLogo from "/fox-logo.png";
import foxMediaLogo from "/fox-74-media-nav-logo.png";
import { NavOptions } from "../NavOptions";
export const NavBar = ({ hamburgerNavOptionsRef, pageClassName }) => {
  const [viewHamburgerMenu, setViewHamburgerMenu] = useState(false);

  const hamburgerIconRef = useRef(null);
  const closeIconRef = useRef(null);

  useEffect(() => {
    const closeIcon = closeIconRef.current;

    if (closeIcon) {
      closeIcon.classList.add("icon-hidden");
    }

    return () => {
      closeIcon.classList.remove("icon-hidden");
    };
  }, []);
  const openMenu = () => {
    const closeIcon = closeIconRef.current;
    const hamburgerIcon = hamburgerIconRef.current;
    const hamburgerNavOptions = hamburgerNavOptionsRef.current;
    if (!viewHamburgerMenu) {
      closeIcon.classList.remove("icon-hidden");
      hamburgerIcon.classList.add("icon-hidden");

      hamburgerNavOptions.classList.remove("hamburger-options-not-displayed");
      hamburgerNavOptions.classList.add("hamburger-options-visable");
      setViewHamburgerMenu((current) => !current);
    } else {
      closeIcon.classList.add("icon-hidden");
      hamburgerIcon.classList.remove("icon-hidden");
      hamburgerNavOptions.classList.remove("hamburger-options-visable");
      hamburgerNavOptions.classList.add("hamburger-options-hidden");

      setViewHamburgerMenu((current) => !current);
    }
  };
  return (
    <nav className="nav-bar">
      <Link className="big-screen-image-home-link" to="/Home">
        <img
          className="fox-media-logo"
          src={foxMediaLogo}
          alt="Fox Media urban style graphics"
        />
      </Link>
      <div className="nav-icons-left-container center-alignment">
        <span className="material-symbols-outlined" ref={hamburgerIconRef}>
          menu
        </span>
        <span
          className="material-symbols-outlined"
          ref={closeIconRef}
          onClick={openMenu}
        >
          close
        </span>
        <Link to="/Home">
          <img
            className="small-screen-fox-media-logo"
            src={foxMediaLogo}
            alt="Fox74 Media urban style graphics"
          />
        </Link>
      </div>
      <div className="nav-bar-options-container nav-bar-options-display">
        <NavOptions
          NavOptionsClassName="nav-bar-options"
          pageClassName={pageClassName}
        />
      </div>
      <div className="nav-icons-right-container center-alignment">
        <span className="material-symbols-outlined">search</span>
        <div className="nav-profile-container center-alignment">
          <img
            className="nav-profile-image"
            src={foxLogo}
            alt="A fox head"
            width="30px"
          />
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

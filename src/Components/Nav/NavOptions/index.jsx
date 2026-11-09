import {Link, Outlet } from "react-router-dom";
import {useContext} from "react"
import home from "/home-logo.png";
import watchList from "/watchlist-logo.png";
import movies from "/movies-logo.png";
import tv from "/tv-logo.png";
import { NavContext } from "../NavSection";



export const NavOptions = ({ NavOptionsClassName }) => {
    const pageClassName = useContext(NavContext);
    
  return (
    <>
      <nav className={`${NavOptionsClassName} main-nav`}>
        <div className={`${NavOptionsClassName}-icon-container`}>
          <span
            style={{
              color: pageClassName == "home" ? "#ffde59" : null,
            }}
            className="material-symbols-outlined"
          >
            home
          </span>

          <Link
            className="nav-bar-options-icon-container-link home-link"
            to="/Home"
          >
            {pageClassName == "home" ? (
              <img
                src={home}
                alt="Home text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageClassName == "home" ? "orange" : null,
                }}
              >
                Home
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageClassName}`}
        >
          <span
            style={{ color: pageClassName == "watchlist" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            library_add
          </span>
          <Link
            className="nav-bar-options-icon-container-link watchlist-link"
            to="/Watchlist"
          >
            {pageClassName == "watchlist" ? (
              <img
                src={watchList}
                alt="Watchlist text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageClassName == "watchlist" ? "orange" : null,
                }}
              >
                Watchlist
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageClassName}`}
        >
          <span
            style={{ color: pageClassName == "movies" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            movie
          </span>
          <Link
            className="nav-bar-options-icon-container-link movies-link"
            to="/Movies"
          >
            {pageClassName == "movies" ? (
              <img
                src={movies}
                alt="Movies text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageClassName == "movies" ? "orange" : null,
                }}
              >
                Movies
              </p>
            )}
          </Link>
        </div>
        <div
          className={`${NavOptionsClassName}-icon-container ${pageClassName}`}
        >
          <span
            style={{ color: pageClassName == "tv" ? "#ffde59" : null }}
            className="material-symbols-outlined"
          >
            tv_gen
          </span>
          <Link
            className="nav-bar-options-icon-container-link tv-link"
            to="/TV"
          >
            {/* <p style={{ color: pageClassName == "tv" ? "orange" : null }}>TV</p> */}
            {/* <img src={tv} alt="Tv text in graffiti style" height="50px" /> */}
            {pageClassName == "tv" ? (
              <img
                src={tv}
                alt="TV text in graffiti style"
                className="selected-page-logo"
              />
            ) : (
              <p
                style={{
                  color: pageClassName == "tv" ? "orange" : null,
                }}
              >
                Tv
              </p>
            )}
          </Link>
        </div>
        {/* <div className={`${NavOptionsClassName}-icon-container`}>
        <span className="material-symbols-outlined">star</span>
        <p>Favourites</p>
      </div> */}
      </nav>

      {/* Second nav bar Second nav bar  Second nav bar  Second nav bar  Second nav bar */}
      {/* For screen sizes between 500px and 768px  For screen sizes between 500px and 768px */}

      <nav className="second-nav-bar">
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Home">
            <span
              className={
                pageClassName == "home"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              home
            </span>
          </Link>
        </div>

        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Watchlist">
            <span
              className={
                pageClassName == "watchlist"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              library_add
            </span>
          </Link>
        </div>
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/Movies">
            <span
              className={
                pageClassName == "movies"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              movie
            </span>
          </Link>
        </div>
        <div className="second-nav-bar-link-container center-alignment">
          <Link to="/TV">
            <span
              className={
                pageClassName == "tv"
                  ? "selected-second-nav-bar-link material-symbols-outlined"
                  : "second-nav-bar-link material-symbols-outlined"
              }
            >
              tv_gen
            </span>
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

import { Link, Outlet } from "react-router-dom";
import home from "/footer-home-logo.png";

import "../../App.css";

export const Footer = ({ page }) => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="footer-container center-alignment">
        <Link to="/Home" className="footer-link">
          {page == "home" ? (
            <img
              src={home}
              alt="Home text in graffiti style"
              className="footer-home-logo"
            />
          ) : (
            <div className="footer-link-not-home-page-container center-alignment">
              <span className="material-symbols-outlined">home</span>
            </div>
          )}
        </Link>
      </div>
      <Outlet />
    </>
  );
};

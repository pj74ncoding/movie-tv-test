import React from "react";
import { Link, Outlet } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <section className="Landing-page-section">
        <h1 className="landing-h1">My Media Project</h1>
        <nav>
          <Link className="landing-link" to="/Home">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </nav>
      </section>
      <Outlet />
    </>
  );
};

import { createContext, useRef, useState } from "react";
import { NavOptions } from "../NavOptions";
import { NavBar } from "../NavBar";

export const NavContext = createContext();
export const NavSection = ({ page }) => {
  const [pageSelected, setPageSelected] = useState(page);
  const hamburgerNavOptionsRef = useRef(null);

  return (
    <>
      <NavContext.Provider value={pageSelected}>
        <nav>
          <section className="nav-section">
            <NavBar hamburgerNavOptionsRef={hamburgerNavOptionsRef} />
          </section>
          <div
            className="Hamburger-nav-options hamburger-options-not-displayed"
            ref={hamburgerNavOptionsRef}
          >
            <NavOptions
              NavOptionsClassName="nav-options"
              pageClassName={pageSelected}
            />
          </div>
        </nav>
      </NavContext.Provider>
    </>
  );
};

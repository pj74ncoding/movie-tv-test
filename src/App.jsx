import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./screen-sizes.css";
import { ProjectApis } from "./Components/ProjectAPIs/api";
import { LandingPage } from "./Components/LandingPage";
import { Home } from "./Components/Home";
import { WatchList } from "./Components/WatchList";
import { Movies } from "./Components/Movies";
import TV from "./Components/TV";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProjectApis />
        <nav>
          <Link to="/"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Watchlist" element={<WatchList />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <nav style={{ marginBottom: "20px" }}>
//         <Link to="/products/car">Cars</Link> |{" "}
//         <Link to="/products/bike">Bikes</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// function CarProducts() {
//   return (
//     <div>
//       <h2>Cars</h2>
//       <ul>
//         <li>Audi</li>
//         <li>BMW</li>
//         <li>Volvo</li>
//       </ul>
//       <nav style={{ marginBottom: "20px" }}>
//         <Link to="/products/car/team">Team</Link> |{" "}
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// function Team() {
//   return (
//     <div>
//       <h2>Team</h2>
//       <ul>
//         <li>Leicester</li>
//         <li>Foxes</li>
//         <li>Vixens</li>
//       </ul>
//     </div>
//   );
// }
// function BikeProducts() {
//   return (
//     <div>
//       <h2>Bikes</h2>
//       <ul>
//         <li>Yamaha</li>
//         <li>Suzuki</li>
//         <li>Honda</li>
//       </ul>
//     </div>
//   );
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/products" element={<Products />}>
//           <Route path="car" element={<CarProducts />}>
//             <Route path="team" element={<Team />} />
//           </Route>
//           <Route path="bike" element={<BikeProducts />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

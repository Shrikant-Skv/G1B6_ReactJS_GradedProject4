import React, { ChangeEvent, Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/NavigationBar.css";
import Main from "./Main";
import MovieDetails from "./MovieDetails";
import { ImSearch } from "react-icons/im";

function NavigationBar() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("movies-in-theaters");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Fragment>
      <Router>
        <nav className="navigate-tabs">
          <div className="nav-options">
            <Link
              to={""}
              state={{ tab: "movies-in-theaters" }}
              onClick={() => handleTabClick("movies-in-theaters")}
            >
              <span className={activeTab === "movies-in-theaters" ? "active" : ""}>Movies in theaters</span>
            </Link>
            <Link
              to={""}
              state={{ tab: "movies-coming" }}
              onClick={() => handleTabClick("movies-coming")}
            >
              <span className={activeTab === "movies-coming" ? "active" : ""}> Coming soon</span>
            </Link>
            <Link
              to={""}
              state={{ tab: "top-rated-india" }}
              onClick={() => handleTabClick("top-rated-india")}
            >
              <span className={activeTab === "top-rated-india" ? "active" : ""}> Top rated Indian</span>
            </Link>
            <Link
              to={""}
              state={{ tab: "top-rated-movies" }}
              onClick={() => handleTabClick("top-rated-movies")}
            >
              <span className={activeTab === "top-rated-movies" ? "active" : ""}> Top rated movies</span>
            </Link>
            <Link
              to={""}
              state={{ tab: "favourite" }}
              onClick={() => handleTabClick("favourite")}
            >
              <span className={activeTab === "favourite" ? "active" : ""}> Favourites</span>
            </Link>
          </div>
          <div className="input-group">
            <input type="text" placeholder="Search movie" onChange={handleSearch} />
          </div>
          <button className="btn">
            <ImSearch size={17} color="white" />
          </button>
        </nav>
        <hr />

        <Routes>
          <Route path="" element={<Main searchValue={search} />} />
          <Route path="/:MovieName" element={<MovieDetails />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default NavigationBar;

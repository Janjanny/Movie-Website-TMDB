import { useState } from "react";
import "../styles/Movies.css";
import { SearchBar } from "../components";

function Movies() {
  return (
    <>
      <div className="movie-container">
        <SearchBar />
      </div>
    </>
  );
}
export default Movies;

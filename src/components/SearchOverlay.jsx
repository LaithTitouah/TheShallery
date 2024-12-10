import React, { useState, useEffect } from "react";
import "./css/Search.css"; // Make sure to import your CSS file
import Search from "./Search";
import Results from './Results';
import { fetchShow } from '../services/searchService';
import './css/SearchOverlay.css'

export default function Overlay({ user }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tvShow, setTvShow] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetchShow(searchTerm).then(setTvShow);
      console.log(fetchShow(searchTerm))
    }
  }, [searchTerm]);

  
  return (
    <>
      <button onClick={() => setShowOverlay(true)}>Add a Show</button>

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <h2>Search for a TV Show or Movie</h2>
              <Search setter={setSearchTerm} text={"Search for show..."}/>
              <Results user={user} shows={tvShow} />
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}

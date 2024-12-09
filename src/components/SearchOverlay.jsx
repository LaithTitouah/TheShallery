import React, { useState, useEffect } from "react";
import "./Search.css"; // Make sure to import your CSS file
import Search from "./Search";
import Results from './Results';
import { fetchShow, fetchShowById } from '../services/searchService';

export default function Overlay({ user }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tvShow, setTvShow] = useState('');
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchShow(searchTerm).then(setTvShow);
      console.log(fetchShow(searchTerm))
    }
  }, [searchTerm]);

  
  return (
    <>
      <button onClick={() => setShowOverlay(true)}>Search</button>
      

      {/* Overlay */}
      {showOverlay && (
        <>
          <div className="overlay">
            <div className="overlay-content">
              <h2>Search for a TV Show or Movie</h2>
              <Search setter={setSearchTerm} text={"Search for show..."}/>
              <Results user={user} shows={tvShow} tvShows={tvShows} />
              <button onClick={() => setShowOverlay(false)}>Close</button>
            </div>
          </div>
          <div className="blur-background"></div>
        </>
      )}
    </>
  );
}
